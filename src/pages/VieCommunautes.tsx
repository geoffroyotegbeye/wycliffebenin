import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const VieCommunautes = () => {
  const histoires = [
    {
      id: 1,
      titre: "Transformation à Abomey",
      communaute: "Communauté Fon",
      image: "/images/images1.jpeg",
      description: "Comment l'alphabétisation a transformé tout un village",
      impact: "120 personnes formées"
    },
    {
      id: 2,
      titre: "Célébration à Parakou",
      communaute: "Communauté Bariba",
      image: "/images/images2.jpeg",
      description: "Dédicace de matériel pédagogique en langue Bariba",
      impact: "5 centres équipés"
    },
    {
      id: 3,
      titre: "Espoir à Malanville",
      communaute: "Communauté Dendi",
      image: "/images/images3.jpeg",
      description: "Des femmes apprennent à lire et transforment leur vie",
      impact: "85 femmes alphabétisées"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Vie des Communautés"
        subtitle="Histoires de transformation dans les communautés que nous servons"
        image="/images/images3.jpeg"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-12">
            <Heart className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Histoires de Transformation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez comment nos programmes transforment la vie des communautés
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {histoires.map((histoire, index) => (
            <ScrollAnimation key={histoire.id} animation="scale" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <LazyImage 
                  src={histoire.image} 
                  alt={histoire.titre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-primary-50 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {histoire.communaute}
                  </span>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {histoire.titre}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {histoire.description}
                  </p>
                  <div className="bg-secondary-50 rounded-button p-3 mb-4">
                    <p className="text-secondary font-semibold text-sm">
                      Impact: {histoire.impact}
                    </p>
                  </div>
                  <button className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group">
                    Lire l'histoire
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VieCommunautes;
