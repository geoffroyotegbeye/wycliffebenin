import { Film, Globe, Users, Play, Download } from 'lucide-react';

const ProjetJesusFilm = () => {
  const languesDisponibles = [
    { langue: "Fon", statut: "Disponible", annee: "2015" },
    { langue: "Bariba", statut: "Disponible", annee: "2018" },
    { langue: "Yoruba", statut: "Disponible", annee: "2016" },
    { langue: "Ditammari", statut: "En production", annee: "2024" },
    { langue: "Adja", statut: "En production", annee: "2024" }
  ];

  const statistiques = [
    {
      valeur: "5",
      label: "Langues disponibles",
      icon: <Globe className="text-primary" size={32} />
    },
    {
      valeur: "100,000+",
      label: "Personnes touchées",
      icon: <Users className="text-secondary" size={32} />
    },
    {
      valeur: "250+",
      label: "Projections organisées",
      icon: <Film className="text-primary" size={32} />
    },
    {
      valeur: "15,000+",
      label: "Téléchargements",
      icon: <Download className="text-secondary" size={32} />
    }
  ];

  const utilisations = [
    {
      titre: "Projections Publiques",
      description: "Projections en plein air dans les villages et communautés",
      icon: "🎬"
    },
    {
      titre: "Églises Locales",
      description: "Diffusion dans les églises pour l'évangélisation",
      icon: "⛪"
    },
    {
      titre: "Écoles et Centres",
      description: "Outil pédagogique dans les écoles et centres de formation",
      icon: "🏫"
    },
    {
      titre: "Distribution Mobile",
      description: "Partage via smartphones, tablettes et clés USB",
      icon: "📱"
    }
  ];

  return (
    <div className="w-full">
      <div className="relative h-[500px] overflow-hidden">
        <img src="/images/images1.jpeg" alt="Projet JESUS Film" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <Film className="text-primary" size={60} />
                <h1 className="text-5xl md:text-6xl font-bold text-white">Projet JESUS Film</h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                Le film sur la vie de Jésus traduit et doublé dans les langues locales du Bénin
              </p>
              <p className="text-lg text-white/80">
                Le film JESUS est l'un des outils d'évangélisation les plus puissants au monde. 
                Nous le traduisons dans les langues locales pour que chaque Béninois puisse voir 
                et entendre l'histoire de Jésus dans sa propre langue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistiques.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-primary">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.valeur}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-primary-50 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-secondary mb-4">À Propos du Film JESUS</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le film JESUS est une adaptation cinématographique de l'Évangile de Luc. Il raconte 
              la vie, le ministère, la mort et la résurrection de Jésus-Christ de manière fidèle 
              et accessible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Traduit dans plus de 2,000 langues à travers le monde, ce film a touché des milliards 
              de personnes. Au Bénin, nous travaillons à le rendre disponible dans chaque langue locale.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Langues Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languesDisponibles.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-secondary">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-secondary">{item.langue}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    item.statut === 'Disponible' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {item.statut}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Année : {item.annee}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Utilisations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {utilisations.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.titre}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/images/images2.jpeg" alt="Projection" className="rounded-lg shadow-2xl" />
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Impact du Film</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Le film JESUS a un impact profond sur ceux qui le regardent. Beaucoup découvrent 
                pour la première fois qui est Jésus et ce qu'il a fait pour eux.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Les projections sont souvent suivies de discussions et de décisions de suivre Christ, 
                transformant des vies et des communautés entières.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-secondary to-secondary-600 rounded-2xl p-12 text-center text-white">
          <Play className="mx-auto mb-6 text-primary" size={60} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Regardez le Film JESUS</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Découvrez le film dans les langues locales du Bénin
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition shadow-lg">
            Voir le Film
          </button>
        </section>

      </div>
    </div>
  );
};

export default ProjetJesusFilm;
