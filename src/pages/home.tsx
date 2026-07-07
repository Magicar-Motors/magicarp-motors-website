import { Head } from "vite-react-ssg"
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
