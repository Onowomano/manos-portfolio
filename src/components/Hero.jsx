import Avatar from "./Avatar";

const linkClass = "link-underline";
const linkProps = { target: "_blank", rel: "noopener noreferrer" };

export default function Hero() {
  return (
    <div className="flex flex-col items-start gap-[16px]">
      <Avatar />
      <div className="flex flex-col items-start gap-[12px] text-body-lg text-text-primary">
        <p>Hi, I&rsquo;m Mano.</p>
        <div className="flex flex-col gap-[22px] text-text-secondary">
          <p>
            I&rsquo;m curious about people, systems, and problems. In the last 6
            years, I&rsquo;ve managed teams and solved problems as a
            solo-designer in various industries with organizations like{" "}
            <a href="https://kuda.com" {...linkProps} className={linkClass}>
              Kuda
            </a>
            ,{" "}
            <a href="https://www.semicolon.africa" {...linkProps} className={linkClass}>
              Semicolon
            </a>
            ,{" "}
            <a href="https://www.mofi.com.ng" {...linkProps} className={linkClass}>
              Ministry of Finance (Nigeria)
            </a>{" "}
            and more.
          </p>
          <p>
            Right now, I&rsquo;m currently a lead product designer at Kuda.
            Based in Lagos, Nigeria.
          </p>
          <p>
            When I&rsquo;m not working, I play Fortnite, walk, run (sometimes),
            listen to music, learn about countries (since I haven&rsquo;t
            traveled), and think of new things to build.
          </p>
          <p>
            Say hi on{" "}
            <a href="https://twitter.com/onowomano" {...linkProps} className={linkClass}>
              Twitter
            </a>
            ,{" "}
            <a href="https://linkedin.com/in/onowomano" {...linkProps} className={linkClass}>
              Linkedin
            </a>{" "}
            or send me an{" "}
            <a href="mailto:milueziogbaudu@gmail.com" {...linkProps} className={linkClass}>
              email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
