import Image from "next/image";

type Props = {
  animation: string;
};

const images = [
  "/img/story-image-2.jpg",
  "/img/story-image.jpg",
  "/img/story-image-3.jpg",
  "/img/story-image-4.jpg",
  "/img/story-image-5.jpg",
  "/img/story-image-6.jpg",
  "/img/story-image-new.jpeg",
];

export default function ImageColumn({ animation }: Props) {
  return (
    <div className="image-column">
      <div className={`image-track ${animation}`}>
        {[...images, ...images].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`story ${i}`}
            unoptimized
            width={300}
            height={400}
            className="image-item"
          />
        ))}
      </div>
    </div>
  );
}
