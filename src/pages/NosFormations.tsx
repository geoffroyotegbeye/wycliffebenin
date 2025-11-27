import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { GraduationCap, BookOpen, Users, Clock, Award, CheckCircle } from 'lucide-react';

const NosFormations = () => {
  const formations = [
    {
      title: "Formation en Traduction Biblique",
      level: "Niveau 1 - Débutant",
      duration: "6 mois",
      schedule: "Samedi 8h-17h",
      participants: "15-20 personnes",
      icon: <BookOpen className="text-orange-600" size={40} />,
      description: "Formation complète aux principes et pratiques de la traduction biblique.",
      modules: [
        "Introduction à la traduction biblique",
        "Langues sources et langues cibles",
        "Outils de traduction (Paratext, etc.)",
        "Exégèse et herméneutique",
        "Révision et contrôle qualité",
        "Travail en équipe de traduction"
      ],
      prerequisites: [
        "Maîtrise d'une langue locale",
        "Bonne connaissance du français",
        "Formation biblique de base",
        "Engagement à long terme"
      ],
      certification: "Certificat de Traducteur Biblique Niveau 1"
    },
    {
      title: "Formation en Alphabétisation Holistique",
      level: "Formation Complète",
      duration: "3 mois",
      schedule: "Lundi-Vendredi 9h-15h",
      participants: "20-25 personnes",
      icon: <GraduationCap className="text-orange-600" size={40} />,
      description: "Devenez formateur en alphabétisation avec une approche holistique.",
      modules: [
        "Pédagogie de l'alphabétisation adulte",
        "Méthodes d'enseignement participatives",
        "Création de matériel pédagogique",
        "Évaluation des apprenants",
        "Développement communautaire",
        "Suivi et accompagnement"
      ],
      prerequisites: [
        "Niveau BAC minimum",
        "Passion pour l'enseignement",
        "Disponibilité temps plein",
        "Mobilité géographique"
      ],
      certification: "Certificat de Formateur en Alphabétisation"
    },
    {
      title: "Formation en Linguistique Appliquée",
      level: "Niveau Avancé",
      duration: "12 mois",
      schedule: "Flexible (en ligne + présentiel)",
      participants: "10-15 personnes",
      icon: <Users className="text-orange-600" size={40} />,
      description: "Formation approfondie en linguistique pour les projets de traduction.",
      modules: [
        "Phonétique et phonologie",
        "Morphologie et syntaxe",
        "Sémantique et pragmatique",
        "Analyse de discours",
        "Orthographe et standardisation",
        "Documentation linguistique"
      ],
      prerequisites: [
        "Formation en traduction Niveau 1",
        "Expérience en traduction (2 ans min)",
        "Niveau universitaire",
        "Projet de recherche"
      ],
      certification: "Diplôme en Linguistique Appliquée"
    }
  ];

  const workshops = [
    {
      title: "Atelier Outils Numériques",
      duration: "2 jours",
      description: "Maîtrisez les outils informatiques pour la traduction"
    },
    {
      title: "Atelier Révision Communautaire",
      duration: "3 jours",
      description: "Techniques de révision participative avec les communautés"
    },
    {
      title: "Atelier Création de Matériel",
      duration: "5 jours",
      description: "Créez du matériel pédagogique adapté et attractif"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Nos Formations"
        subtitle="Équipez-vous pour servir efficacement dans la traduction et l'alphabétisation"
        image="/images/images2.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Formations Professionnelles
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nous proposons des formations de qualité pour former des traducteurs bibliques 
              et des formateurs en alphabétisation compétents et engagés.
            </p>
          </div>
        </ScrollAnimation>

        {/* Formations Principales */}
        <div className="mb-16">
          {formations.map((formation, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-8 mb-8 border-t-4 border-orange-600">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon & Level */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 rounded-full mb-4">
                      {formation.icon}
                    </div>
                    <div className="bg-white text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-button text-sm font-medium inline-block">
                      {formation.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-blue-900 mb-3">
                      {formation.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      {formation.description}
                    </p>

                    {/* Info Grid */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6 bg-gray-50 rounded-card p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="text-orange-600 flex-shrink-0" size={20} />
                        <div>
                          <div className="text-xs text-gray-600">Durée</div>
                          <div className="font-semibold text-blue-900">{formation.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="text-orange-600 flex-shrink-0" size={20} />
                        <div>
                          <div className="text-xs text-gray-600">Participants</div>
                          <div className="font-semibold text-blue-900">{formation.participants}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="text-orange-600 flex-shrink-0" size={20} />
                        <div>
                          <div className="text-xs text-gray-600">Horaires</div>
                          <div className="font-semibold text-blue-900">{formation.schedule}</div>
                        </div>
                      </div>
                    </div>

                    {/* Modules & Prerequisites */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="text-orange-600" size={20} />
                          Modules de Formation
                        </h4>
                        <ul className="space-y-2">
                          {formation.modules.map((module, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-orange-600 mt-1">•</span>
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="text-orange-600" size={20} />
                          Prérequis
                        </h4>
                        <ul className="space-y-2">
                          {formation.prerequisites.map((prereq, idx) => (
                            <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-orange-600 mt-1">•</span>
                              <span>{prereq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="bg-primary-50 rounded-card p-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Award className="text-orange-600" size={24} />
                        <div>
                          <div className="text-xs text-gray-600">Certification</div>
                          <div className="font-bold text-blue-900">{formation.certification}</div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-button font-semibold hover:bg-orange-700 transition">
                        S'inscrire
                      </button>
                      <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-button font-semibold hover:bg-orange-600 hover:text-white transition">
                        Télécharger le Programme
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Ateliers Courts */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Ateliers de Courte Durée
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {workshop.title}
                  </h3>
                  <div className="text-orange-600 font-semibold mb-3">
                    {workshop.duration}
                  </div>
                  <p className="text-gray-700 mb-4">
                    {workshop.description}
                  </p>
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition">
                    Plus d'infos →
                  </button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card shadow-elevated p-12 text-center">
            <GraduationCap className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Commencer Votre Formation ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez nos programmes de formation et développez vos compétences 
              pour servir efficacement dans la mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg"
              >
                Demander des Informations
              </a>
              <a
                href="/nos-rdv"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Voir le Calendrier
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default NosFormations;
