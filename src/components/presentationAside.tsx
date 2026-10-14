"use client";
import { useEffect, useState } from "react";
import Pixelated from "./pixelated";

export default function PresentationAside() {
  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(prev => !prev);
  }

  useEffect(() => {
    // Shift + P to toggle the presentation aside
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === "P") {
        toggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {showMe && (
        <Pixelated style={{ padding: "19px 2px 14px 2px" }} className="presentationAside">
          <img
            src="/socials/linkedin_qrCode.jpeg"
            style={{ maxWidth: "138px", height: "auto" }}
            alt="[LinkedIn QR Code]"
          />
          <span style={{ marginTop: 7, fontSize: 20 }}>Add me on<br />LinkedIn</span>
        </Pixelated>
      )}
    </>
  );
}