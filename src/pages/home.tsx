import { Head } from "vite-react-ssg"
import Carousel from "../components/Carousel"
import Nav from "../components/Nav"

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

      <div className="landing-stack">
        <div className="landing-section landing-section--w62">
          <div
            className="landing-photo landing-photo--crop"
            style={
              {
                "--crop-top": 20,
                "--crop-bottom": 10,
              } as React.CSSProperties
            }
          >
            <img
              src="/images/303-painting-sidewalk.jpg"
              alt="Team members painting the car livery on a sidewalk"
            />
          </div>
          <p className="landing-caption">
            We're a bunch of friends building race cars after work.
          </p>
        </div>

        <div className="landing-section landing-section--w58">
          <div className="landing-photo">
            <img
              src="/images/103-race-result-sears-pointless.JPG"
              alt="Our car racing at Sears Pointless"
            />
          </div>
          <p className="landing-caption">We're a big silly happy family.</p>
        </div>

        <div className="landing-section landing-section--w70">
          <div className="landing-photo">
            <img
              src="/images/202-accord-track.jpeg"
              alt="Our Honda Accord racing on track"
            />
          </div>
          <p className="landing-caption">
            The accord on track -- (replace with the collage?)
          </p>
        </div>

        {/* Carousel requirements:
            - 3 photos visible at a time
            - No cropping — vertical stays vertical, horizontal stays horizontal
            - Not auto-rotating; user advances with left/right arrows
            - Uses the 700-series glamor photos
        */}
        <div className="landing-section landing-section--w62">
          <Carousel
            images={[
              // { src: "/images/705-magicar-skyline-horizontal.jpg", alt: "Magicar against the skyline" },
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
        </div>

        <div className="landing-section landing-section--w55">
          <div className="landing-photo">
            <img
              src="/images/team-photo-2.jpg"
              alt="Magicar Motors team group photo"
            />
          </div>
          <p className="landing-caption">
            replace this photo with more family vibe photos
          </p>
        </div>
      </div>

      <h1 className="visually-hidden">Magicar Motors — Racing Team</h1>
    </>
  )
}
