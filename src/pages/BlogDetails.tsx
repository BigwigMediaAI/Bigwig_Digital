import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

interface BlogType {
  title: string;
  coverImage: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
}

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://bigwigdigitalbackend.onrender.com/viewblog`
        );
        const blogList: BlogType[] = res.data;
        console.log("Fetched blogs:", blogList);

        const found = blogList.find((b) => b.slug === slug);
        console.log("Found blog:", found);

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
        <title>{blog?.title}</title>
      </Helmet>
      <Navbar />

      <div className="p-8 max-w-5xl mx-auto pt-10">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-2">
          By {blog.author} - {new Date(blog.datePublished).toLocaleDateString()}
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
      <Footer />
    </div>
  );
};

export default BlogDetails;
