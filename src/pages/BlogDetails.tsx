import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface BlogType {
  title: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  category?: string;
}

const categories = [
  "Search Engine Optimization",
  "Social Media Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Website Designing & Development",
  "Email Marketing",
  "Social Media Optimization",
  "Graphic Designing",
  "AI and CGI Marketing",
  "Landing Page Optimization",
  "Affiliate Marketing",
  "Video Shoot",
  "Public Relations",
  "Influencer Marketing",
  "Online Reputation Management",
  "Digital Marketing",
];

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${baseURL}/viewblog`);
        const blogList: BlogType[] = res.data;

        const found = blogList.find((b) => b.slug === slug);
        if (!found) {
          setError("Blog not found");
        } else {
          setBlog(found);
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching blog");
      }
      setLoading(false);
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) return <div className="pt-40 text-center">Loading...</div>;
  if (error)
    return <div className="pt-40 text-center text-red-600">{error}</div>;
  if (!blog) return null;

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* Blog Content */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-2">
            By {blog.author} -{" "}
            {new Date(blog.datePublished).toLocaleDateString()}
          </p>

          <img
            src={blog.coverImage}
            className="mb-4 w-full rounded"
            alt={`Cover image for ${blog.title}`}
          />

          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Categories Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-28 bg-white dark:bg-[var(--bg-color1)] border dark:border-gray-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Blog Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  onClick={() =>
                    navigate(
                      `/blogs/category/${encodeURIComponent(
                        cat.replace(/\s+/g, "-")
                      )}`
                    )
                  }
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
