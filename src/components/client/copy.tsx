"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CopyButton({ url }: { url: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Copy</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuItem
                onClick={() => void navigator.clipboard.writeText(url)}
              >
                Embed URL
              </DropdownMenuItem>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy the embed URL to your clipboard.</p>
              <p>
                This is recommending for if you are using an iframe to embed the
                video.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuItem
                onClick={() =>
                  void navigator.clipboard.writeText(
                    `https://referer.altonrose.dev/?url=${url}`,
                  )
                }
              >
                Referer proxy URL
              </DropdownMenuItem>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy a Referer proxy URL to your clipboard.</p>
              <p>
                This is recommending for if you are linking to the video from a
                link on another website.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
