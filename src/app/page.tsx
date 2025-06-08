import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <section className="p-4 sm:p-6 md:p-8">
        <p>This is the home page content.</p>
      </section>
    </>
  );
}
