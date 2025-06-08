import ToolList from '@/components/ToolList';

export default function ToolsPage() {
  return (
    <main className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-balance">
        Tool Storage Rack
      </h1>
      <ToolList />
    </main>
  );
}
