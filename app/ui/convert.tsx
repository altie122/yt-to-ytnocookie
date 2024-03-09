import { useEffect } from "react";
import { IsYT, GetID } from "~/lib/yt";

export function Convert_bar(){
  useEffect(() => {
    const convert_input: HTMLInputElement | null = document.getElementById("convert") as HTMLInputElement;
    const convert_btn: HTMLElement | HTMLButtonElement = document.getElementById("convert-btn")!;

    convert_btn.addEventListener('click', () => {
      const input = convert_input.value;
      const yt = IsYT(input);
      if (yt == true) {
        const video_ID = GetID(input)
        console.log(video_ID)
        if (video_ID == null){
          console.error("The given YouTube link is not valid!")
        }
        else{
          window.location.href = "/"+video_ID
        }
      }
    });

    convert_input.addEventListener("keypress", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        convert_btn.click();
      }
    });
  });
  return(
    <div className="join">
      <div className="form-control">
        <input type="text" placeholder="YT URL" className="input input-bordered w-24 md:w-auto join-item bg-slate-900 text-slate-400" id="convert"/>
      </div>
      <div>
        <button className="btn join-item rounded-r-full text-slate-800 bg-slate-400" id="convert-btn">convert</button>
      </div>
    </div>
  )
}