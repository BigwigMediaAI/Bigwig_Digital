import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

type BlogPost = {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  datePublished: string;
  slug: string;
  tags: string[];
  metaDescription: string;
};

const Blog = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Delay to ensure DOM is rendered
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const sectionTop =
            el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionTop, behavior: "auto" });
        }
      }, 100); // delay ensures it's mounted
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
      easing: "ease-in-out",
    });

    AOS.refresh(); // Ensures animations re-initialize correctly
  }, []);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          `https://bigwigaibackend.onrender.com/api/v1/blog/viewblog`
        );
        const sortedPosts = response.data.sort(
          (a: BlogPost, b: BlogPost) =>
            new Date(b.datePublished).getTime() -
            new Date(a.datePublished).getTime()
        );
        setBlogPosts(sortedPosts);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handlePostClick = (slug: string) => {
    window.location.href = `https://bigwigmedia.ai/blog/${slug}`;
  };

  const handleViewAllClick = () => {
    window.location.href = `https://bigwigmedia.ai/blog`;
  };

  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div id="blog" className="w-11/12 mx-auto px-4 mb-10 py-4">
      <h1 className="text-5xl font-bold text-white text-center mb-4">
        Our Trending Blogs
      </h1>
      <p className="text-center text-white text-md md:text-xl mb-8">
        Boost content creation and enhance productivity with{" "}
        <span className="font-bold">BigwigDigital.</span>
      </p>

      {/* Cards Grid */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        {blogPosts.slice(0, 4).map((post) => (
          <div
            key={post._id}
            data-aos="zoom-in"
            onClick={() => handlePostClick(post.slug)}
            className="relative bg-white h-[200px] md:h-[300px] rounded-lg overflow-hidden cursor-pointer shadow-lg transform transition-transform duration-300 hover:-rotate-y-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-110"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
              <h2 className="text-sm md:text-lg font-semibold">{post.title}</h2>
              <p className="text-xs md:text-sm">by {post.author}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleViewAllClick}
        className="mt-10 block mx-auto px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
      >
        View All Blogs
      </button>
    </div>
  );
};

export default Blog;
