'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from './ui/button';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  const handleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleTheme}>
      {theme === 'dark' ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
