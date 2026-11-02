import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "DEV.SOLO | Portfolio",
  description:
    "Independent full-stack engineer building high-performance SaaS products.",
};

export default function Home() {
  return <HomeClient />;
}
