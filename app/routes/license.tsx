import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "License - YT To YT No Cookie" },
    { name: "description", content: "Simple little app that takes a YouTube URL (Share and Embed URL's are also supported) and turns it into a YouTube nocookie URL" },
  ];
};

export default function Index() {
  return (
    <div className=" container mx-auto">
      <h1>This site is OSS under the MIT license</h1>
      <p>
        Copyright (c) 2024 Altie122
        <br /><br />
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        <br /><br />
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        <br /><br />
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
      <p>You can find the github repo <a href="https://github.com/altie122/yt-to-ytnocookie">here</a></p>
    </ div>
  );
}
