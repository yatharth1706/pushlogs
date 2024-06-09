import type { Metadata } from "next";
import AppNavigation from "../../../components/AppNavigation";

export const metadata: Metadata = {
  title: "Pushlogs Dashboard",
  description: "Dashboard page for pushlogs user",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex w-full h-screen">
      <AppNavigation />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
