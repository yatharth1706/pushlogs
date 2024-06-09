import Image from "next/image";
import React from "react";
import DashboardChart from "../../../components/DashboardChart";

type Props = {};

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="flex flex-col w-full h-full p-10 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl">Dashboard</h1>
        <p className="text-sm font-light">Welcome Yatharth</p>
      </div>
      <div className="flex w-full h-full space-x-10">
        <div className="flex flex-col h-full space-y-8 w-[75%]">
          <div className="grid w-full grid-cols-3 gap-8">
            <div className="h-[170px] w-full border rounded-2xl p-6 flex flex-col space-y-1 justify-center">
              <h2 className="font-medium text-gray-500">Projects</h2>
              <h1 className="text-xl font-medium text-gray-600">10</h1>
              <div className="w-14 rounded-full px-2 bg-[#A9FFC6] text-gray-800 font-normal">
                <span className="text-xs">+ 1.3%</span>
              </div>
            </div>
            <div className="h-[170px] w-full border rounded-2xl p-6 flex flex-col space-y-1 justify-center">
              <h2 className="font-medium text-gray-500">Channels</h2>
              <h1 className="text-xl font-medium text-gray-600">10</h1>
              <div className="w-14 rounded-full px-2 bg-[#FF9D9D] text-gray-800 font-normal">
                <span className="text-xs">- 1%</span>
              </div>
            </div>
            <div className="h-[170px] w-full border rounded-2xl p-6 flex flex-col space-y-1 justify-center">
              <h2 className="font-medium text-gray-500">Events</h2>
              <h1 className="text-xl font-medium text-gray-600">10</h1>
              <div className="w-14 rounded-full px-2 bg-[#A9FFC6] text-gray-800 font-normal">
                <span className="text-xs">+ 1.3%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full p-6 border rounded-2xl">
            <h2 className="font-medium text-gray-500">Event Logs</h2>
            <DashboardChart />
          </div>
        </div>
        <div className="flex flex-col h-full space-y-4 border p-6 rounded-2xl w-[25%]">
          <h2>Latest events</h2>
          <div className="flex w-full h-auto p-4 border rounded-2xl">
            {/* icon */}
            <Image
              src="/Info.svg"
              width={50}
              height={50}
              alt="Info Icon"
              className="w-4 h-4 mt-[3px]"
            />
            {/* description */}
            <div className="flex flex-col w-full px-2 space-y-2">
              <h3 className="text-sm">Successful registration</h3>
              <p className="text-sm text-gray-500">
                User with id: 98373 reg...
              </p>
              <small className="text-xs font-medium text-gray-600">
                2024-05-17 07:00
              </small>
            </div>
          </div>
          <div className="flex w-full h-auto p-4 border rounded-2xl">
            {/* icon */}
            <Image
              src="/Info.svg"
              width={50}
              height={50}
              alt="Info Icon"
              className="w-4 h-4 mt-[3px]"
            />
            {/* description */}
            <div className="flex flex-col w-full px-2 space-y-2">
              <h3 className="text-sm">Successful registration</h3>
              <p className="text-sm text-gray-500">
                User with id: 98373 reg...
              </p>
              <small className="text-xs font-medium text-gray-600">
                2024-05-17 07:00
              </small>
            </div>
          </div>
          <div className="flex w-full h-auto p-4 border rounded-2xl">
            {/* icon */}
            <Image
              src="/Info.svg"
              width={50}
              height={50}
              alt="Info Icon"
              className="w-4 h-4 mt-[3px]"
            />
            {/* description */}
            <div className="flex flex-col w-full px-2 space-y-2">
              <h3 className="text-sm">Successful registration</h3>
              <p className="text-sm text-gray-500">
                User with id: 98373 reg...
              </p>
              <small className="text-xs font-medium text-gray-600">
                2024-05-17 07:00
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
