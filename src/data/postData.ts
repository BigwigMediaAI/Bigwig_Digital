import cgi1 from "../assets/gallery/cgi1.png";
import cgi2 from "../assets/gallery/cgi2.png";
import cgi3 from "../assets/gallery/cgi3.png";
import cgi4 from "../assets/gallery/cgi4.png";
import cgi5 from "../assets/gallery/ChatGPT Image Jun 3, 2025, 04_36_48 PM.png";
import cgi6 from "../assets/gallery/ChatGPT Image Jun 3, 2025, 06_27_27 PM.png";
import cgi7 from "../assets/gallery/ChatGPT Image May 31, 2025, 02_57_46 PM.png";
import static1 from "../assets/gallery/BigWig Static Post.png";
import static2 from "../assets/gallery/BigWig Static Post (1).png";
import static3 from "../assets/gallery/Bigwig Static Post (2).png";
import static4 from "../assets/gallery/BigWig Static Post (3).png";
import static5 from "../assets/gallery/BigWig Static Post (4).png";
import static6 from "../assets/gallery/BigWig Static Post (5).png";

export type SocialPlatform = "facebook" | "twitter" | "linkedin" | "instagram";

export type PostItem = {
  src: string;
  alt: string;
  link: string;
  type: "creative" | "ai" | "cgi";
  socials: { platform: SocialPlatform; url: string }[];
};

const socialLinks = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/bigwigmediadigital",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/people/Bigwig-Digital/61575340735142/",
  },
  {
    platform: "twitter",
    url: "https://x.com/bigwig_digital",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/company/bigwig-digital/",
  },
] as const;

export const postItems: PostItem[] = [
  {
    src: cgi1,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
  {
    src: cgi2,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "ai",
    socials: [...socialLinks],
  },
  {
    src: cgi3,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "cgi",
    socials: [...socialLinks],
  },
  {
    src: cgi4,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "cgi",
    socials: [...socialLinks],
  },
  {
    src: cgi5,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "cgi",
    socials: [...socialLinks],
  },
  {
    src: cgi6,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "cgi",
    socials: [...socialLinks],
  },
  {
    src: cgi7,
    alt: "CGI Post",
    link: socialLinks[0].url,
    type: "cgi",
    socials: [...socialLinks],
  },
  {
    src: static1,
    alt: "Creative",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
  {
    src: static2,
    alt: "Creative",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
  {
    src: static3,
    alt: "Creative",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
  {
    src: static4,
    alt: "Creative",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
  {
    src: static5,
    alt: "Creative",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
  {
    src: static6,
    alt: "Creative",
    link: socialLinks[0].url,
    type: "creative",
    socials: [...socialLinks],
  },
];
