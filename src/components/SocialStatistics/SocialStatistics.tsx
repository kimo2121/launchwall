import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaTwitter } from "react-icons/fa";

const data = [
  {
    pv: 0,
  },
  {
    pv: 0,
  },
  {
    pv: 0,
  },
  {
    pv: 0,
  },
  {
    pv: 0,
  },
  {
    pv: 70,
  },
  {
    pv: 140,
  },
  {
    pv: 210,
  },
  {
    pv: 280,
  },
  {
    pv: 350,
  },
  {
    pv: 420,
  },
  {
    pv: 490,
  },
  {
    pv: 560,
  },
  {
    pv: 630,
  },
  {
    pv: 700,
  },
  {
    pv: 770,
  },
  {
    pv: 840,
  },
  {
    pv: 910,
  },
  {
    pv: 980,
  },
  {
    pv: 1050,
  },
  {
    pv: 1120,
  },
  {
    pv: 1190,
  },
  {
    pv: 1260,
  },
  {
    pv: 1340,
  },
  {
    pv: 1410,
  },
  {
    pv: 1480,
  },
  {
    pv: 1550,
  },
  {
    pv: 1620,
  },
  {
    pv: 1690,
  },
  {
    pv: 1760,
  },
  {
    pv: 1730,
  },
  {
    pv: 1800,
  },
  {
    pv: 1870,
  },
  {
    pv: 5007,
  },
];
interface IType {
  value?: any;
}
const SocialStatistics: React.FC<IType> = ({ value }) => {
  return (
    <div style={{ marginTop: "2vh" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href={value?.telegramLink} target="_blank">
          <FaTwitter style={{ marginRight: ".5vw" }} color="rgb(0, 189, 192)" />
        </a>
        <h3>
          followers: 5,007 - tweets: 280 - average daily growth (followers): 18%
        </h3>
      </div>
      <p style={{ position: "absolute", left: "40%" }}>
        Twitter followers, last 35 days
      </p>
      <AreaChart
        width={1000}
        height={150}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="rgb(22, 70, 46)"
          fill="rgb(22, 70, 46)"
        />
      </AreaChart>
    </div>
  );
};

export default SocialStatistics;
