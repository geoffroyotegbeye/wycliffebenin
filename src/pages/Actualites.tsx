import { ArrowRight, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const Actualites = () => {
  const actualites = [
    {
      id: 1,
      titre: "Transition de Leadership",
      categorie: "Administration",
      date: "9 Octobre 2024",
      image: '/images/communaute-01.webp',
      extrait: "Nomination d'un nouveau directeur exécutif pour Wycliffe Bénin."
    },
    {
      id: 2,
      titre: "Dédicace Bible Alogbé",
      categorie: "Traduction",
      date: "12 Septembre 2024",
      image: '/images/communaute-02.webp',
      extrait: "Achèvement de la traduction du Nouveau Testament en Alogbé."
    },
    {
      id: 3,
      titre: "Nouveau Centre à Parakou",
      categorie: "Alphabétisation",
      date: "5 Septembre 2024",
      image: '/images/communaute-03.webp',
      extrait: "Ouverture d'un centre d'alphabétisation à Parakou."
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Actualités au Siège"
        subtitle="Les dernières nouvelles de Wycliffe Bénin"
        image='/images/communaute-01.webp'
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <ScrollAnimation animation="slideUp">
          <div className="mb-16 bg-white rounded-card shadow-elevated overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96">
                <LazyImage
                  src={actualites[0].image}
                  alt={actualites[0].titre}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="bg-primary-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block w-fit">
                  {actualites[0].categorie}
                </span>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  {actualites[0].titre}
                </h2>
                <p className="text-gray-700 mb-6">
                  {actualites[0].extrait}
                </p>
                <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group">
                  Lire plus
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {actualites.slice(1).map((article, index) => (
            <ScrollAnimation key={article.id} animation="scale" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                <LazyImage
                  src={article.image}
                  alt={article.titre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-secondary-50 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">
                    {article.categorie}
                  </span>
                  <h3 className="text-xl font-bold text-blue-900 my-3">
                    {article.titre}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.extrait}
                  </p>
                  <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group">
                    Lire l'article
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="slideUp">
          <div className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card p-12 text-center text-white shadow-elevated">
            <TrendingUp className="mx-auto mb-6 text-white" size={48} />
            <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
            <p className="text-xl mb-8 text-white/90">
              Inscrivez-vous à notre newsletter
            </p>
            <div className="flex gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-button text-gray-900"
              />
              <button className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-3 rounded-button font-semibold">
                S'inscrire
              </button>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Actualites;
