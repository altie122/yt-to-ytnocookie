import Link from "next/link";
import { siGithub } from "simple-icons";

export function Footer() {
  return (
    <footer className="bg-accent/50 text-secondary-foreground flex w-full flex-row justify-between px-10 py-4">
      <nav className="w-full">
        <h6 className="text-md font-black">Site</h6>
        <ul className="list-disc list-inside">
          <li>
            <Link className="prose-a" href="/license">
              This site is OSS under the MIT license
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="prose-a">Privacy</Link>
          </li>
        </ul>
      </nav>
      <div className="border-border flex w-full flex-col items-center justify-center gap-4 border-x-2 px-2">
        <p>Copyright © 2024–present | Altie122 Studios, LLC</p>
        <p>YT-TO-YTNOCOOKIE is FOSS made by Altie122 Studios, LLC</p>
        <p>&quot;YouTube&quot; is a registered trademark of Google LLC.</p>
        <p>
          Altie122 Studios, LLC is not affiliated with, endorsed by, or sponsored by Google LLC.
        </p>
      </div>
      <nav className="flex w-full flex-row items-end justify-end">
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/altie122/yt-to-ytnocookie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d={siGithub.path} />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}
