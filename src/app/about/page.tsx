import EmblaCarousel from "../../components/EmblaCarousel";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hi! I’m Apollo — also known as Erin or ApolloCadet on GitHub — a software developer, designer, and occasional helium balloon pilot.</p>
      <p>
        I’m the founder of Apollo Digital LLC, where I design and build real-world software solutions — from SaaS platforms to interactive web experiences. My work blends engineering, design, and a bit of play, whether that’s a mission-critical telemetry system or a chaotic multiplayer game.
      </p>
      <p>
        My projects range from serious engineering (BLIMP, a balloon flight monitoring platform used in live operations) to whimsical experiments (InputStack and Sporeganizer), but the common thread is a focus on usability, reliability, and thoughtful design.
      </p>
      <p>
        Through Apollo Digital, I’ve delivered production software to paying institutional clients, built scalable cloud-native systems, and learned how to ship, maintain, and iterate on real products — not just demos.
      </p>
      <p>
        When I’m not coding, you’ll probably find me tinkering with side projects, sketching new ideas, or flying the 1859 Balloon Voyage at Conner Prairie.
      </p>
      <EmblaCarousel slides={[{ src: "/me/IMG_0027.JPEG", alt: "me piloting the 1859 Balloon Voyage" }, { src: "/BLIMP/sophie-Balloon-out-of-SLMS-2026-silly.JPG", alt: "Picture of the 1859 Balloon Crew Team [2025] - I blend in pretty well, I am the green haired one ;)", skip: true }, { src: "/BLIMP/sophie-End-of-Super-Low-Moor.jpg", alt: "Picture of us taking the balloon out of hibernation this Spring 2026!" }, { src: "/BLIMP/sophie-inner-winch.JPG", alt: "Me learning how to moor the balloon with the low stow / inner mooring system", skip: true }, { src: "/BLIMP/sophie-Sunset.jpg", alt: "Picture of the sunset from the 1859 Balloon Voyage." }, { src: "/BLIMP/sophie.jpeg", alt: "Picture of the 1859 Balloon Voyage in sunset." }]} />

    </>
  );
}
