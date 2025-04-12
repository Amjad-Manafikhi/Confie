import React, { useRef, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./card";
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './EmblaDots.jsx';
import './../EmblaCarousel.css';
const EmblaCarousel = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
    align: "start",
  }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla initialized:", emblaApi);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])


  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {products.map((product) => (
          <div className="embla__slide" key={product.id}>
            <Card
              key={product.id}
              imgSrc={product.imgSrc}
              price={product.price}
              name={product.name}
              description={product.description}
            />
          </div>
        ))}
      </div>
      <div className="embla__buttons">
        <div>
        <button className="embla__prev" onClick={scrollPrev}>
          &lt;
        </button>
        <button className="embla__next" onClick={scrollNext}>
          &gt;
        </button>
        </div>
        <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default EmblaCarousel;
