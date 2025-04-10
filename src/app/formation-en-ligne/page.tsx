import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OnlineTraining from '@/components/OnlineTraining';

export default function FormationEnLignePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16">
        <OnlineTraining />
      </div>
      <Footer />
    </main>
  );
}
