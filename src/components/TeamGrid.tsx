export interface TeamMember {
  src: string
  name: string
}

interface TeamGridProps {
  members: TeamMember[]
}

/** Responsive grid of rounded square headshots with names, used on the Meet the Team page. */
export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="team-grid-breakout">
      <div className="team-grid">
        {members.map((m) => (
          <div className="team-card" key={m.name}>
            <div className="team-card__photo">
              <img src={m.src} alt={m.name} loading="lazy" />
            </div>
            <span className="team-card__name">{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
