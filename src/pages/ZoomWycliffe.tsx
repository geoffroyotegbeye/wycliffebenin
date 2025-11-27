import { Target, Users, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const ZoomWycliffe = () => {
  const highlights = [
    {
      id: 1,
      titre: "40 Ans d'Impact",
      image: '/images/communaute-03.webp',
      description: "Retour sur 40 années de traduction biblique et d'alphabétisation au Bénin",
      date: "Octobre 2024"
    },
    {
      id: 2,
      titre: "Notre Équipe Grandit",
      image: '/images/communaute-04.webp',
      description: "Accueil de 15 nouveaux membres dans notre équipe nationale",
      date: "Septembre 2024"
    },
    {
      id: 3,
      titre: "Partenariat Stratégique",
      image: '/images/communaute-05.webp',
      description: "Signature d'un accord majeur avec le Ministère de l'Éducation",
      date: "Août 2024"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Zoom sur Wycliffe BENIN"
        subtitle="Focus sur nos activités, notre équipe et notre impact"
        image='/images/communaute-03.webp'
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-12">
            <Globe className="mx-auto mb-4 text-orange-600" size={48} />
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              À la Une
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Les moments forts de Wycliffe Bénin
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <ScrollAnimation key={item.id} animation="scale" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <LazyImage 
                  src={item.image} 
                  alt={item.titre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-primary-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {item.titre}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {item.description}
                  </p>
                  <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group">
                    Lire plus
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="slideUp">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Target className="mx-auto mb-3 text-orange-600" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">15</div>
                <div className="text-gray-700">Projets Actifs</div>
              </div>
              <div>
                <Users className="mx-auto mb-3 text-blue-900" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">85</div>
                <div className="text-gray-700">Membres d'Équipe</div>
              </div>
              <div>
                <Globe className="mx-auto mb-3 text-orange-600" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">60+</div>
                <div className="text-gray-700">Langues Locales</div>
              </div>
              <div>
                <TrendingUp className="mx-auto mb-3 text-blue-900" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">50K+</div>
                <div className="text-gray-700">Vies Touchées</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default ZoomWycliffe;
