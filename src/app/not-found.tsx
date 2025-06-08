import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-destructive">404</h1>
      <p className="text-xl mt-4 text-muted-foreground">Page not found</p>
      <p className="mt-2">ขออภัย ไม่พบหน้าที่คุณค้นหา</p>
      <Button asChild className="mt-6">
        <Link href="/">กลับหน้าแรก</Link>
      </Button>
    </div>
  );
}
