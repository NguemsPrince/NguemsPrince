import Image from 'next/image';

interface TestimonialProps {
  id: string;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <div className="bg-gradient-to-r from-teal-400 to-cyan-400 w-full h-full flex items-center justify-center text-white text-xl font-bold">
            {name.charAt(0)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-white/80 text-sm">{title}</p>
        </div>
      </div>
      <blockquote className="text-white/90 italic">"{quote}"</blockquote>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      id: "testimonial-1",
      quote: "Grâce à Expérience Tech, j'ai pu partager mon expertise en développement web et atteindre des apprenants du monde entier. La plateforme est incroyablement facile à utiliser.",
      name: "Thomas Dubois",
      title: "Développeur Full Stack & Formateur",
      image: ""
    },
    {
      id: "testimonial-2",
      quote: "J'ai créé ma formation sur la cybersécurité en quelques jours seulement. Les outils d'analyse me permettent d'améliorer constamment mon contenu pour mes étudiants.",
      name: "Marie Laurent",
      title: "Experte en Cybersécurité",
      image: ""
    },
    {
      id: "testimonial-3",
      quote: "La communauté de formateurs est incroyablement accueillante. J'ai reçu beaucoup de soutien pour lancer ma formation sur l'intelligence artificielle et mon audience grandit chaque jour.",
      name: "Karim Benali",
      title: "Ingénieur en IA",
      image: ""
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Ce que disent nos formateurs
        </h2>
        <p className="text-white/90 text-center max-w-2xl mx-auto mb-12">
          Découvrez comment des experts en informatique partagent leurs connaissances
          et développent leur activité grâce à notre plateforme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
