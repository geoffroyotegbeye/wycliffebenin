import { Link } from 'react-router-dom';
import { Users, GraduationCap, TrendingUp, Target, Heart, Lightbulb, Award, CheckCircle, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsCard from '../components/StatsCard';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const Alphabetisation = () => {
  const statistiques = [
    { valeur: 28, label: "Centres actifs", icon: <Target className="text-orange-600" size={32} />, color: 'primary' as const },
    { valeur: 1250, label: "Apprenants", icon: <Users className="text-blue-900" size={32} />, color: 'secondary' as const },
    { valeur: 62, label: "Formateurs", icon: <GraduationCap className="text-orange-600" size={32} />, color: 'primary' as const },
    { valeur: 87, label: "Taux de réussite", icon: <TrendingUp className="text-blue-900" size={32} />, suffix: '%', color: 'secondary' as const }
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
            <div className="bg-primary-50 border-l-4 border-orange-600 p-8 rounded-r-card">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Approche Holistique</h2>
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
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Composantes du Programme</h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {composantes.map((item, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className={`bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 ${item.color === 'primary' ? 'border-orange-600' : 'border-blue-900'
                  }`}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.titre}</h3>
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Témoignage de Transformation</h2>
                <div className="bg-white rounded-card p-6 shadow-card border-l-4 border-orange-600">
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "Avant, je ne pouvais pas lire. Maintenant, je lis la Bible moi-même et j'aide
                    mes enfants avec leurs devoirs. J'ai aussi appris à mieux gérer mon petit commerce.
                    Ma vie a complètement changé !"
                  </p>
                  <p className="text-blue-900 font-semibold">- Marie, Apprenante en Fon</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Méthodologie */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Notre Méthodologie</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animation="slideUp" delay={0.1}>
                <div className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Approche Participative</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Les apprenants sont au centre du processus. Nous utilisons leurs expériences
                    quotidiennes comme base d'apprentissage, rendant l'éducation pertinente et pratique.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition">
                  <div className="bg-secondary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Users className="text-blue-900" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Formation Locale</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous formons des facilitateurs issus des communautés locales qui comprennent
                    la culture et parlent la langue maternelle des apprenants.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <div className="bg-white rounded-card p-8 shadow-card hover:shadow-card-hover transition">
                  <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Award className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Suivi Continu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Un système de suivi régulier assure la qualité de l'enseignement et
                    l'accompagnement des apprenants jusqu'à leur autonomie complète.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Impact et Résultats */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Impact et Résultats</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slideRight">
              <div className="bg-white rounded-card p-8 shadow-card border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Transformations Individuelles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Autonomie spirituelle :</strong> Lecture personnelle de la Bible
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Confiance en soi :</strong> Participation active dans la communauté
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Compétences pratiques :</strong> Gestion de petites entreprises
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Santé améliorée :</strong> Meilleures pratiques d'hygiène
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft">
              <div className="bg-white rounded-card p-8 shadow-card border-l-4 border-blue-900">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Impact Communautaire</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Développement économique :</strong> Création de micro-entreprises
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Cohésion sociale :</strong> Renforcement des liens communautaires
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Éducation des enfants :</strong> Parents capables d'aider leurs enfants
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">
                      <strong>Préservation culturelle :</strong> Valorisation des langues locales
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Témoignages multiples */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Histoires de Transformation</h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
                <div className="mb-4">
                  <LazyImage
                    src="/images/images1.jpeg"
                    alt="Marie"
                    className="w-full h-48 rounded-button object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Avant, je ne pouvais pas lire. Maintenant, je lis la Bible moi-même et j'aide
                  mes enfants avec leurs devoirs. J'ai aussi appris à mieux gérer mon petit commerce."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Marie K.</p>
                    <p className="text-sm text-gray-600">Apprenante en Fon</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
                <div className="mb-4">
                  <LazyImage
                    src="/images/images2.jpeg"
                    alt="Jean"
                    className="w-full h-48 rounded-button object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Grâce à l'alphabétisation, j'ai pu développer mon activité agricole. Je comprends
                  maintenant les techniques modernes et je peux calculer mes bénéfices."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                    J
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Jean D.</p>
                    <p className="text-sm text-gray-600">Apprenant en Bariba</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition">
                <div className="mb-4">
                  <LazyImage
                    src="/images/images3.jpeg"
                    alt="Aïcha"
                    className="w-full h-48 rounded-button object-cover"
                  />
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Je suis devenue facilitatrice après avoir terminé le programme. Maintenant,
                  j'aide d'autres femmes à apprendre à lire et écrire dans notre langue."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Aïcha S.</p>
                    <p className="text-sm text-gray-600">Facilitatrice en Dendi</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Comment s'impliquer */}
        <section className="mb-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Comment Vous Impliquer ?
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Parrainer un Apprenant</h3>
                <p className="text-gray-700 mb-4">
                  Financez la formation d'un apprenant pendant un an
                </p>
                <p className="text-orange-600 font-bold text-lg">50 000 FCFA/an</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Soutenir un Centre</h3>
                <p className="text-gray-700 mb-4">
                  Équipez un centre d'alphabétisation complet
                </p>
                <p className="text-blue-900 font-bold text-lg">500 000 FCFA</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card p-6 text-center shadow-card hover:shadow-card-hover transition">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Devenir Bénévole</h3>
                <p className="text-gray-700 mb-4">
                  Partagez vos compétences avec nos équipes
                </p>
                <p className="text-orange-600 font-bold text-lg">Votre temps</p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Call to Action Final */}
        <ScrollAnimation animation="scale">
          <section className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card p-12 text-center shadow-elevated">
            <Heart className="mx-auto mb-6 text-orange-600" size={60} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformez des Vies par l'Alphabétisation</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto ">
              Votre soutien permet à une personne d'apprendre à lire, d'accéder à la Parole de Dieu
              et de transformer sa communauté. Chaque don compte !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donnez"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg hover:scale-105"
              >
                Faire un Don
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-orange-600 transition"
              >
                Nous Contacter
              </Link>
            </div>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Alphabetisation;
