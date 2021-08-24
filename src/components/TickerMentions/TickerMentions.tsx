import React, { FunctionComponent } from "react";
import "./TickerMentions.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import Header from "../Header/Header";

const data = [
  {
    name: "$TLT",
    uv: 8,
    // amt: 2400,
  },
  {
    name: "$UNCX",
    uv: 5,
    // amt: 2210,
  },
  {
    name: "$POVO",
    uv: 2,
    // amt: 2290,
  },
  {
    name: "$DRK",
    uv: 2,
    // amt: 2000,
  },
  {
    name: "$BIN",
    uv: 2,
    // amt: 2181,
  },
  {
    name: "$SNIPER",
    uv: 1,
    // amt: 2500,
  },
  {
    name: "$UNCL",
    uv: 1,
    // amt: 2100,
  },
  {
    name: "$GMF",
    uv: 1,
    // amt: 2100,
  },
  {
    name: "$HVE",
    uv: 1,
    // amt: 2100,
  },
];
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const TickerMentions: React.FC = () => {
  return (
    <div className="ticker-mentions">
      <Header headerName="Ticker mentions" />
      <BarChart
        style={{ margin: "0 auto" }}
        width={700}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0 5" />
        <XAxis style={{ stroke: "white" }} dataKey="name" />
        <YAxis style={{ stroke: "white" }} />
        <Bar dataKey="uv" fill="rgb(146, 158, 38)" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default TickerMentions;
