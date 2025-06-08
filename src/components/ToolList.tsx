'use client';

import toolsData from '@/data/tools.json';
import { JSX, useEffect, useState } from 'react';
import { ToolCard } from './ToolCard';
import { Code2, Wrench, Image } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  image: <Image className="w-5 h-5" />,
  code2: <Code2 className="w-5 h-5" />,
  wrench: <Wrench className="w-5 h-5" />,
};

interface Tool {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ToolList() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const sortedTools = [...toolsData].sort((a, b) => {
    const aFav = favorites.includes(a.id);
    const bFav = favorites.includes(b.id);
    return Number(bFav) - Number(aFav);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {sortedTools.map((tool) => (
        <ToolCard
          key={tool.id}
          id={tool.id}
          title={tool.title}
          description={tool.description}
          href={tool.href}
          icon={iconMap[tool.icon]}
          isFavorite={favorites.includes(tool.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
