'use client';

import { Swords, Trophy, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from "react";

const BottomNav: React.FC = () => {

  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex justify-around items-center h-16">
        <Link href="/my-duelz" className={`flex flex-col items-center justify-center w-full h-full ${pathname === '/my-duelz' ? 'text-primary' : 'text-muted-foreground'}`}>
          <Swords size={24} />
          <span className="text-xs mt-1">My duelz</span>
        </Link>
        <Link href="/my-match" className={`flex flex-col items-center justify-center w-full h-full ${pathname === '/my-match' ? 'text-primary' : 'text-muted-foreground'}`}>
        <Trophy size={24}/>
          <span className="text-xs mt-1">My Match</span>
        </Link>
        <Link href="/profile" className={`flex flex-col items-center justify-center w-full h-full ${pathname === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}>
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  )
}

export default BottomNav;