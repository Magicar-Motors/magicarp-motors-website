export interface PhotoItem {
  src: string
  caption?: string
  /** optional CSS max-width for the image, e.g. "50%" or "60%" */
  maxWidth?: string
  alt?: string
}

interface PhotoRowProps {
  items: PhotoItem[]
  /** cover mode: fixed 4/3 crop with object-fit cover (used on About page) */
  cover?: boolean
}

/**
 * A flex row of 1–2 images with an aligned italic caption row beneath.
 * Replaces the repeated inline-styled `<div style="display:flex">` galleries.
 */
export default function PhotoRow({ items, cover = false }: PhotoRowProps) {
  const hasCaptions = items.some((it) => it.caption)
  return (
    <>
      <div className={cover ? "photo-row photo-row--cover" : "photo-row"}>
        {items.map((it, i) => (
          <div className="photo-row__item" key={i}>
            <img
              src={it.src}
              alt={it.alt ?? it.caption ?? ""}
              style={it.maxWidth ? { maxWidth: it.maxWidth } : undefined}
            />
          </div>
        ))}
      </div>
      {hasCaptions && (
        <div className="photo-captions">
          {items.map((it, i) => (
            <div className="photo-captions__item" key={i}>
              {it.caption ?? ""}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
