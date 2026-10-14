import EmblaCarousel from "@/components/EmblaCarousel";
import { OpenIcon, WebIcon } from "@/components/icons";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="projectPage">
      <h1>Input Stack</h1>

      <p>
        <strong>InputStack</strong> is a frantic, real-time multiplayer game where players must work
        together to manage an ever-growing stack of tasks. These tasks, or “modules,” range from
        simple math problems to word unscrambles, color pickers, and more. Each module requires
        different types of input, such as buttons, sliders, and text fields.
      </p>

      <p>
        Inspired by <em>Keep Talking and Nobody Explodes</em>, InputStack is fully browser-based and
        instantly playable—no downloads or installations required.
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
        <Link target="_blank" className="Link" href={"https://ApolloCadet.github.io/inputstack/"}>
          <WebIcon />
          Play InputStack
        </Link>
        <Link target="_blank" className="Link" href={"https://github.com/ApolloCadet/InputStack"}>
          <OpenIcon />
          Github
        </Link>
      </div>

      <hr />
      <EmblaCarousel slides={[{ src: "/InputStack/GameScreen.png" }, { src: "/InputStack/GameScreen2.png" }, { src: "/InputStack/joinGameScreen.png" }, { src: "/InputStack/roomScreen.png" }]} />
      <hr />

      <h2>How It Works</h2>
      <p>
        The game is powered by Google Firebase’s real-time database, ensuring seamless multiplayer
        gameplay. Any changes made by one player are instantly reflected for everyone in the game.
        This real-time synchronization keeps the game dynamic, fostering both collaboration and
        chaos.
      </p>

      <hr />

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Real-Time Multiplayer:</strong> Work with (or yell at) your teammates as you race
          against time.
        </li>
        <li>
          <strong>Diverse Challenges:</strong> Solve math problems, unscramble words, select colors,
          and more.
        </li>
        <li>
          <strong>Instant Syncing:</strong> Powered by Firebase, all players see updates in real
          time.
        </li>
        <li>
          <strong>No Setup Required:</strong> Play instantly from your browser—no downloads needed.
        </li>
      </ul>

      <hr />

      <h2>How to Play</h2>
      <ol>
        <li>
          <strong>Join or Create a Game:</strong> Start a new game or join an existing session with
          friends.
        </li>
        <li>
          <strong>Solve Tasks Together:</strong> Modules appear with different types of input
          requirements. Work as a team to clear them before the stack overflows.
        </li>
        <li>
          <strong>Stay Ahead of the Stack:</strong> The faster you complete tasks, the longer you
          survive.
        </li>
        <li>
          <strong>Communicate & Cooperate:</strong> Efficiency is key, but so is clear communication
          under pressure.
        </li>
      </ol>

      <hr />

      <h2>Tech Stack</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> HTML, CSS, JavaScript
        </li>
        <li>
          <strong>Backend:</strong> Firebase Realtime Database for instant updates
        </li>
        <li>
          <strong>Hosting:</strong> GitHub Pages
        </li>
      </ul>
    </div>
  );
}
