import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A spam crawler requests the homepage with junk `?u=<digits>` query strings.
// The homepage's canonical tag already dedupes them for Google, but stripping
// the param with a 308 keeps them out of Search Console's "alternative page
// with proper canonical" report entirely.
//
// This lives in proxy (not a next.config redirect) because a next.config
// redirect re-appends the matched query param to its destination, which loops.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.searchParams.delete("u");
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Only run for `/` when a `u` query param is present, so normal requests
  // never touch this code path.
  matcher: [{ source: "/", has: [{ type: "query", key: "u" }] }],
};
