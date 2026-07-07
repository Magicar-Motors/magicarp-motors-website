interface FigureProps {
  src: string
  caption?: string
  alt?: string
}

/** A full-width diagram that opens the full-size image in a new tab, plus a caption. */
export default function Figure({ src, caption, alt }: FigureProps) {
  return (
    <>
      <div className="figure">
        <a href={src} target="_blank" rel="noreferrer">
          <img src={src} alt={alt ?? caption ?? ""} />
        </a>
      </div>
      {caption && <div className="figure__caption">{caption}</div>}
    </>
  )
}
