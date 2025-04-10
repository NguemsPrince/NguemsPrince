"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Clock, Star, Filter, ChevronDown, Play } from 'lucide-react';
import Image from 'next/image';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    title: string;
  };
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  rating: number;
  imageUrl: string;
  lessons: number;
}

const OnlineTraining = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Données d'exemple pour la démonstration
  const demoCourses: Course[] = [
    {
      id: 'course1',
      title: 'Développement Web Frontend avec React',
      description: 'Maîtrisez React.js et créez des interfaces modernes et réactives pour vos applications web.',
      instructor: {
        name: 'Thomas Dubois',
        title: 'Développeur Full Stack & Formateur'
      },
      category: 'Développement Web',
      level: 'Intermédiaire',
      duration: '24h',
      rating: 4.8,
      imageUrl: '/images/programmer-with-headphones.jpg',
      lessons: 36
    },
    {
      id: 'course2',
      title: 'Introduction à la Cybersécurité',
      description: 'Apprenez les bases de la sécurité informatique et protégez vos systèmes contre les menaces courantes.',
      instructor: {
        name: 'Marie Laurent',
        title: 'Experte en Cybersécurité'
      },
      category: 'Cybersécurité',
      level: 'Débutant',
      duration: '18h',
      rating: 4.6,
      imageUrl: '/images/programmer-with-headphones.jpg',
      lessons: 28
    },
    {
      id: 'course3',
      title: 'Intelligence Artificielle: Concepts et Applications',
      description: 'Découvrez les principes fondamentaux de l\'IA et apprenez à développer des applications intelligentes.',
      instructor: {
        name: 'Karim Benali',
        title: 'Ingénieur en IA'
      },
      category: 'Intelligence Artificielle',
      level: 'Intermédiaire',
      duration: '30h',
      rating: 4.9,
      imageUrl: '/images/programmer-with-headphones.jpg',
      lessons: 42
    },
    {
      id: 'course4',
      title: 'Développement Backend avec Node.js',
      description: 'Créez des API robustes et évolutives avec Node.js et Express.',
      instructor: {
        name: 'Thomas Dubois',
        title: 'Développeur Full Stack & Formateur'
      },
      category: 'Développement Web',
      level: 'Intermédiaire',
      duration: '22h',
      rating: 4.7,
      imageUrl: '/images/programmer-with-headphones.jpg',
      lessons: 32
    },
    {
      id: 'course5',
      title: 'Sécurité des Applications Web',
      description: 'Protégez vos applications web contre les vulnérabilités les plus courantes comme OWASP Top 10.',
      instructor: {
        name: 'Marie Laurent',
        title: 'Experte en Cybersécurité'
      },
      category: 'Cybersécurité',
      level: 'Avancé',
      duration: '26h',
      rating: 4.9,
      imageUrl: '/images/programmer-with-headphones.jpg',
      lessons: 38
    },
    {
      id: 'course6',
      title: 'Apprentissage Automatique avec Python',
      description: 'Implémentez des algorithmes d\'apprentissage automatique pour résoudre des problèmes concrets.',
      instructor: {
        name: 'Karim Benali',
        title: 'Ingénieur en IA'
      },
      category: 'Intelligence Artificielle',
      level: 'Avancé',
      duration: '32h',
      rating: 4.8,
      imageUrl: '/images/programmer-with-headphones.jpg',
      lessons: 45
    }
  ];

  const categories = Array.from(new Set(demoCourses.map(course => course.category)));
  const levels = ['Débutant', 'Intermédiaire', 'Avancé'];

  const filteredCourses = demoCourses.filter(course => {
    // Filtre par recherche
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Filtre par catégorie
    const matchesCategory = !selectedCategory || course.category === selectedCategory;

    // Filtre par niveau
    const matchesLevel = !selectedLevel || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Formations en Ligne</h2>
      <p className="text-gray-600 mb-8">Développez vos compétences en informatique avec nos formations de qualité</p>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Rechercher des formations..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
              value={selectedLevel || ''}
              onChange={(e) => setSelectedLevel(e.target.value || null)}
            >
              <option value="">Tous les niveaux</option>
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
        </div>
      </div>

      {/* Affichage des cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={course.imageUrl}
                alt={course.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 text-sm font-medium">
                {course.category}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>

              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                  {course.instructor.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{course.instructor.name}</p>
                  <p className="text-gray-500 text-xs">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span className="flex items-center">
                  <BookOpen size={16} className="mr-1" /> {course.lessons} leçons
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" /> {course.duration}
                </span>
                <span className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-500" /> {course.rating}
                </span>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">
                  {course.level}
                </span>
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Play size={16} className="mr-2" /> Commencer
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">Aucune formation trouvée</h3>
          <p className="text-gray-500">Essayez de modifier vos critères de recherche.</p>
        </div>
      )}
    </div>
  );
};

export default OnlineTraining;
