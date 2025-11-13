import React from "react";

const ShowCase = () => {
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
        <div className="mask">
          <img src="/mask-logo.svg" alt="" />
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md"></div>
          <h2>Rocket chip</h2>
        </div>
        <div className="space-y-5 mt-7 pe-10">
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
          <p className="text-primary">Learn more about Apple Intelligence</p>
          <p className="text-2xl">Up to</p>
          <p className="text-white">4x faster</p>
          <p className="text-white">pro rendering performance than m2</p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
