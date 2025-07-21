import { Code, Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import AddBlog from "../../components/AddBlogs";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../index.css";
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  datePublished: string;
  slug: string;
  coverImage: string;
  tags?: string;
  category: string;
}

// const toolbarOptions = [
//   ["bold", "italic", "underline", "strike"],
//   [{ color: [] }, { background: [] }],
//   ["blockquote"],
//   [{ list: "ordered" }, { list: "bullet" }],
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],
//   [{ align: [] }],
//   ["link"],
// ];

// const API_BASE = "https://bigwigdigitalbackend.onrender.com";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/viewblog`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;

    try {
      const res = await fetch(`${baseURL}/${slug}`, {
        method: "DELETE",
      });
      const json = await res.json();
      if (res.ok) {
        alert(json.msg || "Deleted successfully");
        fetchBlogs();
      } else {
        alert(json.msg || "Failed to delete");
      }
    } catch (error) {
      alert("Error deleting blog post");
    }
  };

  const handleEdit = (slug: string) => {
    const blogToEdit = blogs.find((b) => b.slug === slug);
    if (blogToEdit) {
      setEditingBlog(blogToEdit);
      setShowAddModal(true);
    }
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setEditingBlog(null);
  };

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-4">
      <div className="flex justify-between items-center sticky top-0 z-20 bg-black p-4 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Blog Posts</h1>
        <button
          className="text-white bg-[var(--primary-color)] px-4 py-2 rounded"
          onClick={() => {
            setEditingBlog(null); // ensure it's a new blog
            setShowAddModal(true);
          }}
        >
          Add New Blog
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-400">No blog posts found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-2 py-2 border-b border-gray-700 w-32 truncate">
                    Title
                  </th>

                  <th className="px-2 py-2 border-b border-gray-700 w-32 truncate">
                    Category
                  </th>
                  <th className="px-2 py-2 border-b border-gray-700 w-48 truncate">
                    Content
                  </th>
                  <th className="px-2 py-2 border-b border-gray-700 w-20 truncate">
                    Author
                  </th>
                  <th className="px-2 py-2 border-b border-gray-700 w-20 truncate">
                    Published
                  </th>
                  <th className="px-2 py-2 border-b border-gray-700 w-24 truncate">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-2 py-2 truncate whitespace-nowrap">
                      {blog.title}
                    </td>

                    <td className="px-2 py-2 truncate whitespace-nowrap">
                      {blog.category}
                    </td>
                    <td className="px-2 py-2 text-white">
                      <div
                        className="max-h-[100px] overflow-hidden text-ellipsis relative"
                        dangerouslySetInnerHTML={{
                          __html: blog.content,
                        }}
                      />
                    </td>

                    <td className="px-2 py-2 truncate whitespace-nowrap">
                      {blog.author}
                    </td>
                    <td className="px-2 py-2 truncate whitespace-nowrap">
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </td>
                    <td className="px-2 py-2 space-x-2">
                      <button
                        onClick={() => handleEdit(blog.slug)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.slug)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setHtmlContent(blog.content);
                          setEditingSlug(blog.slug);
                          setShowHtmlEditor(true);
                        }}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        <Code size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showAddModal && (
        <AddBlog
          onClose={handleModalClose}
          onSuccess={fetchBlogs}
          existingBlog={editingBlog} // Pass blog if editing
        />
      )}

      {showHtmlEditor && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-6 w-full max-w-3xl shadow-xl relative">
            <h2 className="text-xl font-bold mb-4">Edit Blog HTML</h2>

            <textarea
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="w-full h-64 p-3 border border-gray-300 rounded resize-none font-mono text-sm"
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => {
                  setShowHtmlEditor(false);
                  setHtmlContent("");
                  setEditingSlug(null);
                }}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  if (!editingSlug) return;
                  try {
                    const res = await fetch(`${baseURL}/${editingSlug}`, {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ content: htmlContent }),
                    });

                    if (!res.ok) throw new Error("Failed to update content");
                    alert("Blog updated successfully");
                    setShowHtmlEditor(false);
                    setHtmlContent("");
                    setEditingSlug(null);
                    fetchBlogs();
                  } catch (err) {
                    alert("Failed to save changes");
                    console.error(err);
                  }
                }}
                className="bg-[var(--primary-color)] text-white px-4 py-2 rounded hover:opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* {showContentEditor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-auto">
          <div className="relative bg-white text-black w-full max-w-3xl mx-4 my-12 p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Edit Blog Content</h3>

            <ReactQuill
              value={editorContent}
              onChange={setEditorContent}
              theme="snow"
              className="mb-4 h-64 overflow-y-auto"
              modules={{ toolbar: toolbarOptions }}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowContentEditor(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                disabled={saving}
                onClick={async () => {
                  if (!selectedBlog) return;

                  setSaving(true);
                  try {
                    const res = await fetch(
                      `https://bigwigdigitalbackend.onrender.com/${selectedBlog.slug}`,
                      {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          content: editorContent,
                        }),
                      }
                    );

                    if (!res.ok)
                      throw new Error("Failed to update blog content");

                    alert("Blog content updated successfully!");
                    setShowContentEditor(false);
                    fetchBlogs();
                  } catch (error) {
                    console.error(error);
                    alert(
                      "An error occurred while updating the blog. Please try again."
                    );
                  } finally {
                    setSaving(false);
                  }
                }}
                className={`px-4 py-1 text-sm rounded text-white ${
                  saving
                    ? "bg-[var(--primary-color)] cursor-not-allowed"
                    : "bg-[var(--primary-color)] hover:opacity-80"
                }`}
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AdminBlog;
