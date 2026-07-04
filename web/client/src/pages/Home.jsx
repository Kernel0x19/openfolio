import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  BarChart3,
  Coins,
  Eye,
  icons,
  MoveRight,
  PieChart,
  Proportions,
  Receipt,
  ShieldCheck,
  TrendingUp,
  GitFork,
  Ban,
  Star,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import HomeCard from "../components/home/HeroCard";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import Reasons from "../components/home/Reasons";
import HowItWorks from "../components/home/HowItWorks";

const Home = () => {
  const { darkMode, setDarkMode } = useContext(ViewContext);

  const navigate = useNavigate();

  const dm = darkMode;
  const chartData = [
    { month: "January", stockPrice: 95000 },
    { month: "February", stockPrice: 118000 },
    { month: "March", stockPrice: 98500 },
    { month: "April", stockPrice: 128000 },
    { month: "May", stockPrice: 109000 },
    { month: "June", stockPrice: 124580 },
  ];

  const STATS = [
    { id: 1, stat: "Active Users", suffix: "+", count: 10000 },
    { id: 2, stat: "Portfolios Tracked", suffix: "+", count: 15000 },
    { id: 3, stat: "Asset Classes", suffix: "", count: 5 },
    { id: 4, stat: "Open Source", suffix: "%", count: 100 },
  ];

  const FEATURES = [
    {
      id: 1,
      name: "Track Stocks",
      desc: "Real-time stock tracking across all major exchanges — NSE, BSE, and beyond — with live price feeds, daily gain/loss, and portfolio-level performance in one view.",
      icon: TrendingUp,
    },
    {
      id: 2,
      name: "Mutual Funds",
      desc: "Monitor your MF portfolio and SIP performance with NAV tracking, XIRR returns, and a clear breakdown of fund allocation across your holdings.",
      icon: PieChart,
    },
    {
      id: 3,
      name: "Commodities",
      desc: "Track gold, silver, and other commodity investments alongside your equity and MF holdings, with live rates so your net worth stays accurate.",
      icon: Coins,
    },
    {
      id: 4,
      name: "XIRR & CAGR Metrics",
      desc: "Time-weighted XIRR and CAGR on every holding and your total portfolio, not just raw gain/loss — the metric that actually tells you if you're beating a benchmark.",
      icon: BarChart3,
    },
    {
      id: 5,
      name: "Real-time Updates",
      desc: "Live prices and portfolio value updates that refresh automatically, so you're always looking at current numbers, not stale end-of-day data.",
      icon: Activity,
    },
    {
      id: 6,
      name: "Tax Computation (LTCG/STCG)",
      desc: "Automatic LTCG/STCG calculation on every holding, with indexation and the pre-2018 grandfathering clause built in — no manual tax math at filing time.",
      icon: Receipt,
    },
  ];

  const REASONS = [
    {
      id: 1,
      icon: Eye,
      title: "Auditable, Not Assumed",
      desc: "Every line that touches your holdings is public on GitHub, GNU-v3.0 licensed — verify it yourself instead of trusting a black box.",
    },
    {
      id: 2,
      icon: GitFork,
      title: "Self-Host Anywhere",
      desc: "Deploy on your own infrastructure. Any modifications you run as a public service stay open too — that's the GNU guarantee.",
    },
    {
      id: 3,
      icon: Ban,
      title: "No Ads, No Data Resale",
      desc: "Free forever, with no business model that depends on selling your financial behavior to advertisers.",
    },
  ];

  const STEPS = [
    {
      number: "01",
      title: "Connect Your Broker",
      description:
        "Download your CAMS or CDSL consolidated account statement and upload it. We parse your entire transaction history in seconds.",
    },
    {
      number: "02",
      title: "Add Your Assets",
      description:
        "Every stock, mutual fund, and commodity appears automatically. Correct any gaps or add assets manually.",
    },
    {
      number: "03",
      title: "Track Everything Live",
      description:
        "Live prices, XIRR, CAGR, and LTCG/STCG — all calculated automatically. Always current, never stale.",
    },
  ];

  const chartConfig = {
    stockPrice: {
      label: "Stock Price: ",
      color: "#22C55E",
    },
  };

  return (
    <>
      {/* Hero */}
      <div
        className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6"
        id="home"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-3 p-2 text-center lg:text-left">
          <div
            className={`flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 ${darkMode ? "bg-secondaryBg text-secondaryTextColor" : "bg-primaryBg text-primaryTextColor"} transition-colors duration-500 hover:cursor-pointer`}
          >
            <h1 className="text-sm sm:text-base md:text-lg font-semibold">
              Open Source Portfolio Tracker
            </h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-black">
            Track Every Asset You Own
          </h1>
          <h1 className="text-sm sm:text-base md:text-lg mb-3 sm:mb-5 max-w-md lg:max-w-none">
            Stocks, Mutual Funds, Commodities — all in one open-source Dashboard
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              className={`px-4 sm:px-3 xl:px-5 py-2.5 sm:py-2 xl:py-3 text-sm xl:text-lg hover:rounded-lg transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 group
              ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
              onClick={() => navigate("/auth/signup")}
            >
              Get Started
              <MoveRight
                size={16}
                className={`${darkMode ? "text-black" : "text-white"} group-hover:translate-x-2 transition-all duration-500`}
              />
            </button>
            <button
              className={`px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-lg hover:rounded-lg transition-all duration-500 border-2 ${darkMode ? "bg-primaryBg text-white hover:bg-secondaryBg hover:text-secondaryTextColor" : "bg-white text-black hover:bg-primaryBg hover:text-primaryTextColor"} hover:cursor-pointer`}
              onClick={() =>
                window.open("https://github.com/Kernel0x19/openfolio", "_blank")
              }
            >
              View On Github
            </button>
          </div>
        </div>
        <HomeCard />
      </div>

      {/* Stats */}
      <div className="w-full h-auto px-8 sm:px-10 md:px-16 lg:px-22 xl:px-35 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 flex items-center justify-between lg:flex-row">
        <Stats STATS={STATS} />
      </div>

      {/* Features */}
      <div
        className="w-full h-auto px-8 sm:px-10 md:px-16 lg:px-22 xl:px-35 py-14 sm:py-18 md:py-25 lg:py-30 xl:py-40 flex flex-col items-center justify-between gap-12"
        id="features"
      >
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Everything You Need
          </h1>
          <h1 className="text-sm lg:text-lg text-neutral-500 font-bold">
            One dashboard for all your assets.
          </h1>
        </div>
        <Features FEATURES={FEATURES} />
      </div>

      {/* Reasons */}
      <div className="w-full h-auto px-8 sm:px-10 md:px-16 lg:px-22 xl:px-35 py-14 sm:py-18 md:py-25 lg:py-30 xl:py-40 flex flex-col items-center justify-between gap-12">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">Why Open Source ?</h1>
          <h1 className="text-sm lg:text-lg text-neutral-500 font-bold">
            Your money, your data, your code to verify.
          </h1>
        </div>
        <Reasons REASONS={REASONS} />
      </div>

      {/* How it Works */}
      <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-14 sm:py-18 md:py-25 lg:py-30 xl:py-40 flex flex-col items-center justify-between gap-12" id="how-it-works">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl lg:text-4xl font-bold">How it works ?</h1>
          <h1 className="text-sm lg:text-lg text-neutral-500 font-bold">
            From zero to tracked in under five minutes.
          </h1>
        </div>
        <HowItWorks STEPS={STEPS} />
      </div>

      {/* CTA */}
      <section
        className={`w-full h-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-15 lg:py-20 xl:py-30 flex flex-col items-center justify-between gap-12 transition-all duration-500 ${darkMode ? "bg-white text-black" : "bg-card text-white"}`}
      >
        <div className="flex flex-col gap-3 relative z-10 transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-center">
            Your portfolio data
            <br />
            <span className="text-profit">belongs to you.</span>
          </h2>
          <p
            className={`text-sm sm:text-base max-w-md mx-auto leading-relaxed text-center transition-colors duration-500
            ${dm ? "text-black/60" : "text-white/60"}`}
          >
            Not to us. Not to advertisers. Not to anyone.
            <br />
            Open source, self-hostable, free forever.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 transition-all duration-500">
          <button
            onClick={() => navigate("/auth/signup")}
            className={`px-6 py-4 rounded-lg text-base font-semibold flex items-center gap-2 group transition-all duration-300 cursor-pointer
              ${
                dm
                  ? "bg-black text-white hover:bg-black/90"
                  : "bg-white text-black hover:bg-white/90"
              }`}
          >
            Get Started Free
            <MoveRight
              size={15}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>

          <a
            href="https://github.com/Kernel0x19/openfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-4 rounded-lg text-base font-semibold flex items-center gap-2 border transition-all duration-300 cursor-pointer
              ${
                dm
                  ? "border-black/15 text-black hover:bg-black/5"
                  : "border-white/15 text-white hover:bg-white/5 bg-card"
              }`}
          >
            <Star size={15} />
            Star on GitHub
          </a>
        </div>
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs relative z-10 transition-colors duration-500
          ${dm ? "text-black/60" : "text-white/60"}`}
        >
          <span className="flex items-center gap-1.5">
            <span style={{ color: "#22C55E", opacity: 0.6 }}>✓</span>
            No credit card
          </span>
          <span
            className={`hidden sm:block w-px h-3 ${dm ? "bg-black/40" : "bg-white/40"}`}
          />
          <span className="flex items-center gap-1.5">
            <span style={{ color: "#22C55E", opacity: 0.6 }}>✓</span>
            GNU v3.0 License
          </span>
          <span
            className={`hidden sm:block w-px h-3 ${dm ? "bg-black/40" : "bg-white/40"}`}
          />
          <span className="flex items-center gap-1.5">
            <span style={{ color: "#22C55E", opacity: 0.6 }}>✓</span>
            Self-hostable
          </span>
          <span
            className={`hidden sm:block w-px h-3 ${dm ? "bg-black/40" : "bg-white/40"}`}
          />
          <span className="flex items-center gap-1.5">
            <span style={{ color: "#22C55E", opacity: 0.6 }}>✓</span>
            Free forever
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
