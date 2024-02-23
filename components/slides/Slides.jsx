import { useState } from "react";
import { getSlides } from "../../pages/api/slides/imgslide";
import Link from 'next/link';
import Image from 'next/image';

export default function Slides() {
  const sliders = getSlides();
  return (
    <div className="slider">
      <div className="slides">

        {Object.entries(sliders).map((slider, index) => {

          return (
            <div name={slider[1].title} key={slider[1].id} >
              <Image key={slider[1].id} src={slider[1].imageUrl} alt={slider[1].title} width={1024} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            </div>
          );
        })}

      </div>
    </div>
  );
}