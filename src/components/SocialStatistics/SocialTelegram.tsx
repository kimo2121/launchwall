import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { FaTelegram } from "react-icons/fa";

const data = [
  {
    uv: 0,
    pv: 0,
  },
  {
    uv: 0,
    pv: 0,
  },
  {
    uv: 0,
    pv: 0,
  },
  {
    uv: 0,
    pv: 0,
  },
  {
    uv: 0,
    pv: 0,
  },
  {
    uv: 500,
    pv: 200,
  },
  {
    uv: 0,
    pv: 500,
  },
  {
    uv: 500,
    pv: 800,
  },
  {
    uv: 0,
    pv: 1000,
  },
  {
    uv: 1000,
    pv: 1200,
  },
  {
    uv: 0,
    pv: 1500,
  },
  {
    uv: 500,
    pv: 2000,
  },
  {
    uv: 1000,
    pv: 4000,
  },
];
interface IType {
  value?: any;
}

const SocialTelegram: React.FC<IType> = ({ value }) => {
  return (
    <div style={{ marginTop: "2vh" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href={value?.telegramLink} target="_blank">
          <FaTelegram
            style={{ marginRight: ".5vw" }}
            color="rgb(0, 189, 192)"
          />
        </a>
        <h3>members: 3,995 - average hourly growth (members): 0.55%</h3>
      </div>
      <p style={{ position: "absolute", left: "40%" }}>
        Telegram members (online & total), last 923 hours
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
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="gray"
          fill="gray"
        />
      </AreaChart>
    </div>
  );
};

export default SocialTelegram;
