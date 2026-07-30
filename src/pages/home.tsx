import { Head } from "vite-react-ssg"
import Carousel from "../components/Carousel"
import Nav from "../components/Nav"
import Events from "../components/Events"
/**
 * Photo landing page — ported 1:1 from the old content/index.md.
 * Uses the .landing-* classes defined in global.css.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Magicar Motors</title>
      </Head>
      <Nav />

      {/* Full-width edge-to-edge banner */}
      <div className="landing-full-banner">
        <img
          src="/images/home/gearados.png"
          alt="Team members painting the car livery on a sidewalk"
        />
      </div>

      <div className="landing-stack">
        {/* Split layout: Two horizontal photos on the left, text on the right */}
        <div className="landing-split-section">
          <div className="landing-split-images">
            <div className="landing-photo">
              <img
                src="/images/103-race-result-sears-pointless.JPG"
                alt="Placeholder horizontal photo 1"
              />
            </div>
            <div className="landing-photo">
              <img
                 src="/images/team-photo-2.jpg"
                alt="Placeholder horizontal photo 2"
              />
            </div>
          </div>
          <div className="landing-split-content">
          <div className="landing-heading-wrapper">
              <h2 className="landing-inline-title">
                Hi, we're{" "}
                <img
                  src="/images/home/logo-inline.png"
                  alt="Magicar Motors Logo"
                  className="landing-inline-logo"
                />
              </h2>
            </div>
            <p>
              We're an endurance racing team based in San Francisco. We compete in 24 Hours of Lemons, an endurance racing series for $500 cars. As the folks there say -- 'All it takes is a cheap car, cool friends, and one weekend'
            </p>
            <p>
              And that's what we've got! We're a group of friends who spend our weekends wrenching on the car and hanging out with the community. We're currently in our 5th season of running, and we're busy preparing for our next race in September at the Buttonwillow Raceway.
            </p>
            <p>
              The community we're part of is the backbone and heart of the team. We always love seeing friends old and new at our events and at the garage. Read some more about who we are and what we do on this website, or take a look at what we're up to next!
            </p>
            {/* Centered placeholder image underneath the text */}
            {/* <div className="landing-centered-logo-container">
              <img
                src="/images/home/magicar-squiggle.svg"
                alt="Centered brand placeholder"
                className="landing-centered-logo"
              />
            </div> */}
          </div>
        </div>

        {/* <div className="landing-section landing-section--w58">
          <div className="landing-photo">
            <img
              src="/images/103-race-result-sears-pointless.JPG"
              alt="Our car racing at Sears Pointless"
            />
          </div>
          <p className="landing-caption">We're a big silly happy family.</p>
        </div> */}

        {/* <div className="landing-section landing-section--w70">
          <div className="landing-photo">
            <img
              src="/images/202-accord-track.jpeg"
              alt="Our Honda Accord racing on track"
            />
          </div>
          <p className="landing-caption">
            The accord on track -- (replace with the collage?)
          </p>
        </div> */}

          {/* Carousel requirements:
            - 3 photos visible at a time
            - No cropping — vertical stays vertical, horizontal stays horizontal
            - Not auto-rotating; user advances with left/right arrows
            - Uses the 700-series glamor photos
        */}
        {/* <div className="landing-section landing-section--w62">
          <Carousel
            images={[
              { src: "/images/700-magicar-vertical-downthe-road.jpg", alt: "Magicar driving down the road" },
              { src: "/images/707-magicar-front-emblem-vertical.jpg", alt: "Magicar front emblem" },
              { src: "/images/706-magicar-rear-tailpipe-vertical.jpg", alt: "Magicar rear tailpipe" },
              { src: "/images/701-magicar-vertical-from-afar.jpg", alt: "Magicar from afar" },
              { src: "/images/703-magicar-smirk-top-of-mountain-vertical.jpg", alt: "Magicar at the top of the mountain" },
              { src: "/images/704-spoiler-magicar-closeup-vertical.jpg", alt: "Magicar spoiler closeup" },
              { src: "/images/702-magicar-in-the-cab-scao.jpg", alt: "View from the cab" },
            ]}
          />
          <p className="landing-caption">Gearados, our 1992 Honda Accord</p>
        </div> */}

        {/* <div className="landing-section landing-section--w55">
          <div className="landing-photo">
            <img
              src="/images/team-photo-2.jpg"
              alt="Magicar Motors team group photo"
            />
          </div>
          <p className="landing-caption">
            replace this photo with more family vibe photos
          </p>
        </div> */}

        {/* Rendered modular events section */}
        <Events />
      </div>


      <h1 className="visually-hidden">Magicar Motors — Racing Team</h1>
    </>
  )
}
