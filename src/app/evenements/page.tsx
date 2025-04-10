import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, Users, Tag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function EvenementsPage() {
  // Données d'exemple pour la démonstration
  const events = [
    {
      id: 'event1',
      title: 'Conférence sur les tendances en développement web 2024',
      date: '15 avril 2024',
      time: '14:00 - 18:00',
      location: 'Centre de Conférences Expérience Tech, Paris',
      description: "Rejoignez-nous pour une après-midi de discussions et présentations sur les dernières tendances en développement web. Au programme : JavaScript moderne, architectures front-end, performances et sécurité web.",
      image: '/images/programmer-with-headphones.jpg',
      category: 'Développement Web',
      speakers: ['Thomas Dubois', 'Marie Laurent'],
      participants: 120,
      registrationOpen: true
    },
    {
      id: 'event2',
      title: 'Workshop : Introduction à la cybersécurité',
      date: '22 avril 2024',
      time: '09:30 - 17:00',
      location: 'Laboratoire Expérience Tech, Lyon',
      description: "Un atelier pratique pour apprendre les bases de la cybersécurité. Vous découvrirez comment identifier les vulnérabilités et mettre en place des mesures de protection efficaces.",
      image: '/images/programmer-with-headphones.jpg',
      category: 'Cybersécurité',
      speakers: ['Marie Laurent'],
      participants: 30,
      registrationOpen: true
    },
    {
      id: 'event3',
      title: 'Hackathon IA & Data Science',
      date: '10-12 mai 2024',
      time: '48 heures non-stop',
      location: 'Campus Expérience Tech, Bordeaux',
      description: "Un weekend entier dédié à l'innovation en intelligence artificielle et data science. Formez une équipe et relevez les défis proposés par nos partenaires industriels.",
      image: '/images/programmer-with-headphones.jpg',
      category: 'Intelligence Artificielle',
      speakers: ['Karim Benali', 'Sophie Martin', 'Lucas Dubois'],
      participants: 200,
      registrationOpen: true
    },
    {
      id: 'event4',
      title: 'Webinaire : L\'avenir des métiers tech',
      date: '5 juin 2024',
      time: '18:30 - 20:00',
      location: 'En ligne',
      description: "Discussion avec des experts du recrutement tech sur l'évolution des compétences recherchées et comment se préparer aux métiers de demain.",
      image: '/images/programmer-with-headphones.jpg',
      category: 'Carrière',
      speakers: ['Emma Bernard', 'Alexandre Moreau'],
      participants: 500,
      registrationOpen: true
    },
    {
      id: 'event5',
      title: 'Séminaire DevOps & Cloud Computing',
      date: '20 juin 2024',
      time: '09:00 - 18:00',
      location: 'Centre de Conférences Expérience Tech, Lille',
      description: "Une journée complète dédiée aux bonnes pratiques DevOps et solutions cloud. Démonstrations pratiques et études de cas par des professionnels du secteur.",
      image: '/images/programmer-with-headphones.jpg',
      category: 'DevOps',
      speakers: ['Julien Lefort', 'Amina Chakir'],
      participants: 80,
      registrationOpen: false
    }
  ];

  const upcomingEvents = [...events].sort((a, b) => {
    // Tri par date (simple pour la démo)
    return a.date.localeCompare(b.date);
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero section */}
      <section className="bg-teal-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Événements & Rencontres</h1>
          <p className="text-xl opacity-90 mb-8">
            Participez à nos événements exclusifs pour développer vos compétences,
            réseauter avec d'autres professionnels et rester à jour dans le domaine de l'informatique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              Voir tous les événements
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-teal-700">
              Proposer un événement
            </Button>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto bg-white p-4 rounded-lg shadow-sm flex flex-wrap gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-teal-500">
                <option value="">Toutes les catégories</option>
                <option value="web">Développement Web</option>
                <option value="cyber">Cybersécurité</option>
                <option value="ai">Intelligence Artificielle</option>
                <option value="career">Carrière</option>
                <option value="devops">DevOps</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-teal-500">
                <option value="">Toutes les localisations</option>
                <option value="paris">Paris</option>
                <option value="lyon">Lyon</option>
                <option value="bordeaux">Bordeaux</option>
                <option value="lille">Lille</option>
                <option value="online">En ligne</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des événements */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-semibold">
                  {event.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-700">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-sm">{event.participants} participants</span>
                  </div>
                  <div className="text-sm font-medium">
                    {event.registrationOpen ? (
                      <span className="text-teal-600">Inscriptions ouvertes</span>
                    ) : (
                      <span className="text-gray-500">Complet</span>
                    )}
                  </div>
                </div>

                <Button className={`w-full ${
                  event.registrationOpen
                    ? 'bg-teal-500 hover:bg-teal-600'
                    : 'bg-gray-300 cursor-not-allowed'
                }`} disabled={!event.registrationOpen}>
                  {event.registrationOpen ? "S'inscrire" : "Complet"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ne manquez aucun événement</h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour être informé en priorité des nouveaux événements
            et recevoir des invitations exclusives.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-2 border border-gray-300 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Button className="bg-teal-500 hover:bg-teal-600">
              S'inscrire
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
