import { siGithub } from 'simple-icons';

export function Footer(){
  return(
    <footer className="footer items-center p-4 bg-slate-800 text-slate-400">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2024 - Altie122 - <a href="/license" className=" text-red-500 no-underline hover:underline">This site is OSS under the MIT license</a></p>
      </aside> 
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/altie122/yt-to-ytnocookie"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className=' fill-slate-400'><path d={siGithub.path} /></svg></a>
      </nav>
    </footer>
  );
}