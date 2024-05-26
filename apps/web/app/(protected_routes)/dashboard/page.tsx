import React from "react";

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
            <div className="h-[170px] w-full border rounded-lg"></div>
            <div className="h-[170px] w-full border rounded-lg"></div>
            <div className="h-[170px] w-full border rounded-lg"></div>
          </div>
          <div className="w-full h-full border rounded-lg"></div>
        </div>
        <div className="flex flex-col h-full space-y-6 border p-6 rounded-lg w-[25%]">
          <h2>Latest events</h2>
          <div className="h-[150px] w-full border rounded-lg"></div>
          <div className="h-[150px] w-full border rounded-lg"></div>
          <div className="h-[150px] w-full border rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
