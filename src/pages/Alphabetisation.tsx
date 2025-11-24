import { BookOpen, Users, GraduationCap, TrendingUp, Target } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsCard from '../components/StatsCard';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const Alphabetisation = () => {
  const statistiques = [
    { valeur: 28, label: "Centres actifs", icon: <Target className="text-primary" size={32} />, color: 'primary' as const },
    { valeur: 1250, label: "Apprenants", icon: <Users className="text-secondary" size={32} />, color: 'secondary' as const },
    { valeur: 62, label: "Formateurs", icon: <GraduationCap className="text-primary" size={32} />, color: 'primary' as const },
    { valeur: 87, label: "Taux de réussite", icon: <TrendingUp className="text-secondary" size={32} />, suffix: '%', color: 'secondary' as const }
  ];

  const composantes = [
    {
      titre: "Alphabétisation Fonctionnelle",
      description: "Apprendre à lire et écrire dans sa langue maternelle",
      icon: "📚",
      color: "primary"
    },
    {
      titre: "Calcul de Base",
      description: "Compétences mathématiques pour la vie quotidienne",
      icon: "🔢",
      color: "secondary"
    },
    {
      titre: "Santé et Hygiène",
      description: "Éducation sur la santé, la nutrition et l'hygiène",
      icon: "🏥",
      color: "primary"
    },
    {
      titre: "Agriculture",
      description: "Techniques agricoles améliorées et gestion des ressources",
      icon: "🌾",
      color: "secondary"
    },
    {
      titre: "Gestion Financière",
      description: "Épargne, crédit et gestion de petites entreprises",
      icon: "💰",
      color: "primary"
    },
    {
      titre: "Droits et Devoirs",
      description: "Éducation civique et connaissance des droits",
      icon: "⚖️",
      color: "secondary"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Alphabétisation Holistique"
        subtitle="Plus que lire et écrire : transformer des vies et des communautés"
        image="/images/images2.jpeg"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistiques.map((stat, index) => (
              <StatsCard
                key={index}
                value={stat.valeur}
                label={stat.label}
                icon={stat.icon}
                suffix={stat.suffix}
                color={stat.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        <ScrollAnimation animation="slideUp">
          <section className="mb-20">
            <div className="bg-primary-50 border-l-4 border-primary p-8 rounded-r-card">
              <h2 className="text-2xl font-bold text-secondary mb-4">Approche Holistique</h2>
              <p className="text-gray-700 leading-relaxed">
                Notre programme d'alphabétisation va au-delà de l'apprentissage de la lecture et de l'écriture. 
                Il intègre des compétences pratiques pour la vie quotidienne : santé, agriculture, gestion 
                financière et éducation civique. Cette approche holistique transforme véritablement les 
                communautés en leur donnant les outils pour améliorer leur qualité de vie.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Composantes du Programme</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {composantes.map((item, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className={`bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 ${
                  item.color === 'primary' ? 'border-primary' : 'border-secondary'
                }`}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.titre}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <LazyImage 
                src="/images/images3.jpeg" 
                alt="Apprenants" 
                className="rounded-card shadow-elevated h-96"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Témoignage de Transformation</h2>
                <div className="bg-white rounded-card p-6 shadow-card border-l-4 border-primary">
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "Avant, je ne pouvais pas lire. Maintenant, je lis la Bible moi-même et j'aide 
                    mes enfants avec leurs devoirs. J'ai aussi appris à mieux gérer mon petit commerce. 
                    Ma vie a complètement changé !"
                  </p>
                  <p className="text-secondary font-semibold">- Marie, Apprenante en Fon</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <ScrollAnimation animation="slideUp">
          <section className="bg-gradient-to-r from-primary to-primary-600 rounded-card p-12 text-center text-white shadow-elevated">
            <BookOpen className="mx-auto mb-6 text-white" size={60} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Soutenez l'Alphabétisation</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Votre don permet à une personne d'apprendre à lire et d'accéder à la Parole de Dieu
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg hover:scale-105">
              Parrainer un Apprenant
            </button>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Alphabetisation;
