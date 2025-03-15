import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const oldDomains = [
  'yt-to-ytnocookie.url122.xyz',
  'yt-to-ytnocookie.xyz',
  'www.yt-to-ytnocookie.xyz',
  'yt-to-ytnocookie.dovahkiin.xyz',
]
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const requestUrl = new URL(request.url);
  if (oldDomains.includes(requestUrl.host)) {
    return NextResponse.redirect(
      `https://yt-to-ytnocookie.altie122.xyz${requestUrl.pathname}?odd=true`,
      301
    )
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}