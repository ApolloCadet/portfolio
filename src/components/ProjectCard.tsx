"use client";
import { motion } from "motion/react";
import PersonalIcon from "./PersonalIcon";
import { OpenIcon, WebIcon } from "./icons";
import Link from "next/link";
import EmblaCarousel from "./EmblaCarousel";

type ProjectCardProps = React.PropsWithChildren<{
  href: string;
  label: string;
  status: React.ReactNode;
  github?: string;
  url?: string;
  icon?: React.ReactNode;
  carousel?: { src: string, alt?: string }[];
}>;

export default function ProjectCard({ children, href, label, github, url, icon, status, carousel }: ProjectCardProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{
        // Scaling here will cause weird re-rendering combined with "width: fit-content" of the h2.
        // If I can figure out a fix, ill reimplement this scaling. <3
        // Arf! Arf Wruff! I am barking in source code.
        initial: { scale: 1 },
        hover: { scale: 1 },
      }}
      transition={{ duration: 0.2 }}
      className="projectCard">
      <div className="projectFlex">
        <div className="projectContent">
          <div
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
              flexDirection: "column",
            }}>
            <Link href={href} className="raw">
              <motion.h1
                style={{ textDecoration: "none" }}
                variants={{
                  initial: { width: "fit-content" },
                  hover: { width: "100%" },
                }}>
                {label}
                <div
                  style={{
                    height: "3px",
                    width: "100%",
                    backgroundColor: "var(--primary)",
                  }}
                />
              </motion.h1>
            </Link >
            {carousel &&
              <EmblaCarousel slides={carousel} />
            }
          </div>
          {children}</div>
        <aside>
          <div className="slideshow">
            {icon ? icon :
              <PersonalIcon
                style={{
                  width: "60%",
                  maxWidth: "220px",
                  padding: "5px 0px",
                  color: "var(--primary)",
                }}
                alignmentBaseline="central"
              />
            }
          </div>
          <div className="links">
            {url && (
              <span
                className="Link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(url, "_blank");
                }}>
                <WebIcon />
                Webpage
              </span>
            )}
            {github && (
              <span
                className="Link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(github, "_blank");
                }}>
                <OpenIcon />
                Github
              </span>
            )}
          </div>
          <div style={{ color: "var(--primary)", marginTop: "6px", fontSize: "16px", fontFamily: "ft88", letterSpacing: "-1px", textAlign: "left" }}>{status}</div>
        </aside>
      </div>
    </motion.div>
  );
}
