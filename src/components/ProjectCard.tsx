"use client";
import { motion } from "motion/react";
import PersonalIcon from "./PersonalIcon";
import { OpenIcon, WebIcon } from "@/icons";
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
      <Link href={href} className="raw">
        <motion.h1
          style={{ textDecoration: "none", textAlign: "center" }}
          variants={{
            initial: { width: "fit-content" },
            hover: { width: "100%" },
          }}>
          {label}
          <div
            style={{
              height: "3px",
              width: "100%",
              marginTop: "3px",
              backgroundColor: "var(--primary)",
            }}
          />
        </motion.h1>
      </Link >
      <div className="projectFlex">
        <div className="projectContent">
          <div
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
              flexDirection: "column",
            }}>
            {carousel &&
              <EmblaCarousel slides={carousel} />
            }
          </div>
          {children}</div>
        <aside style={{ marginTop: "15px" }}>
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
              <Link
                className="Link"
                href={url}
                target="_blank" rel="noopener noreferrer">
                <WebIcon />
                Webpage
              </Link>
            )}
            {github && (
              <Link
                className="Link"
                href={github}
                target="_blank"
                rel="noopener noreferrer">
                <OpenIcon />
                Github
              </Link>
            )}
          </div>
          <div style={{ color: "var(--primary)", marginTop: "6px", fontSize: "16px", fontFamily: "ft88", letterSpacing: "-1px", textAlign: "left" }}>{status}</div>
        </aside>
      </div>
      <hr style={{ marginBottom: "1em" }} />
    </motion.div>
  );
}
