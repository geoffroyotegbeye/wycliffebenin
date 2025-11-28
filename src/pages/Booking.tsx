import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Calendar, Users, Coffee, Projector, Music, CheckCircle, Clock } from 'lucide-react';

const Booking = () => {
  const espaces = [
    {
      nom: "Salle de Conférence",
      capacite: "50-100 personnes",
      icon: <Users className="text-orange-600" size={40} />,
      description: "Espace moderne et climatisé, idéal pour vos conférences, séminaires et formations.",
      equipements: [
        "Projecteur et écran",
        "Système audio professionnel",
        "Connexion WiFi haut débit",
        "Climatisation",
        "Tables et chaises modulables",
        "Tableau blanc"
      ],
      tarifs: [
        { duree: "Demi-journée (4h)", prix: "25 000 FCFA" },
        { duree: "Journée complète (8h)", prix: "40 000 FCFA" },
        { duree: "Week-end (2 jours)", prix: "70 000 FCFA" }
      ]
    },
    {
      nom: "Salle de Réunion",
      capacite: "15-25 personnes",
      icon: <Coffee className="text-blue-900" size={40} />,
      description: "Espace intime pour vos réunions d'équipe, ateliers et sessions de travail.",
      equipements: [
        "Écran TV 55 pouces",
        "Connexion WiFi",
        "Climatisation",
        "Table de conférence",
        "Paperboard",
        "Service café/thé"
      ],
      tarifs: [
        { duree: "Demi-journée (4h)", prix: "15 000 FCFA" },
        { duree: "Journée complète (8h)", prix: "25 000 FCFA" },
        { duree: "Semaine (5 jours)", prix: "100 000 FCFA" }
      ]
    },
    {
      nom: "Espace Événementiel",
      capacite: "100-200 personnes",
      icon: <Music className="text-orange-600" size={40} />,
      description: "Grand espace polyvalent pour vos événements, célébrations et concerts.",
      equipements: [
        "Sonorisation complète",
        "Éclairage scénique",
        "Scène modulable",
        "Parking spacieux",
        "Cuisine équipée",
        "Toilettes multiples"
      ],
      tarifs: [
        { duree: "Demi-journée (4h)", prix: "50 000 FCFA" },
        { duree: "Journée complète (8h)", prix: "80 000 FCFA" },
        { duree: "Soirée (18h-23h)", prix: "100 000 FCFA" }
      ]
    }
  ];

  const servicesSupplementaires = [
    { nom: "Service traiteur", prix: "À partir de 2 000 FCFA/pers" },
    { nom: "Décoration", prix: "Sur devis" },
    { nom: "Photographe/Vidéaste", prix: "Sur devis" },
    { nom: "Hôtesse d'accueil", prix: "10 000 FCFA/jour" },
    { nom: "Technicien son/lumière", prix: "15 000 FCFA/jour" }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Booking Live!"
        subtitle="Réservez nos espaces pour vos événements professionnels et privés"
        image='/images/communaute-14.webp'
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Nos Espaces à Louer
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Wycliffe Bénin met à disposition ses infrastructures modernes pour 
              vos événements. Tous les revenus soutiennent notre mission de traduction biblique.
            </p>
          </div>
        </ScrollAnimation>

        {/* Espaces Disponibles */}
        <div className="mb-16">
          {espaces.map((espace, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-8 mb-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Placeholder */}
                  <div className="lg:w-1/3">
                    <div className="w-full h-64 bg-gray-200 rounded-card flex items-center justify-center">
                      {espace.icon}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="lg:w-2/3">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-blue-900">
                        {espace.nom}
                      </h3>
                      <span className="bg-primary-50 text-orange-600 px-4 py-2 rounded-full font-semibold">
                        {espace.capacite}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-6">
                      {espace.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Équipements */}
                      <div>
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <Projector size={20} className="text-orange-600" />
                          Équipements Inclus
                        </h4>
                        <ul className="space-y-2">
                          {espace.equipements.map((equip, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <CheckCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                              <span>{equip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tarifs */}
                      <div>
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <Clock size={20} className="text-orange-600" />
                          Tarifs
                        </h4>
                        <div className="space-y-3">
                          {espace.tarifs.map((tarif, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-card p-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">{tarif.duree}</span>
                                <span className="font-bold text-orange-600">{tarif.prix}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-button font-semibold hover:bg-orange-700 transition">
                      Réserver Maintenant
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Services Supplémentaires */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Services Supplémentaires
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {servicesSupplementaires.map((service, index) => (
                <div key={index} className="bg-white rounded-card p-4 shadow-card">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-blue-900">{service.nom}</span>
                    <span className="text-sm text-orange-600 font-medium">{service.prix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Conditions de Réservation */}
        <ScrollAnimation animation="slideUp">
          <div className="bg-white rounded-card shadow-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Conditions de Réservation
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-bold text-blue-900 mb-3">📋 Modalités</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Réservation minimum 7 jours à l'avance</li>
                  <li>• Acompte de 50% à la réservation</li>
                  <li>• Solde à régler avant l'événement</li>
                  <li>• Caution de 20 000 FCFA (remboursable)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-3">⏰ Horaires</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Matin : 8h00 - 12h00</li>
                  <li>• Après-midi : 14h00 - 18h00</li>
                  <li>• Soirée : 18h00 - 23h00</li>
                  <li>• Week-end : Horaires flexibles</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <Calendar className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Réservez Votre Espace
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour vérifier les disponibilités et réserver l'espace 
              qui correspond à vos besoins !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+22966393434"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Appeler : +229 66 39 34 34
              </a>
              <a
                href="mailto:infos@wycliffebenin.org"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-orange-600 transition"
              >
                Email : infos@wycliffebenin.org
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Booking;
