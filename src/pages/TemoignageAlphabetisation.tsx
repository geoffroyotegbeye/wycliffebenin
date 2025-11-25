import { Link } from 'react-router-dom';
import { BookOpen, Heart, Star, Quote, ArrowRight, Users, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const TemoignageAlphabetisation = () => {
  const temoignages = [
    {
      nom: "Marie Koudjo",
      age: 42,
      langue: "Fon",
      village: "Abomey",
      photo: "/images/images1.jpeg",
      citation: "Avant le programme, je ne savais ni lire ni écrire. Aujourd'hui, je lis la Bible moi-même et j'aide mes enfants avec leurs devoirs. Ma vie a complètement changé !",
      histoire: "Marie était une mère de famille qui se sentait exclue parce qu'elle ne savait pas lire. Après 18 mois dans notre programme d'alphabétisation, elle lit couramment en Fon et a même ouvert un petit commerce de tissus qu'elle gère avec succès.",
      impact: [
        "Lit la Bible quotidiennement",
        "Aide ses 4 enfants avec leurs devoirs",
        "Gère son commerce avec des registres écrits",
        "Participe activement aux réunions de l'église"
      ],
      annee: "2023"
    },
    {
      nom: "Jean Dossou",
      age: 55,
      langue: "Bariba",
      village: "Parakou",
      photo: "/images/images2.jpeg",
      citation: "Grâce à l'alphabétisation, j'ai pu développer mon activité agricole. Je comprends maintenant les techniques modernes et je peux calculer mes bénéfices.",
      histoire: "Jean était agriculteur depuis 30 ans mais ne savait pas lire. Le programme lui a non seulement appris à lire et écrire, mais aussi des techniques agricoles améliorées et la gestion financière. Ses revenus ont augmenté de 60%.",
      impact: [
        "Revenus agricoles augmentés de 60%",
        "Utilise des techniques agricoles modernes",
        "Tient des registres de ses activités",
        "Forme d'autres agriculteurs de son village"
      ],
      annee: "2022"
    },
    {
      nom: "Aïcha Sanni",
      age: 38,
      langue: "Dendi",
      village: "Malanville",
      photo: "/images/images3.jpeg",
      citation: "Je suis devenue facilitatrice après avoir terminé le programme. Maintenant, j'aide d'autres femmes à apprendre à lire et écrire dans notre langue.",
      histoire: "Aïcha a non seulement appris à lire, mais elle est devenue une leader dans sa communauté. Elle facilite maintenant des classes d'alphabétisation et inspire d'autres femmes à se former.",
      impact: [
        "Facilitatrice pour 25 apprenantes",
        "Leader communautaire reconnue",
        "Enseigne aussi l'hygiène et la santé",
        "A formé 3 autres facilitatrices"
      ],
      annee: "2021"
    },
    {
      nom: "Thomas Agbodjan",
      age: 48,
      langue: "Mina",
      village: "Aného",
      photo: "/images/images1.jpeg",
      citation: "L'alphabétisation m'a ouvert les yeux. Je peux maintenant lire les panneaux, comprendre les documents officiels et participer aux décisions de ma communauté.",
      histoire: "Thomas était pêcheur et se sentait marginalisé lors des réunions communautaires. Après le programme, il est devenu membre actif du conseil de village et aide à la prise de décisions importantes.",
      impact: [
        "Membre du conseil de village",
        "Lit et comprend les documents officiels",
        "Gère une coopérative de pêcheurs",
        "Défend les droits de sa communauté"
      ],
      annee: "2023"
    },
    {
      nom: "Fatima Boukari",
      age: 35,
      langue: "Peulh",
      village: "Djougou",
      photo: "/images/images2.jpeg",
      citation: "Mes enfants sont fiers de moi maintenant. Je peux les aider à faire leurs devoirs et je comprends ce qu'ils apprennent à l'école.",
      histoire: "Fatima avait honte de ne pas pouvoir aider ses enfants. Le programme d'alphabétisation lui a redonné confiance. Elle participe maintenant aux réunions parents-enseignants et suit la scolarité de ses enfants.",
      impact: [
        "Suit la scolarité de ses 5 enfants",
        "Participe aux réunions scolaires",
        "Lit des livres d'histoires à ses enfants",
        "Encourage d'autres mères à se former"
      ],
      annee: "2022"
    },
    {
      nom: "Koffi Mensah",
      age: 60,
      langue: "Adja",
      village: "Lokossa",
      photo: "/images/images3.jpeg",
      citation: "À 60 ans, j'ai appris à lire ! C'est le plus beau cadeau de ma vie. Je peux enfin lire la Parole de Dieu dans ma propre langue.",
      histoire: "Koffi pensait qu'il était trop vieux pour apprendre. Le programme lui a prouvé le contraire. Il est maintenant un exemple vivant que l'apprentissage n'a pas d'âge et inspire les personnes âgées de sa communauté.",
      impact: [
        "Lit la Bible quotidiennement en Adja",
        "Anime des études bibliques",
        "Inspire les personnes âgées",
        "Transmet son savoir à ses petits-enfants"
      ],
      annee: "2023"
    }
  ];

  const statistiques = [
    { valeur: 1250, label: "Apprenants formés", icon: <Users className="text-primary" size={32} /> },
    { valeur: 87, label: "Taux de réussite", suffix: "%", icon: <TrendingUp className="text-secondary" size={32} /> },
    { valeur: 28, label: "Villages touchés", icon: <Heart className="text-primary" size={32} /> },
    { valeur: 15, label: "Langues locales", icon: <BookOpen className="text-secondary" size={32} /> }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Témoignages d'Alphabétisation"
        subtitle="Des vies transformées par l'apprentissage de la lecture et de l'écriture"
        image="/images/images2.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <Quote className="mx-auto mb-6 text-primary" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Histoires de Transformation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment l'alphabétisation holistique change des vies, 
              renforce les communautés et ouvre des portes vers un avenir meilleur.
            </p>
          </div>
        </ScrollAnimation>

        {/* Statistiques */}
        <section className="mb-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12">
          <ScrollAnimation animation="slideUp">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
              Notre Impact en Chiffres
            </h3>
          </ScrollAnimation>
          <div className="grid md:grid-cols-4 gap-6">
            {statistiques.map((stat, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {stat.valeur}{stat.suffix || ''}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Témoignages détaillés */}
        <section className="mb-20">
          <div className="space-y-16">
            {temoignages.map((temoignage, index) => (
              <ScrollAnimation 
                key={index} 
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative">
                      <LazyImage 
                        src={temoignage.photo} 
                        alt={temoignage.nom}
                        className="rounded-card shadow-elevated h-96 w-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                        {temoignage.annee}
                      </div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-primary fill-primary" size={20} />
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-secondary mb-2">
                      {temoignage.nom}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-primary-50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {temoignage.age} ans
                      </span>
                      <span className="bg-secondary-50 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        Langue: {temoignage.langue}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {temoignage.village}
                      </span>
                    </div>

                    <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-card mb-6">
                      <Quote className="text-primary mb-3" size={24} />
                      <p className="text-gray-800 italic text-lg leading-relaxed">
                        "{temoignage.citation}"
                      </p>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {temoignage.histoire}
                    </p>

                    <div className="bg-white rounded-card p-6 shadow-card">
                      <h4 className="font-bold text-secondary mb-4 flex items-center gap-2">
                        <TrendingUp className="text-primary" size={20} />
                        Impact Concret
                      </h4>
                      <ul className="space-y-2">
                        {temoignage.impact.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Vidéo témoignage (placeholder) */}
        <ScrollAnimation animation="slideUp">
          <section className="mb-20 bg-gradient-to-r from-secondary to-secondary-600 rounded-card p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Regardez Leurs Histoires</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Découvrez en vidéo comment l'alphabétisation transforme des vies
            </p>
            <div className="bg-black/20 rounded-card h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80">Vidéo de témoignages (à venir)</p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12 text-center">
            <Heart className="mx-auto mb-6 text-primary" size={60} />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Vous Aussi, Transformez des Vies
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Votre soutien permet à d'autres personnes de vivre ces transformations. 
              Chaque don compte, chaque vie compte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donnez"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-button font-semibold hover:bg-primary-600 transition shadow-lg hover:scale-105"
              >
                Parrainer un Apprenant
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/alphabetisation"
                className="inline-flex items-center justify-center bg-secondary text-white px-8 py-3 rounded-button font-semibold hover:bg-secondary-600 transition"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default TemoignageAlphabetisation;
