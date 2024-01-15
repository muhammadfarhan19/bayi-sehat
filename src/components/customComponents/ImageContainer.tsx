import Image from "next/image";
import logo from "@/assets/images/logo.png";

const ImageContainer = ({ customClassName }: { customClassName: string }) => (
  <section className={customClassName}>
    <Image src={logo} alt="" className="m-auto" />
  </section>
);

export default ImageContainer;
