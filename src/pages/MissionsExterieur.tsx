import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const MissionsExterieur = () => {
  const missions = [
    {
      id: 1,
      titre: "Mission à Natitingou",
      lieu: "Natitingou, Atacora",
      date: "15-20 Octobre 2024",
      image: '/images/communaute-09.webp',
      description: "Formation de facilitateurs en alphabétisation Ditammari",
      participants: 25
    },
    {
      id: 2,
      titre: "Atelier Traduction Bariba",
      lieu: "Parakou, Borgou",
      date: "5-10 Septembre 2024",
      image: '/images/communaute-10.webp',
      description: "Révision de l'Ancien Testament en langue Bariba",
      participants: 12
    },
    {
      id: 3,
      titre: "Sensibilisation Dendi",
      lieu: "Malanville, Alibori",
      date: "22-25 Août 2024",
      image: '/images/communaute-11.webp',
      description: "Campagne de sensibilisation sur l'alphabétisation",
      participants: 150
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Missions à l'Extérieur"
        subtitle="Nos équipes sur le terrain à travers le Bénin"
        image='/images/communaute-10.webp'
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Nos Missions Récentes
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez nos activités sur le terrain dans les différentes régions du Bénin
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <ScrollAnimation key={mission.id} animation="scale" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <LazyImage 
                  src={mission.image} 
                  alt={mission.titre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {mission.titre}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin size={16} className="text-orange-600" />
                      <span>{mission.lieu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={16} className="text-orange-600" />
                      <span>{mission.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users size={16} className="text-orange-600" />
                      <span>{mission.participants} participants</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {mission.description}
                  </p>
                  <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group">
                    En savoir plus
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

export default MissionsExterieur;
