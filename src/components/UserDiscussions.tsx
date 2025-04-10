"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessagesSquare, Send, User, Clock, Search } from 'lucide-react';

interface Message {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: Date;
}

interface Thread {
  id: string;
  title: string;
  lastActivityTimestamp: Date;
  participantCount: number;
  messages: Message[];
  category: string;
}

const UserDiscussions = () => {
  const [activeThread, setActiveThread] = useState<Thread | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Données d'exemple pour la démonstration
  const demoThreads: Thread[] = [
    {
      id: 'thread1',
      title: 'Astuces pour optimiser vos sites web',
      lastActivityTimestamp: new Date(2023, 2, 15, 14, 30),
      participantCount: 8,
      category: 'Développement Web',
      messages: [
        {
          id: 'msg1',
          userId: 'user1',
          userName: 'Thomas Dubois',
          text: 'Bonjour à tous ! Je souhaitais partager quelques astuces pour améliorer la performance de vos sites web. Quelles sont vos techniques préférées ?',
          timestamp: new Date(2023, 2, 14, 9, 0)
        },
        {
          id: 'msg2',
          userId: 'user2',
          userName: 'Marie Laurent',
          text: 'J\'utilise souvent la compression d\'images et la mise en cache. Cela fait une grande différence sur mes projets !',
          timestamp: new Date(2023, 2, 14, 10, 15)
        },
        {
          id: 'msg3',
          userId: 'user3',
          userName: 'Karim Benali',
          text: 'La lazy loading des images est aussi très efficace, surtout pour les sites riches en contenu visuel.',
          timestamp: new Date(2023, 2, 15, 14, 30)
        }
      ]
    },
    {
      id: 'thread2',
      title: 'Questions sur la formation en cybersécurité',
      lastActivityTimestamp: new Date(2023, 2, 16, 11, 45),
      participantCount: 5,
      category: 'Cybersécurité',
      messages: [
        {
          id: 'msg4',
          userId: 'user4',
          userName: 'Sophie Martin',
          text: 'Je viens de m\'inscrire à la formation en cybersécurité. Est-ce que quelqu\'un pourrait me dire par où commencer ?',
          timestamp: new Date(2023, 2, 16, 9, 30)
        },
        {
          id: 'msg5',
          userId: 'user2',
          userName: 'Marie Laurent',
          text: 'Je te conseille de commencer par les modules sur les bases de la sécurité réseau, puis de passer aux techniques de protection des données.',
          timestamp: new Date(2023, 2, 16, 11, 45)
        }
      ]
    },
    {
      id: 'thread3',
      title: 'Nouvelles tendances en IA pour 2023',
      lastActivityTimestamp: new Date(2023, 2, 17, 16, 20),
      participantCount: 12,
      category: 'Intelligence Artificielle',
      messages: [
        {
          id: 'msg6',
          userId: 'user3',
          userName: 'Karim Benali',
          text: 'Quelles sont selon vous les technologies d\'IA les plus prometteuses pour 2023 ?',
          timestamp: new Date(2023, 2, 17, 13, 0)
        },
        {
          id: 'msg7',
          userId: 'user5',
          userName: 'Lucas Dubois',
          text: 'Sans hésiter, les modèles de langage comme GPT et les systèmes de vision par ordinateur continuent d\'évoluer à une vitesse impressionnante.',
          timestamp: new Date(2023, 2, 17, 14, 30)
        },
        {
          id: 'msg8',
          userId: 'user6',
          userName: 'Léa Moreau',
          text: 'Je trouve aussi que les applications d\'IA en médecine font des progrès remarquables, surtout dans le diagnostic précoce.',
          timestamp: new Date(2023, 2, 17, 16, 20)
        }
      ]
    }
  ];

  const filteredThreads = demoThreads.filter(thread =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageInput.trim() || !activeThread) return;

    // Dans une application réelle, ceci enverrait le message au backend
    console.log(`Sending message in thread ${activeThread.id}: ${messageInput}`);

    // Simulation d'ajout de message
    const newMessage: Message = {
      id: `new-msg-${Date.now()}`,
      userId: 'currentUser', // Normalement, l'ID de l'utilisateur connecté
      userName: 'Vous',
      text: messageInput,
      timestamp: new Date()
    };

    setActiveThread({
      ...activeThread,
      messages: [...activeThread.messages, newMessage],
      lastActivityTimestamp: new Date()
    });

    setMessageInput('');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <MessagesSquare className="mr-2" /> Espace de discussion
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Liste des discussions */}
        <div className="w-full md:w-1/3 border-r border-gray-200 pr-4">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Rechercher une discussion..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {filteredThreads.map(thread => (
              <div
                key={thread.id}
                onClick={() => setActiveThread(thread)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  activeThread?.id === thread.id
                    ? 'bg-teal-100 border-l-4 border-teal-500'
                    : 'bg-gray-50 hover:bg-teal-50'
                }`}
              >
                <h3 className="font-medium text-gray-800">{thread.title}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  <span className="inline-flex items-center mr-3">
                    <User size={14} className="mr-1" /> {thread.participantCount} participants
                  </span>
                  <span className="inline-flex items-center">
                    <Clock size={14} className="mr-1" /> {formatDate(thread.lastActivityTimestamp)}
                  </span>
                </div>
                <div className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full inline-block mt-2">
                  {thread.category}
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-teal-500 hover:bg-teal-600">
            Démarrer une nouvelle discussion
          </Button>
        </div>

        {/* Détails de la discussion */}
        <div className="w-full md:w-2/3">
          {activeThread ? (
            <>
              <div className="border-b border-gray-200 pb-3 mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{activeThread.title}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  <span className="bg-teal-500 text-white px-2 py-0.5 rounded-full inline-block mr-2">
                    {activeThread.category}
                  </span>
                  <span>{activeThread.participantCount} participants · Dernière activité: {formatDate(activeThread.lastActivityTimestamp)}</span>
                </div>
              </div>

              <div className="h-[350px] overflow-y-auto mb-4 space-y-4 p-2">
                {activeThread.messages.map(message => (
                  <div
                    key={message.id}
                    className={`rounded-lg p-3 ${
                      message.userId === 'currentUser'
                        ? 'bg-teal-100 ml-auto max-w-[80%]'
                        : 'bg-gray-100 max-w-[80%]'
                    }`}
                  >
                    <div className="font-medium text-gray-800">{message.userName}</div>
                    <div className="text-gray-700">{message.text}</div>
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      {formatDate(message.timestamp)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <Input
                  placeholder="Écrivez votre message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-teal-500 hover:bg-teal-600">
                  <Send size={18} className="mr-2" /> Envoyer
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500">
              <MessagesSquare size={48} className="mb-4 text-gray-300" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">Aucune discussion sélectionnée</h3>
              <p>Sélectionnez une discussion pour consulter les messages ou créez-en une nouvelle.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDiscussions;
