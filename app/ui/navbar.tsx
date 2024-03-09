import { Convert_bar } from "./convert";

export function Header(){
  
  return(
    <div className="navbar bg-slate-800 text-slate-400">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">YT To YT No Cookie</a>
      </div>
      <div className="flex-none gap-2">
        <Convert_bar />
      </div>
    </div>
  );
}