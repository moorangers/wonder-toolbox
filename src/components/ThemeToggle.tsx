'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant='ghost' size='icon' onClick={handleTheme}>
      {theme === 'dark' ? (
        <Sun className='size-5' />
      ) : (
        <Moon className='size-5' />
      )}
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  );
}
