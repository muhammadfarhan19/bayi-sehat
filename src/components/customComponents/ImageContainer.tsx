import Image, { StaticImageData } from "next/image";

const ImageContainer = ({
  style,
  src,
}: {
  style: string;
  src: StaticImageData;
}) => (
  <section className={style}>
    <Image src={src} alt="" className="m-auto"/>
  </section>
);

export default ImageContainer;
