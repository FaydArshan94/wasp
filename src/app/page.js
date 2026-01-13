"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden">
        <Navbar />
        <Hero />

      </div>
    </>
  );
}
