import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 w-full bg-transparent">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white mr-10">
          expérienceTech
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-white/80">
            Accueil
          </Link>
          <Link href="/prestations-services" className="text-white hover:text-white/80">
            Prestations et Services
          </Link>
          <Link href="/formation-en-ligne" className="text-white hover:text-white/80">
            Formation en ligne
          </Link>
          <Link href="/evenements" className="text-white hover:text-white/80">
            Événements
          </Link>
          <Link href="/a-propos" className="text-white hover:text-white/80">
            À propos
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/connexion" className="text-white hover:text-white/80">
          Connexion
        </Link>
        <Button className="bg-white text-blue-600 hover:bg-white/90">
          Créer une formation
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
