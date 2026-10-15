import React from "react";
import headshot from "../assets/robert.jpg";
import { profile } from "../data";
import TextLinks from "./TextLinks";

const Hero = (): React.JSX.Element => {
  return (
    <section id="top" className="pt-28 pb-10 md:pt-32 md:pb-12">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted">
            Software engineer at {profile.company} · {profile.location}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            I work on the Chewy+ membership experience at Chewy. Before that I
            spent 2023 to 2026 at Red Hat on the OpenShift AI dashboard and
            upstream Kubeflow.
          </p>
          <div className="mt-6">
            <TextLinks />
          </div>
        </div>
        <img
          src={headshot}
          alt="Robert Sun"
          width={480}
          height={480}
          className="size-24 shrink-0 rounded-full border border-border object-cover sm:size-28 md:size-36"
        />
      </div>
    </section>
  );
};

export default Hero;
