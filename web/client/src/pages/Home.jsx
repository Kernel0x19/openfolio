import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
import { useNavigate } from "react-router";
import { MoveRight, TrendingUp } from "lucide-react";
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
import HomeStats from "../components/home/HomeStats";

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
      <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 flex items-center justify-between lg:flex-row">
        <HomeStats STATS={STATS} />
      </div>
    </>
  );
};

export default Home;
