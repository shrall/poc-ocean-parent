import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const randomNumber = Math.floor(Math.random() * 1000000000);

  if (request.cookies.get('token')) {
    return response;
  }
  response.cookies.set({
    name: 'token',
    value: `${randomNumber}-cookies`,
    httpOnly: true,
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon|images).*)'],
};
