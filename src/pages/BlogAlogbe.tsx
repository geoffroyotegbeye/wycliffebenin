import { Link } from 'react-router-dom';
import { Video, Users, ArrowRight, Play } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const BlogAlogbe = () => {
  const videos = [
    {
      id: 1,
      titre: "Traduction de Jean 3:16",
      description: "Découvrez la traduction du verset le plus célèbre en Alogbé",
      image: "/images/images1.jpeg",
      duree: "3:45",
      vues: "1.2K"
    },
    {
      id: 2,
      titre: "Histoire de la Création",
      description: "Genèse 1 traduit en langue des signes du Bénin",
      image: "/images/images2.jpeg",
      duree: "8:20",
      vues: "2.5K"
    },
    {
      id: 3,
      titre: "Le Bon Samaritain",
      description: "Parabole du Bon Samaritain en Alogbé",
      image: "/images/images3.jpeg",
      duree: "5:15",
      vues: "1.8K"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Traduction Visuelle Alogbé"
        subtitle="La Parole de Dieu en langue des signes du Bénin"
        image="/images/images2.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-12">
            <Video className="mx-auto mb-4 text-orange-600" size={48} />
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Vidéos en Alogbé
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez la Bible traduite en langue des signes pour la communauté sourde du Bénin
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <ScrollAnimation key={video.id} animation="scale" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <div className="relative">
                  <LazyImage 
                    src={video.image} 
                    alt={video.titre}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duree}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {video.titre}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {video.vues} vues
                    </span>
                    <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group">
                      Regarder
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="slideUp">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12 text-center">
            <Users className="mx-auto mb-6 text-orange-600" size={60} />
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              50 000+ Personnes Sourdes au Bénin
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Grâce à la traduction en Alogbé, la communauté sourde du Bénin peut enfin accéder 
              à la Parole de Dieu dans sa propre langue.
            </p>
            <Link
              to="/traduction-alogbe"
              className="inline-flex items-center bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              En Savoir Plus
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default BlogAlogbe;
