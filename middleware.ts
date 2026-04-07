import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // Basic protection for admin routes: ensure a supabase auth cookie exists
  // For production, validate JWT properly (use supabaseAdmin.auth.api.getUserByCookie or verify JWT on server)
  if (url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/api/admin')) {
    const token = req.cookies.get('sb-access-token')?.value || req.cookies.get('next-auth.session-token')?.value;
    if (!token) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/admin/:path*']
};
