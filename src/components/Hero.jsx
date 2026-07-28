import Avatar from "./Avatar";
import CopyEmailButton from "./CopyEmailButton";
import { siteLinks } from "../data/links";

const linkClass = "link-underline";
const linkProps = { target: "_blank", rel: "noopener noreferrer" };

function EmailLink() {
  const email = siteLinks.email.replace(/^mailto:/, "");

  return (
    <span className="group inline-flex items-center gap-[2px]">
      <a
        href={siteLinks.email}
        aria-label={`Email ${email}`}
        className={`${linkClass} relative inline-grid w-[37px] overflow-hidden align-bottom transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[188px]`}
      >
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 whitespace-nowrap transition-all duration-300 ease-in group-hover:-translate-y-[6px] group-hover:opacity-0"
        >
          email
        </span>
        <span
          aria-hidden="true"
          className="col-start-1 row-start-1 translate-y-[6px] whitespace-nowrap opacity-0 transition-all duration-300 delay-100 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          {email}
        </span>
      </a>
      <span className="inline-flex scale-75 opacity-0 transition-all duration-300 delay-150 ease-out group-hover:scale-100 group-hover:opacity-100">
        <CopyEmailButton email={email} />
      </span>
    </span>
  );
}

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
            <a
              href="https://www.semicolon.africa"
              {...linkProps}
              className={linkClass}
            >
              Semicolon
            </a>
            ,{" "}
            <a
              href="https://www.mofi.com.ng"
              {...linkProps}
              className={linkClass}
            >
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
            <a
              href="https://twitter.com/onowomano"
              {...linkProps}
              className={linkClass}
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/onowomano"
              {...linkProps}
              className={linkClass}
            >
              Linkedin
            </a>{" "}
            or send me an <EmailLink />
          </p>
        </div>
      </div>
    </div>
  );
}
