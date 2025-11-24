import { MapPin, Users, BookOpen, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';
import AnimatedCounter from '../components/AnimatedCounter';

const Cartographie = () => {
  const departements = [
    {
      nom: "Atacora-Donga",
      langues: [
        { nom: "Ditammari", locuteurs: "150,000", statut: "En cours", progression: 65 },
        { nom: "Waama", locuteurs: "120,000", statut: "En cours", progression: 45 },
        { nom: "Nateni", locuteurs: "95,000", statut: "Planifié", progression: 0 },
        { nom: "Yom", locuteurs: "80,000", statut: "En cours", progression: 30 }
      ],
      color: "primary"
    },
    {
      nom: "Borgou-Alibori",
      langues: [
        { nom: "Bariba", locuteurs: "600,000", statut: "Complété", progression: 100 },
        { nom: "Boko", locuteurs: "180,000", statut: "En cours", progression: 55 },
        { nom: "Boo", locuteurs: "45,000", statut: "Planifié", progression: 0 }
      ],
      color: "secondary"
    },
    {
      nom: "Atlantique-Littoral",
      langues: [
        { nom: "Fon", locuteurs: "2,200,000", statut: "Complété", progression: 100 },
        { nom: "Goun", locuteurs: "350,000", statut: "En cours", progression: 70 },
        { nom: "Tofin", locuteurs: "95,000", statut: "En cours", progression: 40 }
      ],
      color: "primary"
    },
    {
      nom: "Mono-Couffo",
      langues: [
        { nom: "Adja", locuteurs: "550,000", statut: "En cours", progression: 60 },
        { nom: "Sahoué", locuteurs: "120,000", statut: "Planifié", progression: 0 },
        { nom: "Kotafon", locuteurs: "85,000", statut: "En cours", progression: 35 }
      ],
      color: "secondary"
    },
    {
      nom: "Ouémé-Plateau",
      langues: [
        { nom: "Yoruba", locuteurs: "850,000", statut: "Complété", progression: 100 },
        { nom: "Holli", locuteurs: "180,000", statut: "En cours", progression: 50 },
        { nom: "Ifè", locuteurs: "95,000", statut: "Planifié", progression: 0 }
      ],
      color: "primary"
    },
    {
      nom: "Zou-Collines",
      langues: [
        { nom: "Mahi", locuteurs: "320,000", statut: "En cours", progression: 55 },
        { nom: "Idaasha", locuteurs: "150,000", statut: "En cours", progression: 40 },
        { nom: "Tchabè", locuteurs: "75,000", statut: "Planifié", progression: 0 }
      ],
      color: "secondary"
    }
  ];

  const statistiquesGlobales = [
    {
      titre: "Langues Identifiées",
      valeur: "60+",
      description: "Langues locales au Bénin",
      icon: <BookOpen className="text-primary" size={32} />
    },
    {
      titre: "Locuteurs Totaux",
      valeur: "6M+",
      description: "Personnes parlant ces langues",
      icon: <Users className="text-secondary" size={32} />
    },
    {
      titre: "Projets Actifs",
      valeur: "15",
      description: "Traductions en cours",
      icon: <TrendingUp className="text-primary" size={32} />
    },
    {
      titre: "Traductions Complètes",
      valeur: "8",
      description: "Nouveaux Testaments dédiés",
      icon: <MapPin className="text-secondary" size={32} />
    }
  ];

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "Complété":
        return "bg-green-100 text-green-800 border-green-300";
      case "En cours":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Planifié":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Cartographie Linguistique du Bénin"
        subtitle="Découvrez la richesse linguistique du Bénin et l'état d'avancement des projets de traduction biblique"
        image="/images/images1.jpeg"
        height="medium"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Statistiques Globales */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistiquesGlobales.map((stat, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-primary text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {stat.valeur}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-1">
                    {stat.titre}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <ScrollAnimation animation="slideUp">
          <section className="mb-20">
            <div className="bg-primary-50 border-l-4 border-primary p-8 rounded-r-card">
              <h2 className="text-2xl font-bold text-secondary mb-4">
                La Diversité Linguistique du Bénin
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le Bénin est un pays riche en diversité linguistique avec plus de 60 langues 
                locales parlées à travers ses 12 départements. Chaque langue représente une 
                culture unique et une communauté qui mérite d'avoir accès à la Parole de Dieu 
                dans sa langue maternelle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wycliffe Bénin travaille activement dans plusieurs de ces langues pour traduire 
                la Bible et développer des programmes d'alphabétisation qui transforment les communautés.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Cartographie par Département */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
              Langues par Département
            </h2>
          </ScrollAnimation>
          
          <div className="space-y-8">
            {departements.map((dept, deptIndex) => (
              <ScrollAnimation key={deptIndex} animation="slideUp" delay={deptIndex * 0.1}>
                <div className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition">
                <div className={`p-6 ${
                  dept.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-white" size={28} />
                    <h3 className="text-2xl font-bold text-white">
                      {dept.nom}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {dept.langues.map((langue, langueIndex) => (
                      <div 
                        key={langueIndex}
                        className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-xl font-bold text-secondary mb-1">
                              {langue.nom}
                            </h4>
                            <p className="text-sm text-gray-600 flex items-center gap-1">
                              <Users size={14} />
                              {langue.locuteurs} locuteurs
                            </p>
                          </div>
                          <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${getStatutColor(langue.statut)}`}>
                            {langue.statut}
                          </span>
                        </div>
                        
                        {/* Barre de progression */}
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Progression</span>
                            <span className="text-sm font-bold text-secondary">{langue.progression}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                langue.progression === 100 ? 'bg-green-500' :
                                langue.progression > 0 ? 'bg-blue-500' :
                                'bg-gray-400'
                              }`}
                              style={{ width: `${langue.progression}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Légende */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <div className="bg-gray-50 rounded-card p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                Légende des Statuts
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-secondary">Complété</p>
                    <p className="text-sm text-gray-600">Nouveau Testament traduit et dédié</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-secondary">En cours</p>
                    <p className="text-sm text-gray-600">Traduction activement en cours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div>
                    <p className="font-bold text-secondary">Planifié</p>
                    <p className="text-sm text-gray-600">Projet en phase de planification</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Image et Texte */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <LazyImage 
                src="/images/images2.jpeg" 
                alt="Diversité linguistique"
                className="rounded-card shadow-elevated h-96"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Chaque Langue Compte
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Qu'une langue soit parlée par des milliers ou des dizaines de milliers de 
                personnes, chaque communauté linguistique mérite d'avoir accès à la Parole 
                de Dieu dans sa langue maternelle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre travail de cartographie nous aide à identifier les besoins, à prioriser 
                  les projets et à mobiliser les ressources nécessaires pour atteindre chaque 
                  communauté linguistique du Bénin.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Call to Action */}
        <ScrollAnimation animation="slideUp">
          <section className="bg-gradient-to-r from-primary to-primary-600 rounded-card p-12 text-center text-white shadow-elevated">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aidez-nous à Atteindre Toutes les Langues
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Il reste encore beaucoup de langues sans accès aux Écritures. Votre soutien 
              peut faire la différence pour ces communautés.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg hover:scale-105">
              Soutenir un Projet
            </button>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Cartographie;
