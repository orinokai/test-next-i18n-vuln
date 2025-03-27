import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    return Response.json(
      { message: 'authenticated' },
      { status: 401 }
    )
}

export const config = {
  matcher: '/test',
}
