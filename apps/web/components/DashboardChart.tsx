"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    events: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    events: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    events: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    events: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    events: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    events: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    events: 4300,
    amt: 2100,
  },
];

const DashboardChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="events"
          stroke="#A9FFC6"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
