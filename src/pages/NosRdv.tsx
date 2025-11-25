import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Calendar, MapPin, Clock, Users, ExternalLink, Bell } from 'lucide-react';

const NosRdv = () => {
  const upcomingEvents = [
    {
      title: "Dédicace du Nouveau Testament Fon-Gbe",
      date: "15 Décembre 2024",
      time: "10h00 - 16h00",
      location: "Stade de l'Amitié, Cotonou",
      attendees: "5000+ personnes attendues",
      description: "Célébration historique de l'achèvement de la traduction du Nouveau Testament en Fon-Gbe. Louanges, témoignages et distribution gratuite.",
      category: "Dédicace",
      featured: true
    },
    {
      title: "Formation des Traducteurs - Niveau 1",
      date: "8-12 Janvier 2025",
      time: "8h00 - 17h00",
      location: "Centre Wycliffe, Cotonou",
      attendees: "20 participants",
      description: "Formation intensive de 5 jours sur les principes de base de la traduction biblique et l'utilisation des outils de traduction.",
      category: "Formation",
      featured: false
    },
    {
      title: "Journée Portes Ouvertes",
      date: "25 Janvier 2025",
      time: "9h00 - 15h00",
      location: "Siège Wycliffe Bénin",
      attendees: "Ouvert à tous",
      description: "Découvrez notre travail, rencontrez nos équipes, visitez nos centres d'alphabétisation et posez toutes vos questions.",
      category: "Événement",
      featured: false
    },
    {
      title: "Conférence: L'Impact de la Traduction Biblique",
      date: "15 Février 2025",
      time: "14h00 - 18h00",
      location: "Hôtel du Port, Cotonou",
      attendees: "200 places",
      description: "Conférence avec des experts internationaux sur l'impact de la traduction biblique dans le développement communautaire.",
      category: "Conférence",
      featured: true
    },
    {
      title: "Atelier d'Alphabétisation Communautaire",
      date: "5-7 Mars 2025",
      time: "9h00 - 16h00",
      location: "Parakou, Borgou",
      attendees: "50 formateurs",
      description: "Atelier pratique pour les formateurs en alphabétisation. Méthodes innovantes et partage d'expériences.",
      category: "Atelier",
      featured: false
    },
    {
      title: "Culte de Reconnaissance Annuel",
      date: "30 Mars 2025",
      time: "10h00 - 13h00",
      location: "Église Évangélique, Cotonou",
      attendees: "1000+ personnes",
      description: "Culte spécial de reconnaissance pour célébrer les réalisations de l'année et présenter les projets futurs.",
      category: "Culte",
      featured: false
    }
  ];

  const recurringEvents = [
    {
      title: "Réunion de Prière Mensuelle",
      frequency: "Premier samedi de chaque mois",
      time: "7h00 - 9h00",
      location: "Siège Wycliffe Bénin",
      description: "Temps d'intercession pour nos projets et nos équipes"
    },
    {
      title: "Soirée Témoignages",
      frequency: "Dernier vendredi de chaque mois",
      time: "18h00 - 20h00",
      location: "Centre Wycliffe, Cotonou",
      description: "Partage de témoignages et d'expériences des communautés"
    },
    {
      title: "Visite des Centres d'Alphabétisation",
      frequency: "Tous les mercredis",
      time: "10h00 - 12h00",
      location: "Différents centres",
      description: "Visite guidée de nos centres (sur réservation)"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Nos Rendez-vous"
        subtitle="Rejoignez-nous lors de nos événements et célébrations"
        image="/images/images3.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Événements à Venir
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Participez à nos événements pour découvrir notre travail, célébrer les 
              réalisations et vous engager dans notre mission.
            </p>
          </div>
        </ScrollAnimation>

        {/* Événements à Venir */}
        <div className="mb-16">
          {upcomingEvents.map((event, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
              <div className={`bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 mb-6 ${
                event.featured ? 'border-l-4 border-primary' : ''
              }`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Date Box */}
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-card p-4 text-center w-32">
                      <div className="text-3xl font-bold">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-sm">
                        {event.date.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                    {event.featured && (
                      <div className="mt-2 text-center">
                        <span className="bg-primary-50 text-primary text-xs px-2 py-1 rounded-full font-medium">
                          À NE PAS MANQUER
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">
                          {event.title}
                        </h3>
                        <span className="inline-block bg-secondary-50 text-secondary text-xs px-3 py-1 rounded-full font-medium">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {event.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="text-primary flex-shrink-0" size={20} />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="text-primary flex-shrink-0" size={20} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="text-primary flex-shrink-0" size={20} />
                        <span className="text-sm">{event.attendees}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-primary text-white px-6 py-2 rounded-button font-semibold hover:bg-primary-600 transition">
                        S'inscrire
                      </button>
                      <button className="border-2 border-primary text-primary px-6 py-2 rounded-button font-semibold hover:bg-primary hover:text-white transition">
                        Plus d'infos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Événements Récurrents */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Événements Réguliers
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {recurringEvents.map((event, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6">
                  <Calendar className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-gray-700 text-sm">
                      <Bell className="text-primary flex-shrink-0 mt-1" size={16} />
                      <span>{event.frequency}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700 text-sm">
                      <Clock className="text-primary flex-shrink-0 mt-1" size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700 text-sm">
                      <MapPin className="text-primary flex-shrink-0 mt-1" size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {event.description}
                  </p>
                  <button className="text-primary font-semibold hover:text-primary-600 transition flex items-center gap-2">
                    En savoir plus
                    <ExternalLink size={16} />
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <Bell className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ne Manquez Aucun Événement
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les invitations et 
              les rappels de tous nos événements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-button focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg">
                S'abonner
              </button>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default NosRdv;
