import { Code, Edit, ImageIcon, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import AddBlog from "../../components/AddBlogs";
import "react-quill/dist/quill.snow.css";
import "../../index.css";
const baseURL = import.meta.env.VITE_API_BASE_URL;
import { formatHtml } from "../../utils/formatHtml";
import Fuse from "fuse.js";

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

const AdminBlog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/viewblog`);
      const data = await res.json();
      setBlogs(data);
      console.log(data);
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

  const handleUpdateImage = async () => {
    if (!selectedImage) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("coverImage", selectedImage);

    try {
      const res = await fetch(`${baseURL}/${editingSlug}/image`, {
        method: "PATCH",
        body: formData,
        // ❗ Don't set Content-Type manually for FormData, fetch handles it
      });

      if (!res.ok) {
        throw new Error("Failed to update image");
      }

      alert("Image updated successfully!");
      setShowImageModal(false);
      setSelectedImage(null);
      fetchBlogs(); // Refresh the blog list
    } catch (err) {
      console.error(err);
      alert("Failed to update image");
    } finally {
      setLoading(false); // Stop loading
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

  const fuse = new Fuse(blogs, {
    keys: ["title", "category", "author"],
    threshold: 0.3,
    ignoreLocation: true,
  });

  const filteredBlogs =
    searchQuery.trim() === ""
      ? blogs
      : fuse.search(searchQuery).map((result) => result.item);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-4">
      <div className="flex justify-between items-center sticky top-0 z-20 bg-black p-4 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Blog Posts</h1>
        <button
          className="text-white bg-[var(--primary-color)] px-4 py-2 rounded"
          onClick={() => {
            setEditingBlog(null);
            setShowAddModal(true);
          }}
        >
          Add New Blog
        </button>
      </div>

      <div className="mb-4 mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search by title, category, or author..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-1/2 px-4 py-2 rounded bg-[#1e1e1e] border border-gray-600 text-white text-sm"
        />
        <p className="text-gray-400 text-sm">
          Showing page {currentPage} of {totalPages || 1}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <p>Loading...</p>
        ) : filteredBlogs.length === 0 ? (
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
                {paginatedBlogs.map((blog) => (
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
                        dangerouslySetInnerHTML={{ __html: blog.content }}
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
                        onClick={async () => {
                          const formatted = formatHtml(blog.content);
                          setHtmlContent(await formatted);
                          setEditingSlug(blog.slug);
                          setShowHtmlEditor(true);
                        }}
                        className="text-yellow-500 hover:text-yellow-600"
                      >
                        <Code size={16} />
                      </button>
                      <button
                        onClick={() => {
                          setEditingSlug(blog.slug); // Store slug of the blog to update
                          setShowImageModal(true); // Show modal
                        }}
                        className="text-purple-600 hover:text-purple-700"
                      >
                        <ImageIcon size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 text-sm text-white">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      onClick={() => setCurrentPage(num)}
                      className={`px-3 py-1 rounded ${
                        num === currentPage
                          ? "bg-[var(--primary-color)] text-white"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {num}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showAddModal && (
        <AddBlog
          onClose={handleModalClose}
          onSuccess={fetchBlogs}
          existingBlog={editingBlog}
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

      {showImageModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Update Cover Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setSelectedImage(e.target.files[0]);
                }
              }}
              className="mb-4"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowImageModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateImage}
                className={`px-4 py-2 text-white rounded ${
                  loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
