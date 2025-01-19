'use client';

import ThemeToggle from '@/components/theme/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-primary">Welcome to Club Duelz</h1>
        <p className="text-lg text-foreground">
          Get started by logging in or signing up
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/auth">Login / Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}