import { useState } from "react"

interface CarouselProps {
  images: { src: string; alt: string }[]
  visible?: number
}

export default function Carousel({ images, visible = 3 }: CarouselProps) {
  const [offset, setOffset] = useState(0)
  const maxOffset = Math.max(0, images.length - visible)

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <div className="carousel">
      <button
        className="carousel-arrow carousel-arrow--left"
        onClick={prev}
        disabled={offset === 0}
        aria-label="Previous photo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(offset / visible) * 100}%)`,
          }}
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="carousel-slide"
              style={{ width: `${100 / visible}%` }}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-arrow carousel-arrow--right"
        onClick={next}
        disabled={offset === maxOffset}
        aria-label="Next photo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  )
}
