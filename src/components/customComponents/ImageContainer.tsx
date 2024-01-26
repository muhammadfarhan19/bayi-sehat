import Image, { StaticImageData } from "next/image";

const ImageContainer = ({
  style,
  imgStyle,
  src,
}: {
  style: string;
  imgStyle: string;
  src: StaticImageData | string;
}) => (
  <section className={style}>
    <Image src={src} alt="" className={imgStyle} />
  </section>
);

export default ImageContainer;
