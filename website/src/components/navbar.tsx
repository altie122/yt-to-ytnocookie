import Link from "next/link";
import { Convert_bar } from "./client/convert-nav";

export function Header() {
  return (
    <div className="bg-secondary text-secondary-foreground flex p-1">
      <div className="flex-1 place-content-center px-2">
        <Link className="btn btn-ghost text-xl" href="/">
          YT To YT No Cookie
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Convert_bar id="navbar-top" />
      </div>
    </div>
  );
}
