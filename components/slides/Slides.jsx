import { useState, useEffect, useRef } from "react";
import { getSlides } from "../../pages/api/slides/imgslide";
import Link from 'next/link';
import Image from 'next/image';

export default function Slides() {
  const sliders = getSlides();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 2000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliders.map((slider, index) => (
          <div
            className="slide"
            key={slider.id}
          >
            <Image key={slider.id} className="slide" src={slider.imageUrl} alt={slider.title} width={500} height={400}/>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {sliders.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}