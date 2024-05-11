import { siGithub } from 'simple-icons';

export function Footer(){
  return(
    <div>
      <footer className="bg-secondary text-secondary-foreground p-10 bg-slate-800 text-slate-400">
        <nav>
          <h6 className="footer-title">Site</h6> 
          <a className="link link-hover" href="/license">This site is OSS under the MIT license</a>
          <a className="link link-hover" href="/api">API</a>
        </nav>
        {/* <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav> TODO*/}
      </footer> 
      <footer className="bg-secondary text-secondary-foreground px-10 py-4 border-tborder-slate-400">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024<br/>Altie122<br/>&quot;YouTube&quot; is a registered trademark of Google LLC.</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/altie122/yt-to-ytnocookie"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className=' fill-current'><path d={siGithub.path} /></svg></a>
          </div>
        </nav>
      </footer>
    </div>
  );
}