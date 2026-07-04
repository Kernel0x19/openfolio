import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import OpenFolioLogo from "../assets/OpenFolioLogo-1.png";
import { ArrowUpRight } from "lucide-react";
import GithubLight from "../assets/GithubLogo-light.svg";
import GithubDark from "../assets/GithubLogo-dark.svg";
import XIconDark from "../assets/XLogo.webp";
import XIconLight from "../assets/XLogo-dark.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    {
      label: "Changelog",
      href: "https://github.com/Kernel0x19/openfolio/blob/dev/CHANGELOG.md",
      external: true,
    },
    {
      label: "Roadmap",
      href: "https://github.com/Kernel0x19/openfolio/blob/dev/ROADMAP.md",
      external: true,
    },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    {
      label: "Contributing",
      href: "https://github.com/Kernel0x19/openfolio/blob/dev/CONTRIBUTING.md",
      external: true,
    },
    {
      label: "Issues",
      href: "https://github.com/Kernel0x19/openfolio/issues",
      external: true,
    },
    {
      label: "Releases",
      href: "https://github.com/Kernel0x19/openfolio/releases",
      external: true,
    },
  ],
  Legal: [
    {
      label: "GNU License",
      href: "https://github.com/Kernel0x19/openfolio/blob/dev/LICENSE",
      external: true,
    },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const Footer = () => {
  const { darkMode } = useContext(ViewContext);
  const dm = darkMode;

  const linkClass = `text-sm transition-colors duration-300 cursor-pointer w-fit flex items-center gap-1 group
    ${dm ? "text-white/40 hover:text-white/80" : "text-black/40 hover:text-black/80"}`;

  const headingClass = `text-xs font-semibold uppercase tracking-widest mb-4 transition-colors duration-500
    ${dm ? "text-white/30" : "text-black/30"}`;

  return (
    <footer
      className={`w-full border-t transition-colors duration-500
        ${
          dm
            ? "bg-[#0D0D0D] border-white/8 text-primaryTextColor"
            : "bg-[#F9F9F9] border-black/8 text-secondaryTextColor"
        }`}
    >
      <div className="w-full px-6 sm:px-10 md:px-16 xl:px-24 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img
              src={OpenFolioLogo}
              alt="OpenFolio"
              className="w-8 h-8 object-contain"
            />
            <span className="text-base font-semibold">OpenFolio</span>
          </div>
          <p
            className={`text-sm leading-relaxed max-w-xs transition-colors duration-500
            ${dm ? "text-white/40" : "text-black/40"}`}
          >
            Open-source portfolio tracker for stocks, mutual funds, and
            commodities. Your data, your code.
          </p>
          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kernel0x19/openfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-all duration-300
                ${
                  dm
                    ? "border-white/10 text-white/40 hover:text-white hover:border-white/30"
                    : "border-black/10 text-black/40 hover:text-black hover:border-black/30"
                }`}
              aria-label="GitHub"
            >
              <img
                src={darkMode ? GithubDark : GithubLight}
                className="w-4 h-4"
              />
            </a>
            <a
              href="#"
              className={`p-2 rounded-lg border transition-all duration-300
                ${
                  dm
                    ? "border-white/10 text-white/40 hover:text-white hover:border-white/30"
                    : "border-black/10 text-black/40 hover:text-black hover:border-black/30"
                }`}
              aria-label="Twitter"
            >
              <img
                src={darkMode ? XIconLight : XIconDark}
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="flex flex-col">
            <p className={headingClass}>{heading}</p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                  ) : (
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className={`w-full px-6 sm:px-10 md:px-16 xl:px-24 py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 transition-colors duration-500
        ${dm ? "border-white/8" : "border-black/8"}`}
      >
        <p
          className={`text-xs transition-colors duration-500 ${dm ? "text-white/25" : "text-black/25"}`}
        >
          © 2025 OpenFolio · Open source under{" "}
          <a
            href="https://github.com/Kernel0x19/openfolio/blob/dev/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:underline transition-colors duration-300 ${dm ? "text-white/40" : "text-black/40"}`}
          >
            GNU License
          </a>
        </p>
        <p
          className={`text-xs transition-colors duration-500 ${dm ? "text-white/25" : "text-black/25"}`}
        >
          Made with ♥ in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
