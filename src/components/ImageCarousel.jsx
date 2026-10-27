import { useState } from 'react'

function normalizeImage(image, index, title) {
  if (typeof image === 'string') {
    return { src: image, alt: `${title} image ${index + 1}`, caption: '' }
  }
  return {
    src: image.src,
    alt: image.alt || `${title} image ${index + 1}`,
    caption: image.caption || '',
  }
}

export default function ImageCarousel({ images = [], title }) {
  const normalized = images.map((image, index) => normalizeImage(image, index, title))
  const [index, setIndex] = useState(0)

  if (normalized.length === 0) return null

  const previous = () => setIndex((current) => (current - 1 + normalized.length) % normalized.length)
  const next = () => setIndex((current) => (current + 1) % normalized.length)
  const current = normalized[index]

  return (
    <div className="image-carousel" aria-label={`${title} image gallery`}>
      <div className="carousel-frame">
        <img src={current.src} alt={current.alt} />

        {normalized.length > 1 && (
          <>
            <button className="carousel-button carousel-button-left" type="button" onClick={previous} aria-label="Previous image">‹</button>
            <button className="carousel-button carousel-button-right" type="button" onClick={next} aria-label="Next image">›</button>
          </>
        )}
      </div>

      {(current.caption || normalized.length > 1) && (
        <div className="carousel-footer">
          <div className="carousel-caption">{current.caption}</div>
          {normalized.length > 1 && (
            <div className="carousel-dots" aria-label="Choose image">
              {normalized.map((image, dotIndex) => (
                <button
                  type="button"
                  key={`${image.src}-${dotIndex}`}
                  className={`carousel-dot ${dotIndex === index ? 'active' : ''}`}
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Show image ${dotIndex + 1}`}
                  aria-current={dotIndex === index ? 'true' : undefined}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
