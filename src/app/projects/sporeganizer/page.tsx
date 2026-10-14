import EmblaCarousel from "@/components/EmblaCarousel";
import { OpenIcon, WebIcon } from "@/components/icons";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="projectPage">
      <h1>Sporeganizer</h1>

      <p>
        Sporeganizer is a fun and engaging homework tracking and productivity app with a whimsical
        mushroom theme. It helps users stay organized and on top of their assignments while
        providing a unique, visually pleasing interface.
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
        {/* SPOREGANIZER NO LONGER LIVE AT THIS DOMAIN */}
        {/* <Link target="_blank" className="Link" href={"https://sporeganizer.com"}>
          <WebIcon />
          Open Webpage
        </Link> */}
        <Link target="_blank" className="Link" href={"https://github.com/ApolloCadet/InputStack"}>
          <OpenIcon />
          Github
        </Link>
      </div>
      <hr />
      <EmblaCarousel slides={[{ src: "/Sporeganizer/DashboardPage.png" }, { src: "/Sporeganizer/EditClassCard.png" }, { src: "/Sporeganizer/EditAssignmentCard.png" }, { src: "/Sporeganizer/EditClassCard2.png" }, { src: "/Sporeganizer/HomePage.png" }, { src: "/Sporeganizer/OptionsPage.png" }]} />
      <hr />

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Homework Tracking:</strong> Easily manage and keep track of homework assignments
          with due dates and descriptions.
        </li>
        <li>
          <strong>Mushroom-Themed Design:</strong> Enjoy a playful, mushroom-themed interface that
          makes productivity fun and inviting.
        </li>
        <li>
          <strong>Cross-Device Compatibility:</strong> Fully responsive design ensures seamless
          performance on mobile, tablet, and desktop.
        </li>
        <li>
          <strong>Ongoing Development:</strong> Upcoming features include notifications, reminders,
          and task prioritization tools.
        </li>
      </ul>

      <hr />

      <h2>Technologies Used</h2>
      <ul>
        <li>
          <strong>Svelte:</strong> A modern, fast JavaScript framework for building interactive UIs.
        </li>
        <li>
          <strong>HTML:</strong> Provides structure and layout for the app.
        </li>
        <li>
          <strong>CSS & SASS:</strong> Used for responsive and clean styling across all devices.
        </li>
        <li>
          <strong>JavaScript / jQuery:</strong> Adds interactivity and form validation to ensure
          data integrity.
        </li>
        <li>
          <strong>Firebase:</strong> Handles authentication, cloud functions, and Firestore database
          management for user and assignment data.
        </li>
        <li>
          <strong>Firebase Emulator:</strong> Used for local testing and development to simulate
          production environments.
        </li>
      </ul>
    </div>
  );
}
