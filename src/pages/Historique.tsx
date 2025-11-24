import { Calendar, Award, Users, BookOpen } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import LazyImage from '../components/LazyImage';

const Historique = () => {
  const timeline = [
    {
      annee: "1981",
      titre: "Fondation",
      description: "Création de Wycliffe Bénin pour faciliter la traduction de la Bible dans les langues locales.",
      icon: "🎯",
      color: "primary"
    },
    {
      annee: "1985",
      titre: "Premier Projet",
      description: "Lancement du premier projet de traduction biblique en langue Fon.",
      icon: "📖",
      color: "secondary"
    },
    {
      annee: "1992",
      titre: "Expansion",
      description: "Extension des activités à 5 nouvelles langues locales du Bénin.",
      icon: "🌍",
      color: "primary"
    },
    {
      annee: "1998",
      titre: "Programme d'Alphabétisation",
      description: "Lancement du premier programme d'alphabétisation holistique.",
      icon: "✏️",
      color: "secondary"
    },
    {
      annee: "2005",
      titre: "Première Dédicace",
      description: "Dédicace du Nouveau Testament en langue Bariba, un moment historique.",
      icon: "🎉",
      color: "primary"
    },
    {
      annee: "2010",
      titre: "Partenariats Internationaux",
      description: "Établissement de partenariats avec des organisations internationales.",
      icon: "🤝",
      color: "secondary"
    },
    {
      annee: "2015",
      titre: "Innovation Technologique",
      description: "Adoption de nouvelles technologies pour accélérer la traduction.",
      icon: "💻",
      color: "primary"
    },
    {
      annee: "2020",
      titre: "Traduction Alogbé",
      description: "Lancement du projet de traduction en langue des signes (Alogbé).",
      icon: "👐",
      color: "secondary"
    },
    {
      annee: "2024",
      titre: "Aujourd'hui",
      description: "Plus de 15 projets actifs touchant des milliers de personnes à travers le Bénin.",
      icon: "⭐",
      color: "primary"
    }
  ];

  const realisations = [
    {
      nombre: "15+",
      titre: "Langues en Traduction",
      description: "Projets de traduction biblique actifs",
      icon: <BookOpen className="text-primary" size={32} />
    },
    {
      nombre: "40+",
      titre: "Années d'Expérience",
      description: "Au service des communautés",
      icon: <Calendar className="text-secondary" size={32} />
    },
    {
      nombre: "50,000+",
      titre: "Personnes Touchées",
      description: "Bénéficiaires de nos programmes",
      icon: <Users className="text-primary" size={32} />
    },
    {
      nombre: "8",
      titre: "Dédicaces Bibliques",
      description: "Nouveaux Testaments dédiés",
      icon: <Award className="text-secondary" size={32} />
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Notre Historique"
        subtitle="Plus de 40 ans au service de la Parole de Dieu au Bénin"
        image="/images/images1.jpeg"
        height="medium"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Réalisations */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realisations.map((item, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition text-center border-t-4 border-primary">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {item.nombre}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {item.titre}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
              Notre Parcours
            </h2>
          </ScrollAnimation>
          
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <ScrollAnimation 
                  key={index}
                  animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
                  delay={index * 0.1}
                >
                  <div className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}>
                    {/* Contenu */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className={`bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-l-4 ${
                        event.color === 'primary' ? 'border-primary' : 'border-secondary'
                      }`}>
                      <div className="text-4xl mb-3">{event.icon}</div>
                      <div className={`text-3xl font-bold mb-2 ${
                        event.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}>
                        {event.annee}
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {event.titre}
                      </h3>
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Point central */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full hidden md:block ${
                      event.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                    } border-4 border-white shadow-lg`}></div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <LazyImage 
                src="/images/images2.jpeg" 
                alt="Notre histoire"
                className="rounded-card shadow-elevated h-96"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Une Histoire de Transformation
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Depuis plus de 40 ans, Wycliffe Bénin œuvre pour que chaque communauté 
                  linguistique du Bénin ait accès à la Parole de Dieu dans sa langue maternelle.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Notre histoire est marquée par des moments de joie, de défis surmontés et 
                  de vies transformées par la puissance de la Parole de Dieu.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Historique;
