"use client";

import Image from "next/image";
import { useState } from "react";

export default function SafeImage({ src, alt, ...props }: any) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/fallback.jpg")}
      unoptimized
    />
  );
}
