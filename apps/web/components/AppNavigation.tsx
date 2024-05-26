import Image from "next/image";
import React from "react";
import { PiSidebarSimpleLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiCodeproject } from "react-icons/si";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

type Props = {};

const generalNavs = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LuLayoutDashboard size={24} />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <SiCodeproject size={24} />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <IoAnalyticsOutline size={24} />,
  },
];

const accountNavs = [
  {
    name: "Settings",
    href: "/settings",
    icon: <CiSettings size={24} />,
  },
  {
    name: "Updates",
    href: "/updates",
    icon: <MdOutlineTipsAndUpdates size={24} />,
  },
];

const activeNav = "Dashboard";

const AppNavigation: React.FC<Props> = () => {
  return (
    <div className="w-[18%] h-screen flex flex-col space-y-6 p-8 border-r ">
      <div className="flex items-center justify-between">
        <Image src="/AppLogo.svg" width={200} height={200} alt="Logo" />
        <PiSidebarSimpleLight size={24} />
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="font-medium">General</h2>
        {generalNavs.map((nav) => (
          <div
            className={
              "flex p-4 space-x-4" +
              (activeNav === nav.name
                ? " bg-gray-200 rounded-lg font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800"
                : "")
            }
          >
            {nav.icon}
            <a href={nav.href}>{nav.name}</a>
          </div>
        ))}
        <h2 className="font-medium">Account</h2>
        {accountNavs.map((nav) => (
          <div
            className={
              "flex p-4 space-x-4" +
              (activeNav === nav.name
                ? " bg-gray-200 rounded-lg font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800"
                : "")
            }
          >
            {nav.icon}
            <a href={nav.href}>{nav.name}</a>
          </div>
        ))}
      </div>
      <div
        className="flex p-4 space-x-4 border border-gray-200 rounded-lg"
        style={{ marginTop: "auto" }}
      >
        <Image
          src="/Profile.png"
          width={80}
          height={50}
          alt="Profile pic"
          className="object-cover w-12 h-12 rounded-full"
        />
        <div className="flex flex-col space-y-1">
          <h2 className="font-medium">Yatharth Verma</h2>
          <p className="text-xs text-gray-600">yatharthverma070@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AppNavigation;
