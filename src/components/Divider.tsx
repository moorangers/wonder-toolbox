export default function Divider({ className = '' }: { className?: string }) {
  return <div className={`border-t my-4 ${className}`} />;
}
