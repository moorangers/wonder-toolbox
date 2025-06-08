'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { ThemeToggle } from '../ThemeToggle';

export function TopMenu() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      {/* Logo */}
      <div className="text-lg font-semibold">
        <Link href="/">Wonder Toolbox</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        <Link href="/tools">
          <Button variant="ghost">Tools</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-4 mt-6">
              <Link href="/tools">
                <Button variant="ghost" className="w-full justify-start">
                  Tools
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="w-full justify-start">
                  About
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="w-full justify-start">
                  Contact
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
