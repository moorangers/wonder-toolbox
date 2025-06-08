export function Error503() {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold text-destructive">
        503 - Service Unavailable
      </h1>
      <p className="mt-2 text-muted-foreground">
        เซิร์ฟเวอร์กำลังปิดปรับปรุง กรุณาลองใหม่ภายหลัง
      </p>
    </div>
  );
}
