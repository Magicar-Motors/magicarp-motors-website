import { Head } from "vite-react-ssg"
import Nav from "../components/Nav"

const eventsList = [
  {
    dates: "August 8",
    name: "Cafe Popup @ The Fold",
    location: "San Francisco, CA",
    url: "https://partiful.com/e/cjQWC4KaLHFQGGudlvTz",
  },
  {
    dates: "September 25-27",
    name: "Button Turrible",
    location: "Buttonwillow Raceway, CA",
    url: "https://24hoursoflemons.com/race-2/?id=454",
  },
   {
    dates: "December 5-6",
    name: "Arse-Freeze-a-Palooza",
    location: "Sonoma Raceway, CA",
    url: "https://24hoursoflemons.com/race-2/?id=450",
  },
]

export default function Events() {
  return (
    <>

      <main className="events-page-container">
        <header className="events-header">
          <h1>2026 events</h1>
          <p>Here's where you can find us this year'!</p>
        </header>

        <div className="events-list">
          {eventsList.map((event, index) => (
            <div key={index} className="event-row">
              <div className="event-date">{event.dates}</div>
              <div className="event-details">
                <span className="event-name">{event.name}</span>
                <span className="event-location">{event.location}</span>
              </div>
              <div className="event-action">
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
