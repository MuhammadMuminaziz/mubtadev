import CardGlass from "../components/CardGlass";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <>
      <div
        className="w-full md:max-w-3xl lg:max-w-6xl mx-auto px-5 text-white"
        id="about"
        data-aos="fade-up"
      >
        <CardGlass>
          <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row lg:p-5 items-center">
            <div className="rounded-full border-4 border-cyan-600 overflow-hidden lg:w-1/3 w-36 mt-5">
              <img
                src="img/profile.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-slate-200 text-sm lg:text-base">
                Hello... I am Muhammad Mu'min Azis, a graduate of STMIK IKMI
                CIREBON. Prior to this, I worked as a freelancer in web
                development for over 2 years. As a freelancer and with various
                other institutions, I have worked with clients from diverse
                industries to understand their needs and provide creative
                solutions. I possess analytical skills and expertise in
                developing web-based applications, and I also have strong team
                collaboration skills gained from my previous experiences. Moving
                forward, I hope to continuously hone my skills and abilities to
                become even better.
              </p>
              <Button
                className={"mt-5 bg-cyan-600 rounded hover:bg-cyan-500"}
                size={"sm"}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=681290200437"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact me
                </a>
              </Button>
            </div>
          </div>
        </CardGlass>
      </div>
    </>
  );
}
