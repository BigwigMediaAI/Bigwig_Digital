import cgi1 from "../assets/gallery/cgi1.png";
import cgi2 from "../assets/gallery/cgi2.png";
import cgi3 from "../assets/gallery/cgi3.png";
import cgi4 from "../assets/gallery/cgi4.png";
import static1 from "../assets/gallery/BigWig Static Post.png";
import static2 from "../assets/gallery/BigWig Static Post (1).png";
import static3 from "../assets/gallery/Bigwig Static Post (2).png";
import static4 from "../assets/gallery/BigWig Static Post (3).png";
import static5 from "../assets/gallery/BigWig Static Post (4).png";
import static6 from "../assets/gallery/BigWig Static Post (5).png";
export type PostItem = {
  src: string;
  alt: string;
  link: string;
  type: "creative" | "ai" | "cgi";
};

export const postItems: PostItem[] = [
  {
    src: cgi1,
    alt: "CGI Post",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
  {
    src: cgi2,
    alt: "CGI Post",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "ai",
  },
  {
    src: cgi3,
    alt: "CGI Post",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "cgi",
  },
  {
    src: cgi4,
    alt: "CGI Post",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "cgi",
  },
  {
    src: static1,
    alt: "creative",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
  {
    src: static2,
    alt: "creative",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
  {
    src: static3,
    alt: "creative",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
  {
    src: static4,
    alt: "creative",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
  {
    src: static5,
    alt: "creative",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
  {
    src: static6,
    alt: "creative",
    link: "https://www.instagram.com/bigwigmediadigital/?igsh=bWJ3dXN1cGxrbW5u#",
    type: "creative",
  },
];
