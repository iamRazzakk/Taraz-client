"use client";

import slider from "@/src/assets/SliderImage/banner-3.jpg";
import slider2 from "@/src/assets/SliderImage/banner-2.jpg";
import slider3 from "@/src/assets/SliderImage/slide-4.jpg";
import Image from "next/image";

const Headers = () => {
  const firstSlider = [slider2, slider3, slider];
  const firstSlidesInfo = [
    {
      title: "Casual Men's Wear",
      description: "Stylish and comfortable casual outfits for everyday use.",
    },
    {
      title: "Formal Attire",
      description: "Elegant and sophisticated suits for professional settings.",
    },
    {
      title: "Sporty & Activewear",
      description:
        "Trendy and functional activewear for the modern man on the go.",
    },
  ];
  return (
    <div className="lg:flex items-center gap-10">
      {/* fost slider */}
      <div className="flex-1">
        {firstSlider.map((image, index) => (
          <div key={index} className="mb-4">
            <Image src={image.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="lg:flex items-center flex-col">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
