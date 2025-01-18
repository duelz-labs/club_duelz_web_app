'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User } from 'lucide-react'

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex justify-around items-center h-16">
        <Link href="/home" className={`flex flex-col items-center justify-center w-full h-full ${pathname === '/home' ? 'text-primary' : 'text-muted-foreground'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/my-match" className={`flex flex-col items-center justify-center w-full h-full ${pathname === '/my-match' ? 'text-primary' : 'text-muted-foreground'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-xs mt-1">My Match</span>
        </Link>
        <Link href="/my-profile" className={`flex flex-col items-center justify-center w-full h-full ${pathname === '/my-profile' ? 'text-primary' : 'text-muted-foreground'}`}>
          <User size={24} />
          <span className="text-xs mt-1">My Profile</span>
        </Link>
      </div>
    </nav>
  )
}