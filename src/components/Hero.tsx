import React from "react";
import { motion } from "framer-motion";
import { LuFileText } from "react-icons/lu";
import headshot from "../assets/robert.jpg";
import { profile } from "../data";
import SocialLinks from "./SocialLinks";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const Hero = (): React.JSX.Element => {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] items-center pt-24 pb-12"
    >
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="flex w-full flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Currently at {profile.company} · {profile.location}
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="mt-3 text-xl font-medium text-accent sm:text-2xl"
          >
            {profile.title}
          </motion.p>
          <motion.p
            {...fadeUp(0.24)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            I build the Chewy+ membership experience at Chewy. Previously, I
            worked on the OpenShift AI dashboard at Red Hat and contributed
            upstream to Kubeflow.
          </motion.p>
          <motion.div
            {...fadeUp(0.32)}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-accent-fg transition hover:brightness-110"
            >
              <LuFileText className="size-4" aria-hidden />
              View résumé
            </a>
            <SocialLinks />
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          src={headshot}
          alt="Robert Sun"
          width={480}
          height={480}
          className="size-28 shrink-0 rounded-full object-cover ring-1 ring-border ring-offset-4 ring-offset-bg sm:size-36 md:size-56"
        />
      </div>
    </section>
  );
};

export default Hero;
