"use client";

import dynamic from "next/dynamic";

// This safely tells Next.js to only load the navbar on the browser side
const DynamicNavbar = dynamic(() => import("@/components/navbar"), { 
  ssr: false 
});

export default function ClientNavbar() {
  return <DynamicNavbar />;
}