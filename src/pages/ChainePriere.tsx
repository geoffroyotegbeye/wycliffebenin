import { Heart, Users, Send } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';

const ChainePriere = () => {
  const sujets = [
    {
      id: 1,
      titre: "Traducteurs sur le Terrain",
      description: "Priez pour nos traducteurs qui travaillent dans des conditions difficiles",
      urgence: "Urgent"
    },
    {
      id: 2,
      titre: "Nouveaux Centres d'Alphabétisation",
      description: "Pour l'ouverture de 5 nouveaux centres en 2025",
      urgence: "Important"
    },
    {
      id: 3,
      titre: "Financement des Projets",
      description: "Pour que Dieu pourvoit aux besoins financiers de nos projets",
      urgence: "Continu"
    },
    {
      id: 4,
      titre: "Santé de l'Équipe",
      description: "Pour la protection et la santé de tous nos collaborateurs",
      urgence: "Continu"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Chaîne de Prière"
        subtitle="Rejoignez-nous dans la prière pour l'avancement de l'œuvre"
        image="/images/images1.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-12">
            <Heart className="mx-auto mb-4 text-primary" size={48} />
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Priez Avec Nous
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              La prière est le fondement de notre travail. Rejoignez notre chaîne de prière.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sujets.map((sujet, index) => (
            <ScrollAnimation key={sujet.id} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-secondary">
                    {sujet.titre}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    sujet.urgence === 'Urgent' ? 'bg-red-100 text-red-700' :
                    sujet.urgence === 'Important' ? 'bg-primary-50 text-primary' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {sujet.urgence}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  {sujet.description}
                </p>
                <button className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group">
                  Je prie pour cela
                  <Heart className="ml-2 group-hover:scale-110 transition-transform" size={16} />
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-secondary to-secondary-600 rounded-card p-12 text-center text-white">
            <Users className="mx-auto mb-6 text-white" size={60} />
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez Notre Chaîne de Prière
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Inscrivez-vous pour recevoir nos sujets de prière hebdomadaires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-button text-gray-900"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-button font-semibold hover:bg-primary-600 transition flex items-center justify-center gap-2">
                <Send size={20} />
                S'inscrire
              </button>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default ChainePriere;
