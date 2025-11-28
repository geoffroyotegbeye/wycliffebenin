import { Link } from 'react-router-dom';
import { Target, Heart, Globe, Users, BookOpen, Lightbulb } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const Vision = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Notre Vision 2030"
        subtitle="Contribuer à bâtir une communauté épanouie et être une référence en matière de recrutement de missionnaires, de développement des langues maternelles et de transformation communautaire"
        image='/images/hero-02.webp'
        height="medium"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Vision Statement */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight">
              <div>
                <div className="inline-block bg-primary-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Depuis 2004
                </div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Notre Vision 2030
                </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>WYCLIFFE-BÉNIN</strong> est une association chrétienne autorisée depuis le 11 avril 2004. 
                Notre vision d'ici 2030 est de <strong>contribuer à bâtir une communauté épanouie</strong> et d'être 
                une <strong>référence en matière de recrutement de missionnaires, de développement des langues 
                maternelles et de transformation communautaire</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous aspirons à voir chaque communauté linguistique du Bénin avoir accès aux Écritures 
                dans leur langue maternelle, permettant ainsi une compréhension profonde et personnelle 
                de la Parole de Dieu qui transforme les vies et les communautés.
              </p>
              <Link 
                to="/pourquoi-traduire" 
                className="inline-flex items-center bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition group"
              >
                Découvrir nos activités
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <div className="relative">
                <LazyImage 
                  src='/images/communaute-01.webp' 
                  alt="Vision de Wycliffe"
                  className="rounded-card shadow-elevated h-96"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-card shadow-elevated max-w-xs">
                  <p className="font-bold text-2xl mb-1">60+</p>
                  <p className="text-sm">Langues locales au Bénin</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <div className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card p-12 text-white text-center shadow-elevated">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Notre Mission
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Contribuer au Salut et au Développement de Tous les Peuples
              </h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                À travers le <strong>recrutement de missionnaires</strong>, le <strong>développement 
                des langues maternelles</strong> et les <strong>actions sociales</strong>, nous œuvrons 
                pour transformer les vies et les communautés du Bénin.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Users className="mx-auto mb-3" size={40} />
                  <h3 className="font-bold text-lg mb-2">Recrutement</h3>
                  <p className="text-sm">Missionnaires dévoués</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <BookOpen className="mx-auto mb-3" size={40} />
                  <h3 className="font-bold text-lg mb-2">Langues</h3>
                  <p className="text-sm">60+ langues maternelles</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Heart className="mx-auto mb-3" size={40} />
                  <h3 className="font-bold text-lg mb-2">Actions Sociales</h3>
                  <p className="text-sm">Transformation communautaire</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Core Values */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Nos Valeurs Fondamentales</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ces valeurs guident notre travail et nos relations avec les communautés que nous servons
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <ScrollAnimation animation="scale" delay={0.1}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-orange-600">
                <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Amour et Compassion</h3>
                <p className="text-gray-600">
                  Nous servons avec amour, compassion et respect pour chaque personne et chaque culture.
                </p>
                </div>
              </ScrollAnimation>

              {/* Value 2 */}
              <ScrollAnimation animation="scale" delay={0.2}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-blue-900">
                <div className="bg-secondary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-blue-900" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Nous nous engageons à l'excellence dans tout ce que nous faisons, de la traduction à la formation.
                </p>
                </div>
              </ScrollAnimation>

              {/* Value 3 */}
              <ScrollAnimation animation="scale" delay={0.3}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-gray-800">
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-gray-800" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  Nous travaillons en partenariat avec les églises locales et les communautés.
                </p>
                </div>
              </ScrollAnimation>

              {/* Value 4 */}
              <ScrollAnimation animation="scale" delay={0.4}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-orange-600">
                <div className="bg-primary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="text-orange-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Fidélité à la Parole</h3>
                <p className="text-gray-600">
                  Nous sommes fidèles à l'autorité et à l'intégrité des Écritures dans toutes nos traductions.
                </p>
                </div>
              </ScrollAnimation>

              {/* Value 5 */}
              <ScrollAnimation animation="scale" delay={0.5}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-blue-900">
                <div className="bg-secondary-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-blue-900" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Impact Durable</h3>
                <p className="text-gray-600">
                  Nous visons un impact à long terme qui transforme les communautés de manière durable.
                </p>
                </div>
              </ScrollAnimation>

              {/* Value 6 */}
              <ScrollAnimation animation="scale" delay={0.6}>
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-gray-800">
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="text-gray-800" size={28} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous adoptons des méthodes innovantes pour rendre la traduction plus efficace et accessible.
                </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slideRight" className="order-2 md:order-1">
              <div className="relative">
                <LazyImage 
                  src='/images/communaute-01.webp' 
                  alt="Notre Mission"
                  className="rounded-card shadow-elevated h-96"
                />
                <div className="absolute -top-6 -right-6 bg-blue-900 text-white p-6 rounded-card shadow-elevated">
                  <p className="font-bold text-3xl mb-1">15+</p>
                  <p className="text-sm">Projets actifs</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft" className="order-1 md:order-2">
              <div>
                <div className="inline-block bg-secondary-50 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Notre Mission
                </div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Faciliter l'accès aux Écritures
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Notre mission est de faciliter la traduction de la Bible, l'alphabétisation et 
                  le développement linguistique dans les communautés du Bénin qui n'ont pas encore 
                  accès aux Écritures dans leur langue maternelle.
                </p>
                <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Traduire</strong> la Bible dans les langues locales du Bénin
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Former</strong> des traducteurs et alphabétiseurs locaux
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Développer</strong> des programmes d'alphabétisation holistique
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white rounded-full p-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <strong className="text-blue-900">Transformer</strong> les communautés par la Parole de Dieu
                  </p>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Notre Impact en Chiffres
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600 mb-2">60+</div>
                  <p className="text-gray-700 font-medium">Langues locales</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-900 mb-2">15</div>
                  <p className="text-gray-700 font-medium">Projets actifs</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600 mb-2">50K+</div>
                  <p className="text-gray-700 font-medium">Personnes touchées</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-900 mb-2">40+</div>
                  <p className="text-gray-700 font-medium">Années d'expérience</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Call to Action */}
        <ScrollAnimation animation="slideUp">
          <section className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card overflow-hidden shadow-elevated">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center  text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Rejoignez notre vision
                </h2>
                <p className="text-lg mb-8  text-white">
                  Ensemble, nous pouvons faire en sorte que chaque personne au Bénin ait accès 
                  à la Parole de Dieu dans sa langue maternelle. Votre soutien fait la différence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/donnez" 
                    className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg hover:scale-105"
                  >
                    Faire un don
                  </Link>
                  <Link 
                    to="/intercedez" 
                    className="bg-white text-blue-900 px-6 py-3 rounded-button font-semibold hover:bg-gray-100 transition hover:scale-105"
                  >
                    S'engager
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <LazyImage 
                  src='/images/communaute-14.webp' 
                  alt="Rejoignez-nous"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Vision;
