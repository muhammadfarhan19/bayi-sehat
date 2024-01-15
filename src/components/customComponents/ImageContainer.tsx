import Image from "next/image";
import logo from "@/assets/images/logo.png";

const ImageContainer = ({ style }: { style: string }) => (
  <section className={style}>
    <Image src={logo} alt="" className="m-auto" />
  </section>
);

export default ImageContainer;
