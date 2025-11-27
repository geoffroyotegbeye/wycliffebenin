import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';
import { Handshake, Building, Church, GraduationCap, Globe, TrendingUp, CheckCircle, Users, Heart, Target, Award, Mail, Phone, ArrowRight } from 'lucide-react';

const Partenariat = () => {
  const typesPartenariat = [
    {
      title: "Partenariat Financier",
      icon: <TrendingUp className="text-orange-600" size={40} />,
      description: "Soutenez financièrement nos projets de traduction et d'alphabétisation.",
      avantages: [
        "Rapports réguliers sur l'utilisation des fonds",
        "Visibilité sur nos supports de communication",
        "Invitation aux événements spéciaux",
        "Reçu fiscal pour déduction d'impôts"
      ],
      engagement: "À partir de 500 000 FCFA/an"
    },
    {
      title: "Partenariat Technique",
      icon: <GraduationCap className="text-blue-900" size={40} />,
      description: "Apportez votre expertise technique dans nos domaines d'intervention.",
      avantages: [
        "Collaboration sur des projets innovants",
        "Échange de compétences",
        "Formation de nos équipes",
        "Recherche et développement conjoint"
      ],
      engagement: "Selon accord"
    },
    {
      title: "Partenariat Institutionnel",
      icon: <Building className="text-orange-600" size={40} />,
      description: "Collaboration entre organisations pour un impact plus grand.",
      avantages: [
        "Mutualisation des ressources",
        "Projets conjoints",
        "Plaidoyer commun",
        "Réseau élargi"
      ],
      engagement: "Convention de partenariat"
    },
    {
      title: "Partenariat Église",
      icon: <Church className="text-blue-900" size={40} />,
      description: "Mobilisez votre église pour soutenir la mission de traduction biblique.",
      avantages: [
        "Sensibilisation de vos membres",
        "Projets de soutien adaptés",
        "Visites sur le terrain",
        "Matériel de communication fourni"
      ],
      engagement: "Flexible"
    }
  ];

  const partenairesActuels = [
    {
      nom: "Wycliffe Global Alliance",
      type: "International",
      domaine: "Traduction Biblique"
    },
    {
      nom: "SIL International",
      type: "International",
      domaine: "Linguistique"
    },
    {
      nom: "Ministère de l'Éducation",
      type: "Gouvernemental",
      domaine: "Alphabétisation"
    },
    {
      nom: "Églises Évangéliques du Bénin",
      type: "Religieux",
      domaine: "Mobilisation"
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Offres de Partenariat"
        subtitle="Ensemble, nous pouvons faire plus pour rendre la Parole de Dieu accessible à tous"
        image="/images/images2.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Devenez Partenaire
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nous croyons au pouvoir du partenariat pour accomplir notre mission. 
              Rejoignez-nous dans cette aventure extraordinaire !
            </p>
          </div>
        </ScrollAnimation>

        {/* Types de Partenariat */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Types de Partenariat
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {typesPartenariat.map((type, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 border-t-4 border-orange-600">
                  <div className="flex items-center gap-4 mb-4">
                    {type.icon}
                    <h3 className="text-2xl font-bold text-blue-900">
                      {type.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {type.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Avantages :</h4>
                    <ul className="space-y-2">
                      {type.avantages.map((avantage, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={16} />
                          <span>{avantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm font-semibold text-blue-900">Engagement : </span>
                    <span className="text-sm text-orange-600 font-medium">{type.engagement}</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Processus de Partenariat */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Comment Devenir Partenaire ?
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Contact Initial</h3>
                <p className="text-gray-700 text-sm">
                  Contactez-nous pour exprimer votre intérêt
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Rencontre</h3>
                <p className="text-gray-700 text-sm">
                  Discussion sur vos attentes et nos besoins
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Accord</h3>
                <p className="text-gray-700 text-sm">
                  Signature d'un protocole de partenariat
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-blue-900 mb-2">Collaboration</h3>
                <p className="text-gray-700 text-sm">
                  Mise en œuvre et suivi du partenariat
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Partenaires Actuels */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Nos Partenaires Actuels
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partenairesActuels.map((partenaire, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6 text-center">
                  <Globe className="mx-auto mb-4 text-orange-600" size={40} />
                  <h3 className="font-bold text-blue-900 mb-2">
                    {partenaire.nom}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{partenaire.type}</p>
                  <p className="text-sm text-orange-600 font-medium">{partenaire.domaine}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Témoignages */}
        <div className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Témoignages de Partenaires
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "Notre partenariat avec Wycliffe Bénin a permis de toucher des milliers 
                  de personnes avec la Parole de Dieu. C'est un investissement éternel."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    EG
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Église Grace</div>
                    <div className="text-sm text-gray-600">Partenaire depuis 2020</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "La collaboration technique avec Wycliffe nous a permis d'innover 
                  dans nos méthodes de travail. Une expérience enrichissante."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                    SI
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">SIL International</div>
                    <div className="text-sm text-gray-600">Partenaire historique</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-6">
                <p className="text-gray-700 italic mb-4">
                  "Grâce à ce partenariat, nous avons pu intégrer l'alphabétisation 
                  en langues locales dans nos programmes éducatifs."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    ME
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Ministère Éducation</div>
                    <div className="text-sm text-gray-600">Partenaire depuis 2018</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Avantages du Partenariat */}
        <section className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Pourquoi Devenir Partenaire ?
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition text-center border-t-4 border-orange-600">
                <Target className="mx-auto mb-4 text-orange-600" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Impact Mesurable</h3>
                <p className="text-gray-700 text-sm">
                  Suivez l'impact concret de votre contribution avec des rapports réguliers
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition text-center border-t-4 border-blue-900">
                <Heart className="mx-auto mb-4 text-blue-900" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Mission Éternelle</h3>
                <p className="text-gray-700 text-sm">
                  Participez à une œuvre qui a un impact éternel sur les vies
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition text-center border-t-4 border-orange-600">
                <Users className="mx-auto mb-4 text-orange-600" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Réseau Élargi</h3>
                <p className="text-gray-700 text-sm">
                  Rejoignez un réseau international de partenaires engagés
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scale" delay={0.4}>
              <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition text-center border-t-4 border-blue-900">
                <Award className="mx-auto mb-4 text-blue-900" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Reconnaissance</h3>
                <p className="text-gray-700 text-sm">
                  Visibilité sur nos supports et reconnaissance de votre engagement
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Projets à Soutenir */}
        <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Projets Recherchant des Partenaires
              </h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollAnimation animation="slideUp" delay={0.1}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                  <LazyImage 
                    src="/images/images1.jpeg" 
                    alt="Traduction Bariba"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-primary-50 text-orange-600 text-xs px-3 py-1 rounded-full mb-3 font-medium">
                      Traduction Biblique
                    </span>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Projet Bariba
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Traduction de l'Ancien Testament en langue Bariba. 
                      Besoin: 15 000 000 FCFA
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progression</span>
                        <span className="font-semibold text-orange-600">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group"
                    >
                      Soutenir ce projet
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                  <LazyImage 
                    src="/images/images2.jpeg" 
                    alt="Alphabétisation Dendi"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-secondary-50 text-blue-900 text-xs px-3 py-1 rounded-full mb-3 font-medium">
                      Alphabétisation
                    </span>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Programme Dendi
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Ouverture de 10 nouveaux centres d'alphabétisation. 
                      Besoin: 8 000 000 FCFA
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progression</span>
                        <span className="font-semibold text-blue-900">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-900 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group"
                    >
                      Soutenir ce projet
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                  <LazyImage 
                    src="/images/images3.jpeg" 
                    alt="Formation Traducteurs"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-primary-50 text-orange-600 text-xs px-3 py-1 rounded-full mb-3 font-medium">
                      Formation
                    </span>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Formation Traducteurs
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Formation de 20 nouveaux traducteurs bibliques. 
                      Besoin: 12 000 000 FCFA
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progression</span>
                        <span className="font-semibold text-orange-600">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition group"
                    >
                      Soutenir ce projet
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* FAQ Partenariat */}
        <section className="mb-16">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Questions Fréquentes
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto space-y-4">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <div className="bg-white rounded-card shadow-card p-6">
                <h3 className="font-bold text-blue-900 mb-2">
                  Quelle est la durée minimale d'un partenariat ?
                </h3>
                <p className="text-gray-700">
                  Nous recommandons un engagement d'au moins un an pour permettre un impact significatif. 
                  Cependant, nous sommes flexibles et pouvons adapter la durée selon vos possibilités.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card shadow-card p-6">
                <h3 className="font-bold text-blue-900 mb-2">
                  Comment puis-je suivre l'utilisation de ma contribution ?
                </h3>
                <p className="text-gray-700">
                  Vous recevrez des rapports trimestriels détaillés incluant des photos, des témoignages 
                  et des indicateurs de performance. Vous pouvez également visiter les projets sur le terrain.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card shadow-card p-6">
                <h3 className="font-bold text-blue-900 mb-2">
                  Puis-je choisir le projet spécifique à soutenir ?
                </h3>
                <p className="text-gray-700">
                  Absolument ! Nous vous présentons nos différents projets et vous choisissez celui 
                  qui correspond le mieux à votre vision et vos valeurs.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.4}>
              <div className="bg-white rounded-card shadow-card p-6">
                <h3 className="font-bold text-blue-900 mb-2">
                  Y a-t-il des avantages fiscaux ?
                </h3>
                <p className="text-gray-700">
                  Oui, en tant qu'organisation à but non lucratif, nous délivrons des reçus fiscaux 
                  permettant des déductions d'impôts selon la législation en vigueur.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Partenariat */}
        <section className="mb-16">
          <ScrollAnimation animation="slideUp">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Prêt à Devenir Partenaire ?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Notre équipe est disponible pour discuter avec vous des opportunités de partenariat 
                  et répondre à toutes vos questions.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-card p-6 shadow-card">
                    <Mail className="mx-auto mb-3 text-orange-600" size={32} />
                    <h3 className="font-bold text-blue-900 mb-2">Email</h3>
                    <a 
                      href="mailto:partenariat@wycliffebenin.org"
                      className="text-orange-600 hover:text-orange-700 transition"
                    >
                      partenariat@wycliffebenin.org
                    </a>
                  </div>
                  <div className="bg-white rounded-card p-6 shadow-card">
                    <Phone className="mx-auto mb-3 text-blue-900" size={32} />
                    <h3 className="font-bold text-blue-900 mb-2">Téléphone</h3>
                    <a 
                      href="tel:+22997000000"
                      className="text-orange-600 hover:text-orange-700 transition"
                    >
                      +229 97 00 00 00
                    </a>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg hover:scale-105"
                >
                  Prendre Contact
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Call to Action Final */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card shadow-elevated p-12 text-center">
            <Handshake className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Construisons Ensemble l'Avenir
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Votre partenariat peut transformer des vies et des communautés entières. 
              Ensemble, nous pouvons rendre la Parole de Dieu accessible à tous les peuples du Bénin !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg"
              >
                Devenir Partenaire
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/donnez"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Faire un Don
              </Link>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Partenariat;
