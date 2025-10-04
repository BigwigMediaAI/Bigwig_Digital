import granth from "../../Assets/gallery/granth.png";
import cft from "../../Assets/gallery/cft.png";
import { StaticImageData } from "next/image";

export type WebsiteItem = {
  title: string;
  image: string | StaticImageData;
  url: string;
  type: "websites";
};

export const websiteItems: WebsiteItem[] = [
  {
    title: "Granth Dream Homes",
    image: granth,
    url: "",
    type: "websites",
  },
  {
    title: "Close Friends Traders",
    image: cft,
    url: "",
    type: "websites",
  },
  // Add more sites as needed
];
