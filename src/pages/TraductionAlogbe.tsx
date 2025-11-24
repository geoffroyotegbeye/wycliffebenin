import { Hand, Video, Users, BookOpen, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TraductionAlogbe = () => {
  const caracteristiques = [
    {
      titre: "Langue Visuelle",
      description: "L'Alogbé est la langue des signes utilisée par la communauté sourde du Bénin.",
      icon: <Hand className="text-primary" size={40} />,
      color: "primary"
    },
    {
      titre: "Traduction Vidéo",
      description: "La Bible est traduite en vidéos pour être accessible aux personnes sourdes.",
      icon: <Video className="text-secondary" size={40} />,
      color: "secondary"
    },
    {
      titre: "Communauté Sourde",
      description: "Plus de 50,000 personnes sourdes au Bénin utilisent la langue des signes.",
      icon: <Users className="text-primary" size={40} />,
      color: "primary"
    },
    {
      titre: "Accès aux Écritures",
      description: "Pour la première fois, les sourds peuvent comprendre la Bible dans leur langue.",
      icon: <BookOpen className="text-secondary" size={40} />,
      color: "secondary"
    }
  ];

  const etapesProjet = [
    {
      titre: "Recherche et Documentation",
      description: "Étude approfondie de la langue des signes Alogbé et de ses spécificités.",
      icone: "🔍"
    },
    {
      titre: "Formation des Traducteurs",
      description: "Formation de traducteurs sourds compétents en langue des signes et en théologie.",
      icone: "👨‍🏫"
    },
    {
      titre: "Traduction Vidéo",
      description: "Enregistrement vidéo de la traduction en langue des signes Alogbé.",
      icone: "🎥"
    },
    {
      titre: "Révision Communautaire",
      description: "Vérification de la traduction avec la communauté sourde.",
      icone: "✅"
    },
    {
      titre: "Production Finale",
      description: "Montage et production des vidéos finales de qualité professionnelle.",
      icone: "🎬"
    },
    {
      titre: "Distribution",
      description: "Diffusion des vidéos via DVD, applications mobiles et plateformes en ligne.",
      icone: "📱"
    }
  ];

  const statistiques = [
    {
      valeur: "50,000+",
      label: "Personnes sourdes au Bénin",
      icon: <Users className="text-primary" size={32} />
    },
    {
      valeur: "15",
      label: "Traducteurs formés",
      icon: <Award className="text-secondary" size={32} />
    },
    {
      valeur: "25%",
      label: "Progression du projet",
      icon: <Target className="text-primary" size={32} />
    },
    {
      valeur: "2020",
      label: "Année de lancement",
      icon: <BookOpen className="text-secondary" size={32} />
    }
  ];

  const defis = [
    "Manque de ressources pour la communauté sourde",
    "Peu de traducteurs qualifiés en langue des signes",
    "Coût élevé de la production vidéo",
    "Nécessité d'équipements techniques spécialisés",
    "Distribution limitée des contenus vidéo"
  ];

  const realisations = [
    "Formation de 15 traducteurs sourds",
    "Traduction de l'Évangile de Marc en cours",
    "Création d'un studio d'enregistrement",
    "Partenariat avec des églises pour sourds",
    "Application mobile en développement"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="/images/images1.jpeg" 
          alt="Traduction Alogbé"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <Hand className="text-primary" size={60} />
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Traduction Alogbé
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                La Parole de Dieu en Langue des Signes pour la Communauté Sourde du Bénin
              </p>
              <p className="text-lg text-white/80">
                L'Alogbé est la langue des signes utilisée par les personnes sourdes au Bénin. 
                Notre projet vise à traduire la Bible en vidéos pour rendre la Parole de Dieu 
                accessible à cette communauté souvent négligée.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Statistiques */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistiques.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition border-t-4 border-primary text-center"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  {stat.valeur}
                </div>
                <p className="text-gray-700 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pourquoi l'Alogbé */}
        <section className="mb-20">
          <div className="bg-primary-50 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Pourquoi la Langue des Signes ?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour les personnes sourdes, la langue des signes n'est pas simplement un moyen 
              de communication - c'est leur langue maternelle, la langue de leur cœur. Même 
              si certains peuvent lire, la compréhension profonde vient quand ils "entendent" 
              la Parole de Dieu dans leur propre langue : la langue des signes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Au Bénin, la communauté sourde a longtemps été marginalisée et n'a pas eu accès 
              aux Écritures dans une forme qu'elle peut vraiment comprendre. Le projet Alogbé 
              change cela en apportant la Bible directement dans leur langue visuelle.
            </p>
          </div>
        </section>

        {/* Caractéristiques */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
            Caractéristiques du Projet
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caracteristiques.map((item, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition border-l-4 ${
                  item.color === 'primary' ? 'border-primary' : 'border-secondary'
                }`}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {item.titre}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Étapes du Projet */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
              Processus de Traduction
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etapesProjet.map((etape, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition"
                >
                  <div className="text-5xl mb-4">{etape.icone}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {etape.titre}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Défis et Réalisations */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Défis */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Défis à Surmonter
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-secondary">
                <ul className="space-y-3">
                  {defis.map((defi, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary mt-1">⚠️</span>
                      <span className="text-gray-700">{defi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Réalisations */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Réalisations
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-primary">
                <ul className="space-y-3">
                  {realisations.map((realisation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-gray-700">{realisation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Image et Texte */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="/images/images2.jpeg" 
              alt="Communauté sourde"
              className="rounded-lg shadow-2xl"
            />
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Un Projet Pionnier
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Le projet de traduction en Alogbé est l'un des premiers de son genre en 
                Afrique de l'Ouest. Il représente un engagement fort envers l'inclusion 
                et l'accessibilité de la Parole de Dieu pour tous.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Grâce à ce projet, les personnes sourdes du Bénin peuvent enfin "entendre" 
                Dieu leur parler dans leur propre langue, transformant leur vie spirituelle 
                et leur relation avec Dieu.
              </p>
              <Link 
                to="/blog-alogbe" 
                className="inline-flex items-center text-primary font-semibold hover:text-primary-600 transition group"
              >
                Suivre l'actualité du projet
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Vidéo Section */}
        <section className="mb-20">
          <div className="bg-secondary rounded-2xl p-12 text-center text-white">
            <Video className="mx-auto mb-6 text-primary" size={60} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Découvrez la Traduction en Action
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Regardez des extraits de la traduction biblique en langue des signes Alogbé 
              et découvrez l'impact de ce projet sur la communauté sourde.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition shadow-lg">
              Voir les Vidéos
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soutenez le Projet Alogbé
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Votre soutien permet de continuer ce projet vital qui apporte la Parole de Dieu 
            à la communauté sourde du Bénin. Chaque contribution fait une différence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Faire un Don
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              En Savoir Plus
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TraductionAlogbe;
