"use client";
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { useEffect } from 'react';
import { relative } from 'path';

type PropType = {
  slides: {
    skip?: any; src: string, alt?: string
  }[]
  options?: EmblaOptionsType;
  autoscroll?: boolean;
  autoscrollDelay?: number;
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options, autoscroll, autoscrollDelay } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoHeight()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  // Autoscroll logic
  useEffect(() => {
    if (autoscroll === undefined || !autoscroll || slides.length <= 1) return;

    const scrollInterval = setInterval(() => {
      if (emblaApi?.canScrollNext()) {
        emblaApi?.scrollNext()
      } else {
        emblaApi?.scrollTo(0)
      }
      console.log()
    }, autoscrollDelay || 7000);

    // Clean up interval on unmount
    return () => clearInterval(scrollInterval);
  }, [emblaApi]);

  return (
    <>
      <div className="embla" style={{ height: "fit-content" }} >
        <div className="embla__viewport" ref={emblaRef} style={{ height: "fit-content" }}>
          <div className="embla__container" style={{ height: "fit-content" }}>
            {slides.map((slide, index) => (
              !slide.skip && (
                <div className='embla__slide' style={{ height: "fit-content" }} key={index}>
                  <div className="relative slide-pixel-corners--wrapper">
                    {slide.src.endsWith("MOV") ? (
                      <video
                        loop
                        muted
                        className="embla__slide__img"
                        src={slide.src}
                      />
                    ) : (
                      <img
                        onLoad={() => {
                          if (emblaApi) {
                            emblaApi.reInit();
                          }
                        }}
                        loading='eager'
                        className="embla__slide__img"
                        src={slide.src ? slide.src : `https://picsum.photos/600/350?v=${index}`}
                        alt={slide.alt}
                      />)}
                    <a href={slide.src} target='_blank' tabIndex={-1}>
                      <svg style={{ position: "absolute", right: 10, bottom: 10 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 5h6v2H5zm8-2h8v2h-8zM5 19h12v2H5zM3 7h2v12H3zm14 6h2v6h-2z" /><path d="M19 3h2v8h-2zm-8 8h2v2h-2zm6-4h-2v2h2zm2-2h-2v2h2zm-4 4h-2v2h2zm-4 4H9v2h2z" /></g></svg>
                    </a>
                  </div>
                </div>
              )
            ))}
          </div>
          <p style={{ zIndex: 1, position: 'relative', textAlign: "center", marginBottom: 0, marginTop: '0.5em' }}>{slides[selectedIndex]?.alt}</p>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={(e) => { e.preventDefault(); onPrevButtonClick() }} disabled={prevBtnDisabled} />
            <NextButton onClick={(e) => { e.preventDefault(); onNextButtonClick() }} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={(e) => { e.preventDefault(); onDotButtonClick(index) }}
                className={'embla__dot embla-pixel-corners'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EmblaCarousel
