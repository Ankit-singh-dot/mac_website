import React from "react";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ShowCase = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
      timeline
        .to(".mask img", { scale: 1.1 })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>
      <div className="content ">
        <div className="wrapper flex">
          <div className="lg:max-w-md"></div>
          <h2>Rocket chip</h2>
          <p>
            Introducing{" "}
            <span className="text-white">
              M4 , the next generation of Apple silicon
            </span>
            . M4 powers
          </p>
          <p>
            It drives Apple Intelligence on iPad Pro, so you can write, create,
            and accomplish more with ease. All in a design that's unbelievably
            thin, light, and powerful
          </p>
          <p>
            A brand-new display engine delivers breathtaking precision, color
            accuracy, and brightness. And a next-gen GPU with
            hardware-accelerated ray tracing brings console-level graphics to
            your fingertips.
          </p>
        </div>
        <div className="space-y-5 mt-7 pe-10 ">
          <p className="text-primary">Learn more about Apple Intelligence</p>
          <p className="text-2xl">Up to</p>
          <p className="text-white text-4xl">4x faster</p>
          <p className="text-white">pro rendering performance than m2</p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
