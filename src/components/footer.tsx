import { siGithub } from 'simple-icons';
import { Separator } from '~/components/ui/separator';

export function Footer(){
  return(
    <div>
      <footer className="bg-accent/50 text-secondary-foreground px-10 py-4">
        <nav>
          <h6 className="">Site</h6> 
          <ul>
            <li><a className="link link-hover" href="/license">This site is OSS under the MIT license</a></li>
            <li><a className="link link-hover" href="/api">API</a></li>
          </ul>
        </nav>
        <Separator />
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2025 | Altie122<br/>&quot;YouTube&quot; is a registered trademark of Google LLC.</p>
        </aside>
        <Separator />
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/altie122/yt-to-ytnocookie"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className=' fill-current'><path d={siGithub.path} /></svg></a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
