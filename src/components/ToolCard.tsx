'use client';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, StarOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ToolCardProps {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  isFavorite?: boolean;
  onToggleFavorite: (id: number) => void;
}

export function ToolCard({
  id,
  title,
  description,
  href,
  icon,
  isFavorite,
  onToggleFavorite,
}: ToolCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(href);
  };

  const handleFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation(); // ป้องกันไม่ให้ Card ถูกคลิกตาม
    onToggleFavorite(id);
  };

  return (
    <Card
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      className="transition-shadow hover:shadow-lg flex flex-col justify-between min-h-full relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <CardHeader className="flex items-start justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Unmark as favorite' : 'Mark as favorite'}
        >
          {isFavorite ? <Star className="text-yellow-400" /> : <StarOff />}
        </Button>
      </CardHeader>
    </Card>
  );
}
