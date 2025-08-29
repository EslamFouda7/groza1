"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#052A45]">
        <Image
          src="/assets/imgs/favicon.png"
          alt="Loading..."
          width={160}
          height={160}
          className="animate-pulse"
        />
      </div>
    );
  }

   return <>{children}</>;
}
