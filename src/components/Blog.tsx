import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  coverImage: string;
  tags: string[];
  datePublished: string;
  lastUpdated: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://bigwigdigitalbackend.onrender.com/viewblog"
        );
        const data = await res.json();

        const sorted = data
          .sort(
            (a: BlogPost, b: BlogPost) =>
              new Date(b.datePublished).getTime() -
              new Date(a.datePublished).getTime()
          )
          .slice(0, 4);

        setBlogs(sorted);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handlePostClick = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <div className="bg-black text-white font-raleway font-light py-16">
      <section className="w-[90%] mx-auto">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-400">
            No blog posts available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {blogs.map((post) => (
              <div
                key={post._id}
                className="cursor-pointer relative rounded-lg p-[1.5px] hover:shadow-[0_0_10px_var(--primary-color)] transition"
                style={{
                  background:
                    "linear-gradient(to bottom, #111, var(--primary-color))",
                }}
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="bg-black rounded-lg h-[340px] flex flex-col overflow-hidden text-left">
                  <img
                    src={post.coverImage}
                    alt={`Cover image for ${post.title}`}
                    className="w-full h-[160px] object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      By {post.author} •{" "}
                      {new Date(post.datePublished).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
