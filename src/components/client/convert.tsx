"use client";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { IsYT, GetID } from "@/lib/yt";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { MousePointer2Icon, PointerIcon } from "lucide-react";

export function Convert_bar() {
  const [url, setUrl] = useState("");
  const convert = () => {
    const yt = IsYT(url);
    if (yt == true) {
      const video_ID = GetID(url);
      console.log(video_ID);
      if (video_ID == null) {
        console.error("The given YouTube URL or ID is not valid!");
        toast.error(
          "The given YouTube URL or ID is not valid! Please enter a valid YouTube URL or ID.",
        );
      } else {
        redirect("/video/" + video_ID);
      }
    } else {
      toast.error(
        "The given YouTube URL or ID is not valid! Please enter a valid YouTube URL or ID.",
      );
    }
  };
  return (
    <form
      className="flex w-full flex-row justify-between gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
    >
      <InputGroup>
        <InputGroupInput
          placeholder="URL/ID"
          onChange={(e) => setUrl(e.target.value)}
        />
        <InputGroupAddon align={"inline-end"}>
          <InputGroupButton
            type="submit"
            variant={"outline"}
            className="group inline-flex justify-between gap-2 transition-all duration-500 ease-in-out"
          >
            convert <MousePointer2Icon className="group-hover:hidden" />{" "}
            <PointerIcon className="hidden group-hover:block" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
