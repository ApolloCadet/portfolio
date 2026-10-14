import Link from "next/link";
import Marquee from "react-fast-marquee";
import Pixelated from "../components/pixelated";
import EmblaCarousel from "../components/EmblaCarousel";
import { GithubIconPixelated, LinkedinIconPixelated, PixelatedEmailIcon } from "@/icons";

export default function Home() {
  return (
    <div className="homepage">

      {/* <h3>
        <strong>Apollo Ballinger</strong>{" "}
      </h3> */}

      {/* <p style={{ display: "inline", fontSize: 18 }}>[AKA Apollo]</p> */}


      {/* <div className="homepage-card border-1">
        <div className="label-value-pair">
          <span className="label ">name</span>
          <span className="value">Erin Apollo Ballinger</span>
        </div>
      </div> */}

      <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: ".5em", fontSize: "2.3em", marginTop: 30 }}>
        <span style={{ fontSize: "inherit" }} className="pixel-text">&#171;</span>
        <span style={{ fontSize: "inherit" }} className="pixel-text">Apollo</span>
        <span style={{ fontSize: "inherit" }} className="pixel-text">&#187;</span>
      </div>

      <section style={{ color: "#ffffff83", margin: "16px auto" }} className="slant-text pixel-text-center" >
        <div id="one" className="tilt-l">Full</div>
        <div id="one" className="tilt-r">Stack</div>
        <div id="two" className="tilt-l">Developer</div>
        <div id="two" className="tilt-r">exploring</div>
        <div id="three" className="tilt-l">a</div>
        <div id="four" className="tilt-l2x">digital</div>
        <div id="four" className="tilt-r">world.</div>
      </section>

      <hr />
      <strong className="call-to-action-links" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href="/projects">View My Work</Link>
        <Link href="/contact">Get in Touch</Link>
      </strong>

      <hr />
      <section className="socialLinks">
        <Link href="https://github.com/ApolloCadet" target="_blank" rel="noopener noreferrer">
          <GithubIconPixelated />
        </Link>
      </section>

      <EmblaCarousel autoscroll options={{ loop: true }} slides={[{ src: "/me/IMG_0027.JPEG", alt: "me piloting the 1859 Balloon Voyage" }, { src: "/BLIMP/BlimpDashboard_10-9-26.png", alt: "Made by me, a screenshot of the BLIMP Dashboard [Balloon Live Instrumentation Monitoring Platform], made for the 1859 Balloon Voyage at Conner Prairie in Indiana. Check out the project page for more." }, { src: "/BLIMP/sophie.jpeg", alt: "Picture of the 1859 Balloon Voyage in sunset." }]} />
      <hr />

      <p>
        I am full-stack developer focused on building interactive, user-centered web applications. I enjoy turning complex ideas into clean, practical experiences using modern web technologies.
      </p>

      <p>
        I&apos;m especially interested in interactive web experiences, creative technology, and applications that feel memorable, engaging, and expressive.  Many of my projects explore the space between software, design, and entertainment — drawing inspiration from games, online communities, and digital creativity to create experiences that people genuinely enjoy using.
      </p>
      <hr />
      <p style={{ textAlign: "center" }}><svg style={{ position: "relative", top: "5px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--primary)" d="M13 22h-2v-2h2zm-2-2H9v-2h2zm4 0h-2v-2h2zm-6-2H7v-2h2zm8 0h-2v-2h2zM7 16H5v-2h2zm12 0h-2v-2h2zM5 14H3v-2h2zm16 0h-2v-2h2zM3 12H1V6h2zm20 0h-2V6h2zM13 8h-2V6h2zM5 6H3V4h2zm6 0H9V4h2zm4 0h-2V4h2zm6 0h-2V4h2zM9 4H5V2h4zm10 0h-4V2h4z" /></svg>
        {" "}Made with love{" "}
        <svg style={{ position: "relative", top: "5px" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--primary)" d="M13 22h-2v-2h2zm-2-2H9v-2h2zm4 0h-2v-2h2zm-6-2H7v-2h2zm8 0h-2v-2h2zM7 16H5v-2h2zm12 0h-2v-2h2zM5 14H3v-2h2zm16 0h-2v-2h2zM3 12H1V6h2zm20 0h-2V6h2zM13 8h-2V6h2zM5 6H3V4h2zm6 0H9V4h2zm4 0h-2V4h2zm6 0h-2V4h2zM9 4H5V2h4zm10 0h-4V2h4z" /></svg></p>
      {/* <Pixelated wrapperStyle={{ margin: '0 auto', padding: '10px 10px' }}>
        <span style={{ padding: "7px 0px 7px 7px", fontFamily: "ft88", fontWeight: 300, maxWidth: "15ch", lineHeight: "1.4em", fontSize: 18 }}>What I have been up to:</span>
        <ul style={{
          margin: 0, padding: "20px 15px", paddingLeft: 20, flex: 1, listStyle: "square", backgroundColor: "#00000027", fontWeight: 300, fontFamily: "ft88", fontSize: 15
        }}>
          <li>Learning GoLang</li>
          <li>Refining <a style={{ all: "unset", cursor: "help", textDecorationThickness: 1.5 }} href="/projects/BLIMP">BLIMP</a></li>
          <li>Going to Local Indy Shows</li>
        </ul>
      </Pixelated> */}
    </div >
  );
}
