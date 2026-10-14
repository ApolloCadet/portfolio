import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

import { WebIcon } from "@/components/icons";
import Link from "next/link";

export default function ProjectCard() {

  return (
    <div className="projectPage">
      <h1>BLIMP</h1>
      <h4>The Balloon Live Instrumentation Monitoring Platform</h4>
      <h4 style={{ color: "#bcbcbc", textAlign: "center", fontStyle: "italic" }}>"The blackbox for balloons"</h4>
      <p>
        BLIMP provides secure, remote, real-time access to instrumentation data from AEROPHILE NG30 tethered balloon systems.
      </p>
      <p>
        <strong>BLIMP</strong> was originally developed for{" "}
        <strong>Conner Prairie’s 1859 Balloon Voyage</strong> and now has expanded to other sites. It provides real-time, remote monitoring of critical flight instrumentation—ensuring vital safety and performance data is accessible offsite for monitoring the balloon, especially in inclement weather conditions.
      </p>
      <p style={{ marginBottom: 13 }}>
        <strong>Owned and developed by Apollo Digital LLC.</strong>
      </p>

      <hr />
      <div
        style={{
          display: "flex",
          gap: 9,
          justifyContent: "space-evenly",
          maxWidth: 400,
          margin: "0 auto",
        }}>
        <Link target="_blank" className="Link" href={"https://blimpview.app"}>
          <WebIcon />
          Open webpage
        </Link>
      </div>

      <hr />
      <EmblaCarousel options={{ loop: true }} slides={[{ src: "/BLIMP/BlimpDashboard_10-9-26.png", alt: "Screenshot of the BLIMP Dashboard [Balloon Live Instrumentation Monitoring Platform], made for the 1859 Balloon Voyage in Indiana. Made by me / Apollo Digital" }, { src: "/BLIMP/flightComputer-reference.png", alt: "Screenshot of the Balloon Software / Flight Computer. This flight computer heavily influenced BLIMP dashboard design. Digitizing this software in a neat package for remote viewing is the basis of BLIMP." }, { src: "/me/IMG_0027.JPEG", alt: "me piloting the 1859 Balloon Voyage" }, { src: "/BLIMP/sophie-Sunset.jpg", alt: "Picture of the sunset from the 1859 Balloon Voyage." }, { src: "/BLIMP/sophie.jpeg", alt: "Picture of the 1859 Balloon Voyage in sunset." }]} />


      <hr />
      <h2>Abstract</h2>
      <p>I have been apart of the Conner Prairie 1859 Balloon Team for a little over a year. Being able to fly people from all types of backgrounds and show them the earth from 377 feet high is an irreplaceable feeling. With my tech background, I had a unique perspective on how best to solve some of our issues. My bosses initially had a security camera pointed at a computer monitor to monitor the flight computer remotely. This had many obvious flaws; it could get knocked into place, have unreliable connection, and was dependent on the camera software/app.</p>
      <p>
        I figured, there must be a better way and if someone hadn't made it yet, I will. So I began to reverse engineer the flight computer software to build a remote monitoring platform. I got a working prototype running and talked with the senior pilots and they were instantly interested. I began on a formal proposal for this project and just needed a name; eventually it struck me...</p>

      <p>the Balloon Live Instrumentation Monitoring Platform, or BLIMP.</p>

      <p>I started by analyzing the flight computer and analyzing it's style and function.</p>
      <img width={"100%"} style={{ maxWidth: 520 }} className="showcaseImage" src="/BLIMP/flightComputerStory.png" alt="Picture of the AEROPHILE Balloon System Flight Computer" />
      <p style={{ opacity: "0.7", fontStyle: "italic", textAlign: "center" }}>Picture of the AEROPHILE flight computer</p>

      <p>To make sure the design and interface of BLIMP was familiar with pilots, I closely followed the ViewData layout while also formatting it for mobile. As a production app, authentication and authorization where a priority from the start, utilizing JWT, we ensure that only authorized pilots and sites can access flight data. Once I had the system set up, the opportunity for BLIMP to become more than just a remote flight computer emerged itself.</p>

      <p>In the BLIMP acronym, "Live" is prominent and important part of what BLIMP is. Utilizing authenticated websocket connections, the BLIMP dashboard has the ability to toggle live mode, showing the most recent flightlogs at approximately every 10 seconds.</p>

      <p>Historical data viewing is also a core pillar of BLIMP, providing pilots and insurers a quick way to see what happened yesterday, the week before, the month before, and beyond, being able to see data every minute of the day.</p>

      <p>My next step was to integrate data visualization. Using recharts, I was able to get some prototypes running fairly quickly using the BLIMP SQL table data. This instantly made BLIMP something valuable just at a glance, no matter what you are looking at: wind, height, lift, pressure, battery voltage, and temperature.</p>

      <p>As a passion project turned production web app, BLIMP is driven by my research, creativity, design, and development skills. It is constantly evolving to best be a companion to Conner Prairie's 1859 Balloon Voyage and other Aerophile 30NG sites. Some features are still under development.</p>

      <hr />
      <p>BLIMP grew alot in 2026, continuously improving the user experience and getting a solid look.</p>
      <img width={"100%"} style={{ maxWidth: 680 }} className="showcaseImage" src="/BLIMP/BlimpDashboard_4-21-26.jpg" alt="BLIMP Growth Chart" />
      <img width={"100%"} style={{ maxWidth: 680 }} className="showcaseImage" src="/BLIMP/BlimpDashboard_6-16-26.png" alt="BLIMP Growth Chart" />
      <img width={"100%"} style={{ maxWidth: 680 }} className="showcaseImage" src="/BLIMP/BlimpDashboard_10-9-26.png" alt="BLIMP Growth Chart" />


      <h2>Project Overview</h2>
      <p>
        BLIMP enables monitoring of key metrics, including:
      </p>

      <ul>
        <li>Pressure</li>
        <li>Wind Speed</li>
        <li>Height</li>
        <li>Lift</li>
        <li>Internal & External Temperature</li>
        <li>Voltage</li>
        <li>Battery Status</li>
      </ul>
      <br />
      <p style={{ marginBottom: 4 }}>
        <strong>The platform consists of three separate components working together:</strong>
      </p>
      <ol>
        <li>
          <strong>DATA_UPLOADER</strong> – Software installed on a ground-based flight computer that uploads telemetry data from ViewData, AEROPHILE&apos;s flight computer software.
        </li>
        <li>
          <strong>WORKER</strong> – A Cloudflare Worker endpoint that receives, validates, and processes incoming data.
        </li>
        <li>
          <strong>WEB</strong> – A responsive dashboard for live and historical data visualization.
        </li>
      </ol>

      <hr />

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Real-Time Monitoring</strong> – Continuous telemetry streaming to a secure cloud endpoint.
        </li>
        <li>
          <strong>Historical Data Visualization</strong> – Long-term storage enabling graphing, trend analysis, and flight history review.
        </li>
        <li>
          <strong>Notifications & Alerts</strong> – Automatic warnings when readings exceed safety thresholds.
        </li>
        <li>
          <strong>Authentication & Security</strong> – Restricts access to authorized operational personnel.
        </li>
      </ul>

      <hr />

      <h2>Technology Stack</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> Next.js / React
        </li>
        <li>
          <strong>Backend:</strong> Cloudflare Workers – Serverless architecture
        </li>
        <li>
          <strong>Database:</strong> <em>Cloudflare D1</em> – A serverless SQLite solution for
          low-latency data storage and scalability.
        </li>
      </ul>
      <br />

      <p>
        This architecture minimizes on-site hardware needs—requiring only a flight computer with
        internet access—while maintaining scalability and reliability.
      </p>

      <hr />

      <h2>Long-Term Vision</h2>
      <p>
        BLIMP was developed not just as a monitoring tool, but as an investment in the{" "}
        <strong>future of balloon operations</strong>:
      </p>
      <ul>
        <li>Enhance operational safety through redundant remote monitoring</li>
        <li>Provide reliable offsite visibility for operators and management</li>
        <li>Maintain historical telemetry across future balloon envelopes (e.g., Sophie and successors)</li>
      </ul>

      <hr />

      <h2>Author</h2>
      <p>Apollo Ballinger</p>
      <p>© 2026 Apollo Digital LLC — All Rights Reserved.</p>
    </div>
  );
}
