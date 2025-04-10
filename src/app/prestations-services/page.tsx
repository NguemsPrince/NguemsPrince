import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrestationsServicePage() {
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Essentiel',
      price: '49',
      description: 'Parfait pour les débutants et les petites formations',
      features: [
        "Jusqu'à 5 formations",
        'Stockage 5 Go',
        'Messagerie basique',
        'Support par email',
        'Paiements sécurisés'
      ]
    },
    {
      id: 'pro',
      name: 'Professionnel',
      price: '99',
      description: 'Idéal pour les formateurs réguliers',
      features: [
        "Jusqu'à 20 formations",
        'Stockage 20 Go',
        'Messagerie avancée',
        'Support prioritaire',
        'Analyse des performances',
        'Certificats personnalisés',
        'Domaine personnalisé'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Entreprise',
      price: '249',
      description: 'Solution complète pour les organisations',
      features: [
        'Formations illimitées',
        'Stockage 100 Go',
        'Messagerie illimitée',
        'Support dédié 24/7',
        'Analyses avancées',
        'Personnalisation complète',
        "API d'intégration",
        'Formation des administrateurs'
      ]
    }
  ];

  const services = [
    {
      id: 'consulting',
      title: 'Conseil en formation',
      description: 'Nos experts vous accompagnent dans la conception de vos formations en ligne.',
      price: 'À partir de 200€/heure'
    },
    {
      id: 'custom-dev',
      title: 'Développement sur mesure',
      description: 'Création de modules spécifiques et personnalisation de votre plateforme.',
      price: 'Sur devis'
    },
    {
      id: 'migration',
      title: 'Migration de contenu',
      description: 'Nous transférons vos formations existantes sur notre plateforme.',
      price: 'À partir de 500€'
    },
    {
      id: 'marketing',
      title: 'Marketing digital',
      description: "Promotion de vos formations et acquisition d'apprenants qualifiés.",
      price: 'À partir de 300€/mois'
    },
    {
      id: 'training',
      title: 'Formation des formateurs',
      description: 'Apprenez à tirer le meilleur parti de notre plateforme.',
      price: '400€/session'
    },
    {
      id: 'content',
      title: 'Production de contenu',
      description: 'Création de vidéos, animations et supports pédagogiques de qualité.',
      price: 'Sur devis'
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Section Tarifs */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Tarifs et Forfaits
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Choisissez le forfait adapté à vos besoins. Tous nos plans incluent l'accès à notre plateforme
          intuitive et un support client de qualité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-6 shadow-sm ${
                plan.popular ? 'border-teal-500 relative' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                  Populaire
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}€</span>
                <span className="text-gray-600 ml-2">/mois</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={`${plan.id}-feature-${idx}`} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-teal-500 hover:bg-teal-600'
                    : 'bg-gray-800 hover:bg-gray-900'
                }`}
              >
                Choisir ce forfait
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Section Services Complémentaires */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Services Complémentaires
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            En plus de notre plateforme, nous proposons des services professionnels pour vous aider à réussir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-teal-600">{service.price}</span>
                  <Button variant="outline" className="flex items-center text-teal-600 border-teal-600">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Demande Personnalisée */}
      <section className="py-16 px-6 bg-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'une solution sur mesure ?</h2>
          <p className="mb-8 opacity-90">
            Nos experts sont à votre disposition pour élaborer une offre adaptée à vos besoins spécifiques.
            Contactez-nous pour discuter de votre projet.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100">
            Demander un devis personnalisé
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
