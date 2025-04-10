import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-20">
      {/* Texte et formulaire */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Créez et vendez de superbes formations en informatique
        </h1>

        <p className="text-xl text-white/90 mb-8">
          Vos compétences et expériences en informatique sont uniques et précieuses.
          Créez facilement un site de formation attrayant, partagez vos connaissances
          et soyez récompensé pour cela.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Input
            type="email"
            placeholder="Adresse e-mail"
            className="bg-white/90 text-gray-800 w-full sm:w-2/3"
          />
          <Button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-6">
            Commencer
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-md h-80 md:h-96">
          <Image
            src="/images/programmer-with-headphones.jpg"
            alt="Développeur avec un casque audio"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
