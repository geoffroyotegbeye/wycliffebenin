import { Calendar, Award, Users, BookOpen } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const Historique = () => {
  const timeline = [
    {
      annee: "2004",
      titre: "Naissance de Wycliffe BENIN",
      description: "Association chrétienne autorisée le 11 avril 2004 pour contribuer au salut et au développement de tous les peuples.",
      icon: "🎯",
      color: "primary"
    },
    {
      annee: "2008",
      titre: "Démarrage des programmes d'Alphabétisation",
      description: "Lancement des premiers programmes d'alphabétisation holistique dans les langues locales.",
      icon: "✏️",
      color: "secondary"
    },
    {
      annee: "2012",
      titre: "Démarrage des programmes de traduction écrite",
      description: "Début des projets de traduction écrite de la Bible dans les langues locales du Bénin.",
      icon: "📖",
      color: "primary"
    },
    {
      annee: "2015",
      titre: "Programme Holistique",
      description: "Lancement de l'approche holistique de transformation communautaire avec les AGR.",
      icon: "🌾",
      color: "secondary"
    },
    {
      annee: "2019",
      titre: "Dédicace du nouveau siège",
      description: "Dédicace du nouveau siège de Wycliffe BENIN à Houèto, marquant une nouvelle ère.",
      icon: "🏢",
      color: "primary"
    },
    {
      annee: "2023",
      titre: "Programme de langue des signes",
      description: "Démarrage du programme de développement de la langue des signes (ALOGBE).",
      icon: "👐",
      color: "secondary"
    },
    {
      annee: "2024",
      titre: "Célébration des 20 ans",
      description: "Célébration des 20 ans de Wycliffe BENIN avec plus de 60 langues en développement et 45 610 personnes impactées.",
      icon: "🎉",
      color: "primary"
    }
  ];

  const realisations = [
    {
      nombre: "60+",
      titre: "Langues en Développement",
      description: "Traduction totale ou partielle de la Bible",
      icon: <BookOpen className="text-orange-600" size={32} />
    },
    {
      nombre: "20",
      titre: "Années d'Expérience",
      description: "Depuis 2004 au service des communautés",
      icon: <Calendar className="text-blue-900" size={32} />
    },
    {
      nombre: "45,610",
      titre: "Personnes Impactées",
      description: "Bénéficiaires de nos programmes holistiques",
      icon: <Users className="text-orange-600" size={32} />
    },
    {
      nombre: "27",
      titre: "Bibles Complètes",
      description: "14 Bibles entières + 13 Nouveaux Testaments",
      icon: <Award className="text-blue-900" size={32} />
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Notre Historique"
        subtitle="Plus de 40 ans au service de la Parole de Dieu au Bénin"
        image='/images/communaute-06.webp'
        height="medium"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Réalisations */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realisations.map((item, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition text-center border-t-4 border-orange-600">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-blue-900 mb-2">
                    {item.nombre}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">
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
            <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">
              Au Fil du Temps
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Depuis 2004, Wycliffe BENIN œuvre pour la traduction biblique, l'alphabétisation et la transformation communautaire au Bénin.
            </p>
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
                        event.color === 'primary' ? 'border-orange-600' : 'border-blue-900'
                      }`}>
                      <div className="text-4xl mb-3">{event.icon}</div>
                      <div className={`text-3xl font-bold mb-2 ${
                        event.color === 'primary' ? 'text-orange-600' : 'text-blue-900'
                      }`}>
                        {event.annee}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {event.titre}
                      </h3>
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Point central */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full hidden md:block ${
                      event.color === 'primary' ? 'bg-orange-600' : 'bg-blue-900'
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
                src='/images/communaute-07.webp' 
                alt="Notre histoire"
                className="rounded-card shadow-elevated h-96"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
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
