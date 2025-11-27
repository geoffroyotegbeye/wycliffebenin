import { Heart, Home, GraduationCap, Sprout, Users, TrendingUp } from 'lucide-react';

const TransformationCommunautaire = () => {
  const domaines = [
    {
      titre: "Développement Spirituel",
      description: "L'accès à la Bible transforme la vie spirituelle des individus et des communautés.",
      icon: <Heart className="text-orange-600" size={40} />,
      impacts: [
        "Croissance de la foi personnelle",
        "Renforcement des églises locales",
        "Évangélisation plus efficace",
        "Disciples mieux formés"
      ],
      color: "primary"
    },
    {
      titre: "Éducation",
      description: "L'alphabétisation ouvre des portes vers l'éducation et le développement personnel.",
      icon: <GraduationCap className="text-blue-900" size={40} />,
      impacts: [
        "Taux d'alphabétisation accru",
        "Meilleure scolarisation des enfants",
        "Accès à l'information",
        "Développement des compétences"
      ],
      color: "secondary"
    },
    {
      titre: "Économie",
      description: "Les compétences en lecture et écriture améliorent les opportunités économiques.",
      icon: <TrendingUp className="text-orange-600" size={40} />,
      impacts: [
        "Meilleure gestion financière",
        "Accès au crédit et aux services",
        "Entrepreneuriat local",
        "Réduction de la pauvreté"
      ],
      color: "primary"
    },
    {
      titre: "Santé",
      description: "L'alphabétisation améliore la compréhension des informations de santé.",
      icon: <Sprout className="text-blue-900" size={40} />,
      impacts: [
        "Meilleure hygiène",
        "Prévention des maladies",
        "Suivi médical amélioré",
        "Nutrition équilibrée"
      ],
      color: "secondary"
    },
    {
      titre: "Cohésion Sociale",
      description: "La valorisation de la langue renforce l'identité et l'unité communautaire.",
      icon: <Users className="text-orange-600" size={40} />,
      impacts: [
        "Fierté culturelle renforcée",
        "Dialogue intergénérationnel",
        "Résolution de conflits",
        "Leadership local développé"
      ],
      color: "primary"
    },
    {
      titre: "Vie Familiale",
      description: "Les valeurs bibliques transforment les relations familiales.",
      icon: <Home className="text-blue-900" size={40} />,
      impacts: [
        "Mariages plus solides",
        "Meilleure éducation des enfants",
        "Réduction de la violence",
        "Harmonie familiale"
      ],
      color: "secondary"
    }
  ];

  const temoignages = [
    {
      texte: "Depuis que nous avons la Bible dans notre langue, notre communauté a changé. Les gens comprennent mieux la Parole de Dieu et vivent selon ses principes.",
      auteur: "Pasteur Jean, Communauté Bariba",
      image: "/images/images1.jpeg"
    },
    {
      texte: "L'alphabétisation m'a permis de lire la Bible moi-même. Maintenant je peux aussi aider mes enfants avec leurs devoirs et gérer mon petit commerce.",
      auteur: "Marie, Apprenante en Fon",
      image: "/images/images2.jpeg"
    },
    {
      texte: "Notre langue était en train de disparaître. Grâce au projet de traduction, les jeunes s'intéressent à nouveau à leur langue maternelle.",
      auteur: "Chef de village, Communauté Ditammari",
      image: "/images/images3.jpeg"
    }
  ];

  const statistiques = [
    { valeur: "85%", label: "Amélioration de la cohésion sociale" },
    { valeur: "70%", label: "Augmentation du taux d'alphabétisation" },
    { valeur: "60%", label: "Réduction de la pauvreté" },
    { valeur: "90%", label: "Satisfaction des communautés" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="/images/images1.jpeg" 
          alt="Transformation Communautaire"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transformation Communautaire
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Quand les communautés ont accès à la Parole de Dieu dans leur langue, 
                la transformation touche tous les aspects de la vie
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Un Impact Holistique
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La traduction biblique et l'alphabétisation ne transforment pas seulement 
              la vie spirituelle des gens. Elles ont un impact profond et durable sur tous 
              les aspects de la vie communautaire : éducation, santé, économie, cohésion 
              sociale et vie familiale.
            </p>
          </div>
        </section>

        {/* Domaines de Transformation */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Domaines de Transformation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domaines.map((domaine, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition border-t-4 ${
                  domaine.color === 'primary' ? 'border-orange-600' : 'border-blue-900'
                }`}
              >
                <div className="mb-4">
                  {domaine.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {domaine.titre}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {domaine.description}
                </p>
                <ul className="space-y-2">
                  {domaine.impacts.map((impact, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={`${domaine.color === 'primary' ? 'text-orange-600' : 'text-blue-900'} mt-1`}>✓</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Statistiques d'Impact */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Impact Mesurable
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistiques.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <div className="text-5xl font-bold text-orange-600 mb-2">
                    {stat.valeur}
                  </div>
                  <p className="text-gray-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            Témoignages de Transformation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={temoignage.image} 
                    alt={temoignage.auteur}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{temoignage.texte}"
                  </p>
                  <p className="text-blue-900 font-semibold">
                    - {temoignage.auteur}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Processus de Transformation */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="/images/images2.jpeg" 
              alt="Processus de transformation"
              className="rounded-lg shadow-2xl"
            />
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Comment Ça Fonctionne ?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Traduction</h4>
                    <p className="text-gray-700 text-sm">La Bible est traduite dans la langue locale</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Alphabétisation</h4>
                    <p className="text-gray-700 text-sm">Les gens apprennent à lire dans leur langue</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Appropriation</h4>
                    <p className="text-gray-700 text-sm">La communauté s'approprie la Parole de Dieu</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-1">Transformation</h4>
                    <p className="text-gray-700 text-sm">Les vies et la communauté sont transformées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Participez à la Transformation
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Votre soutien permet de transformer des communautés entières. Ensemble, 
                nous pouvons apporter espoir et changement durable.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition shadow-lg">
                  Faire un don
                </button>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="/images/images3.jpeg" 
                alt="Participez"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TransformationCommunautaire;
