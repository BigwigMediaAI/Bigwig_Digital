import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
    window.location.href = `https://bigwigmedia.ai/blog`; // URL for viewing all blogs
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Container id="blog">
      <BlogTitle>Our Trending Blogs</BlogTitle>
      <Grid>
        {blogPosts.slice(0, 4).map((post) => (
          <BookContainer
            key={post._id}
            onClick={() => handlePostClick(post.slug)}
          >
            <Book>
              <BookCover>
                <BookImage src={post.image} alt={post.title} />
                <BookInfo>
                  <Title>{post.title}</Title>
                  <Author>by {post.author}</Author>
                </BookInfo>
              </BookCover>
              <BookSpine />
              <BookBackCover />
            </Book>
          </BookContainer>
        ))}
      </Grid>
      <ViewAllButton onClick={handleViewAllClick}>View All Blogs</ViewAllButton>
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  margin: 1rem auto;
  padding: 10px 70px;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

const BlogTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BookContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  cursor: pointer;
`;

const Book = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: rotateY(-30deg);
  }
`;

const BookCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  overflow: hidden;
  transform-origin: left center;
  z-index: 1;
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BookInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Author = styled.p`
  font-size: 0.875rem;
`;

const BookSpine = styled.div`
  position: absolute;
  width: 20px;
  height: 100%;
  background-color: #d1d5db;
  border: 1px solid #e5e7eb;
  transform-origin: left center;
  z-index: 0;
`;

const BookBackCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 0 0.5rem 0.5rem 0;
  transform: rotateY(0deg);
  z-index: -1;
`;

const ViewAllButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #1752b4;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.25rem;
  color: #4a5568;
`;

const Error = styled.div`
  text-align: center;
  font-size: 1.25rem;
  color: #f56565;
`;
