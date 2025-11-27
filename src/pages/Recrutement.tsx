import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Briefcase, Heart, Globe, Users, CheckCircle, Send } from 'lucide-react';

const Recrutement = () => {
  const postes = [
    {
      titre: "Traducteur Biblique",
      type: "Temps plein",
      lieu: "Cotonou / Terrain",
      description: "Participer à la traduction de la Bible dans les langues locales du Bénin.",
      profil: [
        "Formation en théologie ou linguistique",
        "Maîtrise d'une langue locale",
        "Passion pour la Parole de Dieu",
        "Esprit d'équipe"
      ],
      statut: "Ouvert"
    },
    {
      titre: "Formateur en Alphabétisation",
      type: "Temps plein",
      lieu: "Zones rurales",
      description: "Former et encadrer les apprenants dans les centres d'alphabétisation.",
      profil: [
        "Expérience en enseignement",
        "Pédagogie adaptée aux adultes",
        "Mobilité géographique",
        "Engagement missionnaire"
      ],
      statut: "Ouvert"
    },
    {
      titre: "Coordinateur de Projet",
      type: "Temps plein",
      lieu: "Cotonou",
      description: "Gérer et coordonner les projets de traduction et d'alphabétisation.",
      profil: [
        "Expérience en gestion de projet",
        "Leadership et organisation",
        "Maîtrise de l'anglais",
        "Compétences en reporting"
      ],
      statut: "Ouvert"
    },
    {
      titre: "Comptable",
      type: "Temps plein",
      lieu: "Cotonou",
      description: "Gérer la comptabilité et les finances de l'organisation.",
      profil: [
        "Diplôme en comptabilité",
        "Expérience en ONG (souhaité)",
        "Maîtrise des logiciels comptables",
        "Intégrité et rigueur"
      ],
      statut: "Pourvu"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Recrutement Missionnaire"
        subtitle="Rejoignez notre équipe et participez à une mission qui change des vies"
        image='/images/equipe-05.webp'
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Travailler avec Nous
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Wycliffe Bénin recherche des personnes passionnées et engagées pour 
              rejoindre notre équipe missionnaire. Si vous avez un cœur pour les 
              langues et les peuples non atteints, nous voulons vous connaître !
            </p>
          </div>
        </ScrollAnimation>

        {/* Pourquoi Nous Rejoindre */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Pourquoi Nous Rejoindre ?
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-6">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Heart className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="font-bold text-blue-900 mb-2">Mission Éternelle</h3>
                <p className="text-gray-700 text-sm">
                  Participez à une œuvre qui a un impact éternel
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Users className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="font-bold text-blue-900 mb-2">Équipe Passionnée</h3>
                <p className="text-gray-700 text-sm">
                  Travaillez avec des personnes engagées et motivées
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Globe className="mx-auto mb-4 text-orange-600" size={48} />
                <h3 className="font-bold text-blue-900 mb-2">Réseau International</h3>
                <p className="text-gray-700 text-sm">
                  Faites partie d'un réseau mondial de traducteurs
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.4}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                <Briefcase className="mx-auto mb-4 text-blue-900" size={48} />
                <h3 className="font-bold text-blue-900 mb-2">Formation Continue</h3>
                <p className="text-gray-700 text-sm">
                  Bénéficiez de formations régulières et qualifiantes
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Postes Disponibles */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Postes Disponibles
            </h2>
          </ScrollAnimation>

          <div className="space-y-6">
            {postes.map((poste, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
                <div className={`bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 ${
                  poste.statut === 'Pourvu' ? 'opacity-60' : ''
                }`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-blue-900">
                          {poste.titre}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          poste.statut === 'Ouvert' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {poste.statut}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span>📍 {poste.lieu}</span>
                        <span>⏰ {poste.type}</span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {poste.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Profil recherché :</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {poste.profil.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={16} />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {poste.statut === 'Ouvert' && (
                    <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-button font-semibold hover:bg-orange-700 transition">
                      Postuler
                    </button>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Processus de Recrutement */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Processus de Recrutement
            </h2>
            <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Candidature</h3>
                <p className="text-gray-700 text-xs">
                  Envoyez CV et lettre de motivation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Présélection</h3>
                <p className="text-gray-700 text-xs">
                  Étude des dossiers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Entretien</h3>
                <p className="text-gray-700 text-xs">
                  Rencontre avec l'équipe
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Formation</h3>
                <p className="text-gray-700 text-xs">
                  Orientation et formation initiale
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="font-bold text-blue-900 mb-2 text-sm">Intégration</h3>
                <p className="text-gray-700 text-xs">
                  Début de la mission
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <Send className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Rejoindre l'Aventure ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Envoyez-nous votre candidature et faites partie d'une équipe qui change 
              des vies pour l'éternité !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:recrutement@wycliffebenin.org"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Envoyer ma Candidature
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-orange-600 transition"
              >
                Poser une Question
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Recrutement;
