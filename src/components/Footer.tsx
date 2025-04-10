import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-800 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              expérienceTech
            </Link>
            <p className="mt-4 text-white/80">
              Plateforme de formation en informatique qui permet aux experts de partager
              leurs connaissances et de monétiser leur expertise.
            </p>
          </div>

          {/* Liens */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Plateforme</h3>
            <ul className="space-y-2">
              <li><Link href="/fonctionnalites" className="text-white/80 hover:text-white">Fonctionnalités</Link></li>
              <li><Link href="/tarifs" className="text-white/80 hover:text-white">Tarifs</Link></li>
              <li><Link href="/exemples" className="text-white/80 hover:text-white">Exemples</Link></li>
              <li><Link href="/formations" className="text-white/80 hover:text-white">Explorer les formations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-white/80 hover:text-white">Blog</Link></li>
              <li><Link href="/aide" className="text-white/80 hover:text-white">Centre d'aide</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              <li><Link href="/webinaires" className="text-white/80 hover:text-white">Webinaires</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link href="/conditions" className="text-white/80 hover:text-white">Conditions d'utilisation</Link></li>
              <li><Link href="/confidentialite" className="text-white/80 hover:text-white">Politique de confidentialité</Link></li>
              <li><Link href="/cookies" className="text-white/80 hover:text-white">Politique de cookies</Link></li>
              <li><Link href="/mentions-legales" className="text-white/80 hover:text-white">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80">
            &copy; {currentYear} Expérience Tech SARL. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-white/80 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
