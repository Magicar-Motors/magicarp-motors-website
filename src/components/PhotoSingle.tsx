interface PhotoSingleProps {
  src: string
  caption?: string
  /** optional CSS max-width for the image, e.g. "50%" or "70%" */
  maxWidth?: string
  alt?: string
}

/** A single centered image with an optional italic caption beneath. */
export default function PhotoSingle({
  src,
  caption,
  maxWidth,
  alt,
}: PhotoSingleProps) {
  return (
    <>
      <div className="photo-single">
        <img
          src={src}
          alt={alt ?? caption ?? ""}
          style={maxWidth ? { maxWidth } : undefined}
        />
      </div>
      {caption && <div className="photo-caption-single">{caption}</div>}
    </>
  )
}
