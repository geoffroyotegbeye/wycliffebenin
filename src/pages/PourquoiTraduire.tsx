import { Heart, Globe, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const PourquoiTraduire = () => {
  const raisons = [
    {
      titre: "Accès à la Parole de Dieu",
      description: "Chaque personne mérite de lire et comprendre la Bible dans sa langue maternelle, la langue de son cœur.",
      icon: <Heart className="text-orange-600" size={40} />,
      color: "primary"
    },
    {
      titre: "Préservation Culturelle",
      description: "La traduction biblique contribue à la préservation et au développement des langues locales.",
      icon: <Globe className="text-blue-900" size={40} />,
      color: "secondary"
    },
    {
      titre: "Transformation Communautaire",
      description: "L'accès aux Écritures transforme les individus, les familles et les communautés entières.",
      icon: <Users className="text-orange-600" size={40} />,
      color: "primary"
    },
    {
      titre: "Compréhension Profonde",
      description: "On comprend mieux la Parole de Dieu quand elle est dans notre langue maternelle.",
      icon: <BookOpen className="text-blue-900" size={40} />,
      color: "secondary"
    }
  ];

  const processus = [
    {
      etape: "1",
      titre: "Recherche Linguistique",
      description: "Étude approfondie de la langue, de sa grammaire et de sa structure.",
      details: [
        "Analyse phonétique et phonologique",
        "Documentation de la grammaire",
        "Collecte du vocabulaire",
        "Étude de la culture locale"
      ]
    },
    {
      etape: "2",
      titre: "Formation des Traducteurs",
      description: "Formation intensive des traducteurs locaux dans les principes de traduction biblique.",
      details: [
        "Principes de traduction",
        "Exégèse biblique",
        "Utilisation des outils",
        "Travail en équipe"
      ]
    },
    {
      etape: "3",
      titre: "Traduction",
      description: "Travail minutieux de traduction verset par verset, chapitre par chapitre.",
      details: [
        "Traduction initiale",
        "Révision par l'équipe",
        "Vérification de la fidélité",
        "Adaptation culturelle"
      ]
    },
    {
      etape: "4",
      titre: "Vérification Communautaire",
      description: "Test de la traduction avec la communauté pour assurer la clarté et l'exactitude.",
      details: [
        "Lecture publique",
        "Retours de la communauté",
        "Ajustements nécessaires",
        "Validation par les leaders"
      ]
    },
    {
      etape: "5",
      titre: "Révision et Édition",
      description: "Révision finale par des consultants et édition professionnelle.",
      details: [
        "Révision par consultants",
        "Vérification théologique",
        "Correction linguistique",
        "Mise en page finale"
      ]
    },
    {
      etape: "6",
      titre: "Publication et Distribution",
      description: "Impression et distribution de la Bible traduite à la communauté.",
      details: [
        "Cérémonie de dédicace",
        "Impression des Bibles",
        "Distribution gratuite",
        "Formation à l'utilisation"
      ]
    }
  ];

  const principes = [
    "Fidélité au texte original",
    "Clarté et compréhension",
    "Naturel dans la langue cible",
    "Acceptabilité culturelle",
    "Travail en équipe",
    "Consultation communautaire"
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Pourquoi et Comment Traduire - Wycliffe Bénin | Processus de Traduction Biblique"
        description="Découvrez pourquoi la traduction biblique est essentielle et comment nous traduisons la Bible dans les langues locales du Bénin. Un processus rigoureux en 6 étapes pour transformer des vies."
        keywords="traduction biblique, pourquoi traduire, processus traduction, langue maternelle, Wycliffe Bénin, méthodologie, étapes traduction"
        url="https://wycliffebenin.org/pourquoi-traduire"
      />
      {/* Hero Section */}
      <HeroSection
        title="Pourquoi et Comment Traduire ?"
        subtitle="Découvrez l'importance de la traduction biblique et le processus rigoureux que nous suivons pour apporter la Parole de Dieu dans chaque langue."
        image='/images/projet-05.webp'
        height="large"
        overlay="dark"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Pourquoi Traduire */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Pourquoi Traduire la Bible ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La traduction biblique n'est pas qu'un exercice linguistique, c'est une mission 
                qui transforme des vies et des communautés entières.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {raisons.map((raison, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className={`bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition border-l-4 ${
                  raison.color === 'primary' ? 'border-orange-600' : 'border-blue-900'
                }`}>
                <div className="mb-4">
                  {raison.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {raison.titre}
                </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {raison.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Citation */}
        <ScrollAnimation animation="slideUp">
          <section className="mb-20">
            <div className="bg-primary-50 border-l-4 border-orange-600 p-8 rounded-r-card">
            <blockquote className="text-2xl text-gray-800 italic mb-4">
              "La langue maternelle est la langue du cœur. C'est dans cette langue que 
              Dieu nous parle le plus profondément."
            </blockquote>
              <p className="text-gray-600 font-semibold">- Wycliffe International</p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Image Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <LazyImage 
                src='/images/projet-06.webp' 
                alt="Impact de la traduction"
                className="rounded-card shadow-elevated h-96"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                L'Impact de la Traduction
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Quand les gens reçoivent la Bible dans leur langue maternelle, quelque chose 
                de puissant se produit. Ils ne lisent plus seulement des mots, ils entendent 
                Dieu leur parler directement.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Les communautés sont transformées, les familles sont restaurées, et les 
                individus trouvent espoir et direction pour leur vie.
              </p>
              <Link 
                to="/temoignage-traduction" 
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group"
              >
                Lire les témoignages
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Comment Traduire */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  Comment Traduisons-nous ?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  La traduction biblique est un processus rigoureux qui peut prendre plusieurs 
                  années et implique de nombreuses étapes.
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-8">
              {processus.map((etape, index) => (
                <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
                  <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition">
                  <div className="md:flex">
                    <div className={`md:w-1/4 p-8 flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-orange-600' : 'bg-blue-900'
                    }`}>
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold mb-2">{etape.etape}</div>
                        <div className="text-sm uppercase tracking-wider">Étape</div>
                      </div>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">
                        {etape.titre}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {etape.description}
                      </p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {etape.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={16} />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Principes de Traduction */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Nos Principes de Traduction
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous suivons des principes stricts pour assurer que chaque traduction est 
                fidèle, claire et culturellement appropriée.
              </p>
              <ul className="space-y-3">
                {principes.map((principe, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full p-1 mt-1">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{principe}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <LazyImage 
                src='/images/projet-07.webp' 
                alt="Principes de traduction"
                className="rounded-card shadow-elevated h-96"
              />
            </ScrollAnimation>
          </div>
        </section>

        {/* Call to Action */}
        <ScrollAnimation animation="slideUp">
          <section className="bg-white rounded-card overflow-hidden shadow-elevated border-2 border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
                Participez à cette Mission
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                Vous pouvez faire partie de cette œuvre extraordinaire qui transforme des vies. 
                Que ce soit par la prière, le don ou l'engagement, votre soutien est précieux.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/donnez" 
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition shadow-lg"
                >
                  Faire un don
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-950 transition"
                >
                  Nous contacter
                </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <LazyImage 
                  src='/images/projet-05.webp' 
                  alt="Participez"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default PourquoiTraduire;
