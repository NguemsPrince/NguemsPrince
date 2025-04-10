import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AProposPage() {
  const teamMembers = [
    {
      id: 'member1',
      name: 'Thomas Dubois',
      role: 'CEO & Fondateur',
      bio: "Expert en développement web avec plus de 15 ans d'expérience. Passionné par la formation et la transmission des connaissances.",
      image: '/images/programmer-with-headphones.jpg'
    },
    {
      id: 'member2',
      name: 'Marie Laurent',
      role: 'Directrice de la Formation',
      bio: "Spécialiste en cybersécurité et formatrice reconnue. Elle supervise tous les programmes pédagogiques d'Expérience Tech.",
      image: '/images/programmer-with-headphones.jpg'
    },
    {
      id: 'member3',
      name: 'Karim Benali',
      role: 'Responsable R&D',
      bio: "Ingénieur en IA et passionné d'innovation. Il développe les nouvelles fonctionnalités de notre plateforme et nos modules de formation avancés.",
      image: '/images/programmer-with-headphones.jpg'
    },
    {
      id: 'member4',
      name: 'Sophie Martin',
      role: 'Responsable Marketing',
      bio: "Experte en marketing digital avec une solide expérience dans le secteur de la formation. Elle veille à la visibilité de nos formateurs.",
      image: '/images/programmer-with-headphones.jpg'
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero section */}
      <section className="bg-teal-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos d'Expérience Tech SARL</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Centre de formation innovant dédié au partage des connaissances et à l'excellence
            dans le domaine de l'informatique et des technologies numériques.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Expérience Tech a été fondée en 2018 par Thomas Dubois, développeur passionné souhaitant
                révolutionner l'apprentissage des technologies. Frustré par les formations traditionnelles
                souvent trop théoriques et déconnectées des réalités du terrain, il a imaginé une plateforme
                où des experts pourraient partager directement leur savoir-faire.
              </p>
              <p className="text-gray-600 mb-4">
                En 2020, l'entreprise a connu une croissance significative avec l'arrivée de Marie Laurent
                et son expertise en cybersécurité. Cette expansion a permis de diversifier l'offre de formation
                et d'atteindre un public plus large.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, Expérience Tech compte plus de 50 formateurs experts et a accompagné plus de
                5000 apprenants dans leur développement professionnel. Notre communauté continue de grandir,
                portée par des valeurs d'excellence, de partage et d'innovation.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 w-full">
              <Image
                src="/images/programmer-with-headphones.jpg"
                alt="Histoire d'Expérience Tech"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Faciliter l'accès à une formation informatique de qualité, dispensée par des experts de terrain,
            permettant à chacun de développer ses compétences techniques et de s'épanouir professionnellement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous intégrons constamment les dernières technologies et méthodes pédagogiques pour proposer
                des formations à la pointe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Communauté</h3>
              <p className="text-gray-600">
                Nous favorisons les échanges entre apprenants et formateurs pour créer un écosystème
                d'entraide et de progression collective.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Nous sélectionnons rigoureusement nos formateurs et veillons à la qualité de chaque
                contenu pédagogique proposé sur notre plateforme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Notre Équipe</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Découvrez les experts passionnés qui font d'Expérience Tech un centre de formation
            d'excellence dans le domaine des technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>

                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="text-gray-500 hover:text-teal-600">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-teal-600">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-teal-600">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contactez-nous</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Vous avez des questions sur nos services ou souhaitez collaborer avec nous ?
            N'hésitez pas à nous contacter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Informations de contact</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Adresse</p>
                      <p className="text-gray-600">
                        123 Avenue de la Tech, 75001 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">
                        contact@experiencetech.fr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Téléphone</p>
                      <p className="text-gray-600">
                        +33 1 23 45 67 89
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-800 mb-2">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-teal-600">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-teal-600">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-teal-600">
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Envoyez-nous un message</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <Button className="w-full bg-teal-500 hover:bg-teal-600">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
