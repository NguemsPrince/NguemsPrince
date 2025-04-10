"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MessageCircle,
  Send,
  Facebook,
  MessagesSquare,
  X,
  Phone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedQuestions = [
  { id: 'q1', text: 'Comment démarrer une formation ?' },
  { id: 'q2', text: 'Quels sont vos tarifs ?' },
  { id: 'q3', text: 'Comment contacter le support ?' },
  { id: 'q4', text: 'Quelles formations proposez-vous ?' },
];

const predefinedAnswers: Record<string, string> = {
  'q1': 'Pour démarrer une formation, inscrivez-vous sur notre plateforme, puis accédez à la section "Formation en ligne". Vous pourrez y choisir parmi nos différentes formations disponibles.',
  'q2': 'Nos tarifs varient selon les formations. Consultez notre page "Prestations et Services" pour plus de détails sur nos formules et leurs tarifs.',
  'q3': 'Vous pouvez contacter notre équipe via le chat, par WhatsApp, ou via notre page Facebook. Pour des demandes plus spécifiques, utilisez le formulaire de contact dans la section "À propos".',
  'q4': 'Nous proposons diverses formations en informatique : développement web, cybersécurité, intelligence artificielle, data science, et bien plus. Consultez notre page "Formation en ligne" pour la liste complète.',
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Afficher le chatbot après un court délai pour ne pas perturber le chargement initial
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Message d'accueil automatique
      addBotMessage('Bonjour ! Je suis l\'assistant virtuel d\'Expérience Tech. Comment puis-je vous aider aujourd\'hui ?');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Utilisation de la fonction dans un useEffect pour faire défiler vers le bas
  // lorsque les messages ou l'état minimisé changent
  useEffect(() => {
    // La dépendance aux messages est nécessaire car nous voulons défiler vers le bas
    // lorsqu'un nouveau message est ajouté
    // La dépendance à isMinimized est nécessaire pour défiler vers le bas
    // lorsque le chat est maximisé à nouveau
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isMinimized]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: `bot-${Date.now()}`,
      text,
      isUser: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    handleBotResponse(inputValue);
    setInputValue('');
  };

  const handlePredefinedQuestion = (questionId: string) => {
    const question = predefinedQuestions.find(q => q.id === questionId);
    if (question) {
      addUserMessage(question.text);

      // Simuler une réponse avec un léger délai pour un effet naturel
      setTimeout(() => {
        const answer = predefinedAnswers[questionId];
        if (answer) {
          addBotMessage(answer);
        } else {
          addBotMessage("Je n'ai pas de réponse préenregistrée pour cette question. Veuillez contacter notre équipe pour plus d'informations.");
        }
      }, 500);
    }
  };

  const handleBotResponse = (userMessage: string) => {
    // Simuler un temps de réponse
    setTimeout(() => {
      const lowerCaseMessage = userMessage.toLowerCase();

      if (lowerCaseMessage.includes('formation') || lowerCaseMessage.includes('cours')) {
        addBotMessage("Nous proposons diverses formations en informatique. Consultez notre page 'Formation en ligne' pour découvrir notre catalogue complet.");
      }
      else if (lowerCaseMessage.includes('tarif') || lowerCaseMessage.includes('prix') || lowerCaseMessage.includes('coût')) {
        addBotMessage("Nos tarifs varient selon les formations et services. Visitez notre page 'Prestations et Services' pour plus de détails.");
      }
      else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('aide') || lowerCaseMessage.includes('support')) {
        addBotMessage("Vous pouvez nous contacter via WhatsApp au +123456789 ou via notre page Facebook. Souhaitez-vous être redirigé vers l'un de ces canaux ?");
      }
      else {
        addBotMessage("Je ne suis pas sûr de comprendre votre demande. Pour une assistance plus personnalisée, contactez-nous via WhatsApp ou Facebook.");
      }
    }, 1000);
  };

  const redirectToWhatsApp = () => {
    window.open('https://wa.me/123456789', '_blank');
  };

  const redirectToFacebook = () => {
    window.open('https://facebook.com/experiencetech', '_blank');
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-xl transition-all duration-300 z-50
        ${isMinimized ? 'w-16 h-16' : 'w-80 md:w-96'}`}
    >
      {isMinimized ? (
        <button
          onClick={toggleMinimize}
          className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-teal-600"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <>
          {/* Header */}
          <div className="bg-teal-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle size={20} className="mr-2" />
              <h3 className="font-semibold">Assistant Expérience Tech</h3>
            </div>
            <div className="flex space-x-2">
              <button onClick={toggleMinimize} className="p-1 hover:bg-teal-600 rounded">
                <ChevronDown size={18} />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-teal-600 rounded">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${message.isUser ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Questions préenregistrées */}
          <div className="p-2 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-500 mb-2">Questions fréquentes :</p>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handlePredefinedQuestion(question.id)}
                  className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded-full hover:bg-gray-300"
                >
                  {question.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Écrivez votre message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-teal-500 hover:bg-teal-600">
                <Send size={18} />
              </Button>
            </div>

            {/* Contact buttons */}
            <div className="flex justify-center mt-3 space-x-3">
              <Button onClick={redirectToWhatsApp} variant="outline" size="sm" className="flex items-center text-xs">
                <Phone size={14} className="mr-1" /> WhatsApp
              </Button>
              <Button onClick={redirectToFacebook} variant="outline" size="sm" className="flex items-center text-xs">
                <Facebook size={14} className="mr-1" /> Facebook
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
