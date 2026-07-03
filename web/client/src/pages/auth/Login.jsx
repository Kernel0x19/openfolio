import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ViewContext } from "../../context/ViewContext";
import OpenFolioLogo from "../../assets/OpenFolioLogo-1.png";
import GithubLogo from "../../assets/GithubLogo-dark.svg";
import { ArrowUpRight, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const { darkMode } = useContext(ViewContext);
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const isValid = email.includes("@") && pwd.length >= 6;
  const dm = darkMode;

  const inputClass = `px-3.5 py-2.5 w-full rounded-lg text-sm border outline-none transition-colors duration-500
    ${
      dm
        ? "bg-white/12 border-white/20 text-white placeholder-white/30 focus:border-white/40 focus:bg-white/15"
        : "bg-black/8 border-black/15 text-black placeholder-black/35 focus:border-black/25 focus:bg-black/10"
    }`;

  const labelClass = `text-xs font-semibold uppercase tracking-wide transition-colors duration-500
    ${dm ? "text-white/50" : "text-black/50"}`;

  return (
    <div
      className={`w-full max-w-sm rounded-2xl shadow-2xl p-8 flex flex-col gap-5 border transition-colors duration-500
        ${
          dm
            ? "bg-[#1A1A1A] border-white/10 text-white"
            : "bg-white border-black/10 text-black"
        }`}
    >
      <div className="flex items-center gap-2.5">
        <img
          src={OpenFolioLogo}
          alt="OpenFolio"
          className="w-8 h-8 object-contain"
        />
        <span className="text-base font-semibold transition-colors duration-500">
          OpenFolio
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold leading-tight transition-colors duration-500">
          Back to your portfolio
        </h1>
        <p
          className={`text-sm transition-colors duration-500 ${dm ? "text-white/50" : "text-black/50"}`}
        >
          Your assets are waiting.
        </p>
      </div>
      <button
        className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors duration-500 hover:cursor-pointer
          bg-[#0d1117] border-[#30363d] text-white hover:bg-[#161b22]"
      >
        <img src={GithubLogo} alt="" className="w-4 h-4" aria-hidden="true" />
        Continue with Github
      </button>
      <div
        className={`flex items-center gap-3 text-xs transition-colors duration-500 ${dm ? "text-white/30" : "text-black/30"}`}
      >
        <div
          className={`flex-1 h-px transition-colors duration-500 ${dm ? "bg-white/10" : "bg-black/10"}`}
        />
        or
        <div
          className={`flex-1 h-px transition-colors duration-500 ${dm ? "bg-white/10" : "bg-black/10"}`}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className={labelClass}>Password</label>
          <a className="text-xs text-profit flex items-center gap-0.5 hover:underline cursor-pointer group transition-colors duration-500">
            Forgot?
            <ArrowUpRight
              size={12}
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
        <div className="relative">
          <input
            type={showPwd ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="••••••••"
            className={`${inputClass} pr-10`}
          />
          <button
            type="button"
            onClick={() => setShowPwd((p) => !p)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-500
              ${dm ? "text-white/40 hover:text-white/70" : "text-black/40 hover:text-black/70"}`}
            aria-label={showPwd ? "Hide password" : "Show password"}
          >
            {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        </div>
      </div>
      <button
        disabled={!isValid}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-500 group
          ${dm ? "bg-white text-black" : "bg-black text-white"}
          ${isValid ? "opacity-100 cursor-pointer hover:opacity-90" : "opacity-40 cursor-not-allowed"}`}
      >
        Log in
        <ArrowRight
          size={15}
          className={
            isValid
              ? "group-hover:translate-x-0.5 transition-transform duration-300"
              : ""
          }
        />
      </button>
      <p
        className={`text-center text-xs transition-colors duration-500 ${dm ? "text-white/40" : "text-black/40"}`}
      >
        No account?{" "}
        <span className="text-profit cursor-pointer hover:underline font-medium transition-colors duration-500" onClick={() => navigate('/auth/signup')}>
          Sign up free →
        </span>
      </p>
    </div>
  );
};

export default Login;
