import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <footer className="bg-cyan-600 text-white py-8" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Contact Information */}
            <div className="w-full sm:w-1/3 mb-6">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <p>Kabupaten Cirebon</p>
              <p>Jawa Barat, Indonesia</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:muhammadmuminaziz@gmail.com"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  muhammadmuminaziz@gmail.com
                </a>
              </p>
              <p>Phone: (+62) 812-9020-0437</p>
            </div>

            {/* Quick Links */}
            <div className="w-full sm:w-1/3 mb-6">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul>
                <QuickLink url="about" label="About" />
                <QuickLink url="skills" label="Skills" />
                <QuickLink url="projects" label="Projects" />
                <QuickLink url="client" label="Clients" />
                <QuickLink url="contact" label="Contact" />
              </ul>
            </div>

            {/* Social Media */}
            <div className="w-full sm:w-1/3 mb-6">
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/muhammad.m.aziz.5688"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/m_aziz76/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-mu-min-azis-24694b222/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/MuhammadMuminaziz"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 border-t border-white pt-4">
            <p>
              &copy; {new Date().getFullYear()} Mubtadev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

const QuickLink = ({ url, label }: { url: string; label: string }) => {
  return (
    <li>
      <Link
        to={url}
        smooth={true}
        offset={-300}
        className="hover:underline cursor-pointer"
      >
        {label}
      </Link>
    </li>
  );
};
