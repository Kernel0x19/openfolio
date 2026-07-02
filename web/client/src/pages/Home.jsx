import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";
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

const Home = () => {
  const { darkMode, setDarkMode } = useContext(ViewContext);

  const chartData = [
    { month: "January", stockPrice: 95000 },
    { month: "February", stockPrice: 118000 },
    { month: "March", stockPrice: 98500 },
    { month: "April", stockPrice: 128000 },
    { month: "May", stockPrice: 109000 },
    { month: "June", stockPrice: 124580 },
  ];

  const chartConfig = {
    stockPrice: {
      label: "Stock Price: ",
      color: "#22C55E",
    },
  };

  return (
    <>
      <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
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
            >
              Get Started
              <MoveRight
                size={16}
                className={`${darkMode ? "text-black" : "text-white"} group-hover:translate-x-2 transition-all duration-500`}
              />
            </button>
            <button
              className={`px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-lg hover:rounded-lg transition-all duration-500 border-2 ${darkMode ? "bg-primaryBg text-white hover:bg-secondaryBg hover:text-secondaryTextColor" : "bg-white text-black hover:bg-primaryBg hover:text-primaryTextColor"} hover:cursor-pointer`}
            >
              View On Github
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-3 p-2">
          <div className="w-full flex flex-col gap-2 px-4 sm:px-5 py-6 sm:py-8 bg-card rounded-lg text-primaryTextColor">
            <h1 className="text-xs sm:text-sm font-semibold">
              Total Portfolio Value
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-0">
              <h1 className="text-xl sm:text-2xl font-black">₹1,24,580</h1>
              <div className="flex items-center justify-center gap-5 sm:gap-8">
                <div className="flex flex-col text-sm sm:text-base">
                  <h1>Invested</h1>
                  <h1>₹98,000</h1>
                </div>
                <div className="flex flex-col text-profit text-sm sm:text-base">
                  <h1>Returns</h1>
                  <h1>+₹26,580</h1>
                </div>
              </div>
            </div>
            <div className="w-fit px-3 py-2 text-xs sm:text-sm bg-dkGreen text-profit rounded-lg text-center">
              ▲ +2.4% Today
            </div>
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="pb-2 px-0 sm:px-6">
                <CardTitle className="text-sm sm:text-base">
                  Portfolio Performance
                </CardTitle>
                <CardDescription className="text-xs">
                  Track your stock prices across all your holdings
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 sm:px-5">
                <ChartContainer
                  config={chartConfig}
                  className="h-28 sm:h-32 md:h-36 w-full"
                >
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 8,
                      right: 8,
                    }}
                  >
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                      dataKey="stockPrice"
                      type="natural"
                      fill="var(--color-stockPrice)"
                      fillOpacity={0.4}
                      stroke="var(--color-stockPrice)"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="px-0 sm:px-5 py-3">
                <div className="flex w-full items-start gap-2 text-xs sm:text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 leading-none font-medium">
                      Portfolio grew ₹29,580 in 6 months{" "}
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-profit">
                      January - June 2024 • +2.4% this month
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;