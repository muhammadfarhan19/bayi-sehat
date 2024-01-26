import { StaticImageData } from "next/image";

export default interface newsCardType {
  title: string;
  image: string | StaticImageData;
  url: string;
}
