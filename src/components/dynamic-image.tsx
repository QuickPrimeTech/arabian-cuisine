import Image from "next/image";
import { useState, useEffect } from "react";

type DynamicImageProps = {
  images: string[];
};

export function DynamicImage({ images }: DynamicImageProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalTime = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Background ${index + 1}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover object-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      ;
    </>
  );
}
