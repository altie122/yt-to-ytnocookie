"use client";

import Link from "next/link";
import { Convert_bar } from "./client/convert";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Header() {
  const { scrollY } = useScroll();
  const [scrollYValue, setScrollYValue] = useState(0);

  scrollY.on("change", (scrollY) => {
    setScrollYValue(scrollY * 100);
  });
  return (
    <header
      className={cn(
        "fixed top-0 z-10 h-12 w-full backdrop-blur-3xl transition-all duration-500 ease-in-out",
        scrollYValue >= 1000 && "bg-accent/20 shadow-2xl",
      )}
    >
      <div className="flex h-full flex-row items-center justify-between p-2">
        <div className="flex h-full flex-1 basis-1/2 flex-row items-center justify-start">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://studios.altie122.xyz"
                className="flex h-10 w-auto items-center text-2xl"
                aria-label="Altie122 Studios"
              >
                <img
                  src="/altie122-studios-branding/Altie122%20Studios%20Branding/clear/logo/dark.svg"
                  alt="Altie122 Studios"
                  className="h-full w-auto"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Altie122 Studios</p>
            </TooltipContent>
          </Tooltip>
          <svg height="32" viewBox="0 0 32 32" width="32">
            <path
              d="M22 5L9 28"
              stroke="var(--sidebar-ring)"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <Link aria-label="YT-to-YTNOCOOKIE" href="/">
            YT-to-YTNOCOOKIE
          </Link>
        </div>
        <div>
          <Convert_bar />
        </div>
      </div>
    </header>
  );
}
