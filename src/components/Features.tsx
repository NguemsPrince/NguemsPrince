import {
  LaptopIcon,
  LineChartIcon,
  UsersIcon,
  ShieldCheckIcon
} from 'lucide-react';

const Feature = ({
  icon: Icon,
  title,
  description
}: {
  icon: React.ElementType,
  title: string,
  description: string
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-sm">
      <div className="p-3 bg-white/20 rounded-full mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      id: "feature-intuitive",
      icon: LaptopIcon,
      title: "Plateforme intuitive",
      description: "Créez et gérez facilement vos formations en informatique sans connaissances techniques particulières."
    },
    {
      id: "feature-analytics",
      icon: LineChartIcon,
      title: "Analyses détaillées",
      description: "Suivez les progrès de vos apprenants et l'efficacité de vos formations grâce à des statistiques avancées."
    },
    {
      id: "feature-community",
      icon: UsersIcon,
      title: "Communauté active",
      description: "Rejoignez un réseau de formateurs en informatique et partagez vos expériences et meilleures pratiques."
    },
    {
      id: "feature-payments",
      icon: ShieldCheckIcon,
      title: "Paiements sécurisés",
      description: "Monétisez vos compétences en toute sécurité avec notre système de paiement intégré et fiable."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Pourquoi choisir Expérience Tech SARL ?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
