import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { Users, Heart, BookOpen, Globe, Briefcase, GraduationCap, HandHeart, Laptop } from 'lucide-react';

const EngagezVous = () => {
  const opportunities = [
    {
      title: "Traducteur Bénévole",
      icon: <BookOpen className="text-orange-600" size={40} />,
      description: "Participez directement à la traduction de la Bible dans les langues locales.",
      requirements: [
        "Maîtrise d'une langue locale",
        "Bonne connaissance du français",
        "Formation biblique de base",
        "Disponibilité régulière"
      ],
      commitment: "10-20h/semaine",
      color: "border-orange-600"
    },
    {
      title: "Formateur en Alphabétisation",
      icon: <GraduationCap className="text-blue-900" size={40} />,
      description: "Enseignez la lecture et l'écriture dans les communautés rurales.",
      requirements: [
        "Expérience en enseignement",
        "Patience et pédagogie",
        "Passion pour l'éducation",
        "Mobilité géographique"
      ],
      commitment: "Temps plein ou partiel",
      color: "border-blue-900"
    },
    {
      title: "Coordinateur de Projet",
      icon: <Briefcase className="text-orange-600" size={40} />,
      description: "Gérez et coordonnez les projets de traduction sur le terrain.",
      requirements: [
        "Compétences en gestion",
        "Leadership naturel",
        "Expérience en ONG",
        "Sens de l'organisation"
      ],
      commitment: "Temps plein",
      color: "border-orange-600"
    },
    {
      title: "Technicien Informatique",
      icon: <Laptop className="text-blue-900" size={40} />,
      description: "Supportez les équipes avec les outils technologiques de traduction.",
      requirements: [
        "Compétences IT",
        "Logiciels de traduction",
        "Maintenance matériel",
        "Formation des utilisateurs"
      ],
      commitment: "Temps partiel",
      color: "border-blue-900"
    },
    {
      title: "Mobilisateur Communautaire",
      icon: <Users className="text-orange-600" size={40} />,
      description: "Sensibilisez et mobilisez les communautés autour des projets.",
      requirements: [
        "Excellente communication",
        "Connaissance culturelle",
        "Esprit d'équipe",
        "Créativité"
      ],
      commitment: "Flexible",
      color: "border-orange-600"
    },
    {
      title: "Conseiller Spirituel",
      icon: <Heart className="text-blue-900" size={40} />,
      description: "Accompagnez spirituellement les équipes et les communautés.",
      requirements: [
        "Formation théologique",
        "Maturité spirituelle",
        "Écoute active",
        "Discernement"
      ],
      commitment: "Selon disponibilité",
      color: "border-blue-900"
    }
  ];

  const benefits = [
    {
      icon: <Heart size={32} />,
      title: "Impact Éternel",
      description: "Contribuez à transformer des vies pour l'éternité"
    },
    {
      icon: <Users size={32} />,
      title: "Communauté",
      description: "Rejoignez une équipe passionnée et engagée"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Formation",
      description: "Bénéficiez de formations continues et qualifiantes"
    },
    {
      icon: <Globe size={32} />,
      title: "Expérience Unique",
      description: "Vivez une aventure missionnaire enrichissante"
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Engagez-vous - Wycliffe Bénin | Devenez Bénévole ou Missionnaire"
        description="Rejoignez notre mission ! Découvrez les opportunités de service : traducteur, formateur, coordinateur, technicien. Utilisez vos talents pour transformer des vies au Bénin."
        keywords="bénévolat, engagement, mission, volontariat, Wycliffe Bénin, opportunités, service, traducteur bénévole"
        url="https://wycliffebenin.org/engagez-vous"
      />
      <HeroSection
        title="Engagez-vous avec Nous"
        subtitle="Rejoignez notre mission de rendre la Parole de Dieu accessible à tous"
        image="/images/images3.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Votre Appel, Notre Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Que vous soyez traducteur, enseignant, technicien ou simplement passionné par 
              la mission, il y a une place pour vous dans notre équipe. Découvrez comment 
              vos talents peuvent servir le Royaume de Dieu.
            </p>
          </div>
        </ScrollAnimation>

        {/* Verset */}
        <ScrollAnimation animation="scale" delay={0.2}>
          <div className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card shadow-elevated p-8 mb-16 text-center">
            <p className="text-2xl text-white font-medium italic mb-4">
              "Comment croiront-ils en celui dont ils n'ont pas entendu parler ? 
              Et comment en entendront-ils parler, s'il n'y a personne qui prêche ?"
            </p>
            <p className="text-white text-lg">
              Romains 10:14
            </p>
          </div>
        </ScrollAnimation>

        {/* Opportunités de Service */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Opportunités de Service
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className={`bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 border-t-4 ${opp.color} h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-4">
                    {opp.icon}
                    <h3 className="text-xl font-bold text-blue-900">
                      {opp.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">
                    {opp.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Profil recherché :</h4>
                    <ul className="space-y-1">
                      {opp.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm font-medium text-orange-600">
                      Engagement : {opp.commitment}
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Avantages */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Pourquoi Nous Rejoindre ?
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4 text-orange-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Processus de Candidature */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Comment Postuler ?
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Candidature</h3>
                <p className="text-gray-700 text-sm">
                  Remplissez le formulaire en ligne avec vos motivations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Entretien</h3>
                <p className="text-gray-700 text-sm">
                  Échange avec notre équipe pour mieux vous connaître
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Formation</h3>
                <p className="text-gray-700 text-sm">
                  Participez à notre programme d'orientation et de formation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Mission</h3>
                <p className="text-gray-700 text-sm">
                  Commencez votre service dans l'équipe qui vous correspond
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Témoignages */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Ils Témoignent
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "Servir comme traducteur bénévole a transformé ma vie. Voir l'impact 
                  de la Parole de Dieu dans ma communauté est indescriptible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    JK
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Jean Koffi</div>
                    <div className="text-sm text-gray-600">Traducteur Fon-Gbe</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "En tant que formatrice, j'ai vu des adultes apprendre à lire et 
                  découvrir la Bible pour la première fois. C'est un privilège immense."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                    MA
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Marie Assogba</div>
                    <div className="text-sm text-gray-600">Formatrice</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "Coordonner ces projets me permet d'utiliser mes compétences 
                  professionnelles pour le Royaume. Chaque jour est une aventure."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    PD
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Paul Dossou</div>
                    <div className="text-sm text-gray-600">Coordinateur</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card shadow-elevated p-12 text-center">
            <HandHeart className="mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Faire la Différence ?
            </h2>
            <p className="text-xl  mb-8 max-w-2xl mx-auto">
              Rejoignez notre équipe et participez à une mission qui change des vies 
              pour l'éternité. Votre engagement compte !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Postuler Maintenant
              </a>
              <a
                href="/nos-formations"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-orange-600 transition"
              >
                Découvrir les Formations
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default EngagezVous;
