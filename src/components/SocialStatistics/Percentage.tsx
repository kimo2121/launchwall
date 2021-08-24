import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
const data = [
  {
    pv: 0,
  },
  {
    pv: 40,
  },
  {
    pv: 0,
  },
  {
    pv: 40,
  },
  {
    pv: 0,
  },
  {
    pv: 50,
  },
  {
    pv: 0,
  },
  {
    pv: 50,
  },
  {
    pv: 0,
  },
  {
    pv: 70,
  },
  {
    pv: 0,
  },
  {
    pv: 50,
  },
  {
    pv: 0,
  },
  {
    pv: 60,
  },
  {
    pv: 0,
  },
  {
    pv: 70,
  },
  {
    pv: 0,
  },
  {
    pv: 80,
  },
  {
    pv: 0,
  },
  {
    pv: 100,
  },
  {
    pv: 0,
  },
  {
    pv: 50,
  },
  {
    pv: 0,
  },
  {
    pv: 40,
  },
  {
    pv: 0,
  },
  {
    pv: 50,
  },
  {
    pv: 0,
  },
  {
    pv: 70,
  },
  {
    pv: 0,
  },
  {
    pv: 60,
  },
  {
    pv: 0,
  },
  {
    pv: 50,
  },
  {
    pv: 0,
  },
  {
    pv: 80,
  },
];
interface IType {
  value?: any;
}
const Percentage: React.FC<IType> = ({ value }) => {
  return (
    <div style={{ marginTop: "2vh" }}>
      <p style={{ position: "absolute", left: "40%", marginTop: "-2vh" }}>
        Percentage of online members from total, last 923 hours
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
        <Area type="monotone" dataKey="pv" stroke="gray" fill="gray" />
      </AreaChart>
    </div>
  );
};

export default Percentage;
