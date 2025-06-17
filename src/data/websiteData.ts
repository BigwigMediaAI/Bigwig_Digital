import granth from "../assets/gallery/granth.png";
import cft from "../assets/gallery/cft.png";

export type WebsiteItem = {
  title: string;
  image: string;
  url: string;
  type: "websites";
};

export const websiteItems: WebsiteItem[] = [
  {
    title: "Granth Dream Homes",
    image: granth,
    url: "https://granth-beta.vercel.app/",
    type: "websites",
  },
  {
    title: "Close Friends Traders",
    image: cft,
    url: "https://trading-two-kappa.vercel.app/",
    type: "websites",
  },
  // Add more sites as needed
];
