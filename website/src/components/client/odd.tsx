"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Odd() {
  const searchParams = useSearchParams();

  const search = searchParams.get("odd");

  if (search === "true") {
    return (
      <div className="bg-red-700 text-center text-white">
        <h1 className="text-4xl font-bold">Warning!</h1>
        <p>
          We will be completely migrating to yt-to-ytnocookie.altie122.xyz on
          6/20/2025.
        </p>
        <p>
          If you have yt-to-ytnocookie.dovahkiin.xyz, yt-to-ytnocookie.xyz, or
          yt-to-ytnocookie.url122.xyz bookmarked, please update it to
          yt-to-ytnocookie.altie122.xyz.
        </p>
      </div>
    );
  }
  return null;
}

export function OddBanner() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Odd />
    </Suspense>
  )
}