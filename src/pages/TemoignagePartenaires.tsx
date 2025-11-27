import { Link } from 'react-router-dom';
import { Handshake, Building, Church, Globe, Heart, Star, Quote, ArrowRight, Award, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import LazyImage from '../components/LazyImage';

const TemoignagePartenaires = () => {
  const temoignages = [
    {
      organisation: "Église Évangélique Grace",
      type: "Église Locale",
      logo: <Church className="text-orange-600" size={40} />,
      responsable: "Pasteur Emmanuel KOFFI",
      fonction: "Pasteur Principal",
      photo: "/images/images1.jpeg",
      partenariat: "Partenariat Financier",
      depuis: "2020",
      montant: "2 000 000 FCFA/an",
      citation: "Notre partenariat avec Wycliffe Bénin a permis de toucher des milliers de personnes avec la Parole de Dieu. C'est un investissement éternel qui transforme des vies et des communautés entières.",
      histoire: "L'Église Grace a commencé son partenariat en 2020 en parrainant un projet de traduction biblique. Aujourd'hui, ils soutiennent également des centres d'alphabétisation et mobilisent leurs membres pour la prière et le volontariat.",
      impact: [
        "Soutien de 2 projets de traduction",
        "Parrainage de 40 apprenants en alphabétisation",
        "Mobilisation de 150 intercesseurs",
        "Organisation de 3 événements de sensibilisation/an"
      ],
      projets: ["Traduction Fon", "Alphabétisation Abomey"]
    },
    {
      organisation: "SIL International",
      type: "Organisation Internationale",
      logo: <Globe className="text-blue-900" size={40} />,
      responsable: "Dr. Sarah JOHNSON",
      fonction: "Directrice Régionale Afrique de l'Ouest",
      photo: "/images/images2.jpeg",
      partenariat: "Partenariat Technique",
      depuis: "1981",
      montant: "Expertise technique",
      citation: "La collaboration technique avec Wycliffe Bénin est exemplaire. Ensemble, nous avons développé des méthodes innovantes qui servent maintenant de modèle pour d'autres pays.",
      histoire: "SIL International est un partenaire historique de Wycliffe Bénin. Cette collaboration a permis de former des dizaines de traducteurs et de développer des outils linguistiques de pointe pour les langues du Bénin.",
      impact: [
        "Formation de 85 traducteurs",
        "Développement de 12 systèmes d'écriture",
        "Création d'outils linguistiques numériques",
        "Recherche linguistique sur 25 langues"
      ],
      projets: ["Formation Traducteurs", "Recherche Linguistique", "Outils Numériques"]
    },
    {
      organisation: "Ministère de l'Éducation du Bénin",
      type: "Gouvernement",
      logo: <Building className="text-orange-600" size={40} />,
      responsable: "M. Didier ASSOGBA",
      fonction: "Directeur de l'Alphabétisation",
      photo: "/images/images3.jpeg",
      partenariat: "Partenariat Institutionnel",
      depuis: "2018",
      montant: "Collaboration stratégique",
      citation: "Grâce à ce partenariat, nous avons pu intégrer l'alphabétisation en langues locales dans nos programmes éducatifs nationaux. L'impact est mesurable et durable.",
      histoire: "Le Ministère de l'Éducation a reconnu l'expertise de Wycliffe Bénin en alphabétisation holistique. Cette collaboration a permis d'intégrer les langues locales dans le système éducatif national.",
      impact: [
        "Intégration dans 50 écoles publiques",
        "Formation de 120 enseignants",
        "Développement de curricula bilingues",
        "Politique nationale d'éducation multilingue"
      ],
      projets: ["Éducation Bilingue", "Formation Enseignants", "Curricula"]
    },
    {
      organisation: "Fondation Internationale pour le Développement",
      type: "ONG Internationale",
      logo: <Heart className="text-blue-900" size={40} />,
      responsable: "Mme. Claire DUBOIS",
      fonction: "Responsable Programmes Afrique",
      photo: "/images/images1.jpeg",
      partenariat: "Partenariat Financier",
      depuis: "2019",
      montant: "5 000 000 FCFA/an",
      citation: "Wycliffe Bénin est un partenaire fiable et transparent. Leurs rapports détaillés nous permettent de voir l'impact concret de chaque franc investi.",
      histoire: "La Fondation a choisi Wycliffe Bénin pour son approche holistique du développement communautaire. Le partenariat a débuté avec un projet pilote et s'est étendu à plusieurs régions.",
      impact: [
        "Financement de 5 projets majeurs",
        "Soutien de 15 centres d'alphabétisation",
        "Formation de 200 facilitateurs",
        "Équipement de 10 bibliothèques communautaires"
      ],
      projets: ["Alphabétisation Nord", "Bibliothèques", "Formation Facilitateurs"]
    },
    {
      organisation: "Union des Églises Baptistes",
      type: "Réseau d'Églises",
      logo: <Church className="text-orange-600" size={40} />,
      responsable: "Révérend Pierre DOSSOU",
      fonction: "Président de l'Union",
      photo: "/images/images2.jpeg",
      partenariat: "Partenariat Église",
      depuis: "2021",
      montant: "1 500 000 FCFA/an",
      citation: "Nos 45 églises membres sont mobilisées pour soutenir la traduction biblique. C'est notre contribution à la Grande Commission.",
      histoire: "L'Union des Églises Baptistes a lancé une campagne de mobilisation auprès de ses membres. Chaque église parraine un aspect du travail de traduction ou d'alphabétisation.",
      impact: [
        "45 églises mobilisées",
        "300 intercesseurs réguliers",
        "Collecte annuelle pour la traduction",
        "Accueil de traducteurs en formation"
      ],
      projets: ["Traduction Bariba", "Chaîne de Prière", "Mobilisation"]
    },
    {
      organisation: "Entreprise TechBénin",
      type: "Secteur Privé",
      logo: <Building className="text-blue-900" size={40} />,
      responsable: "M. Kossi AGBODJAN",
      fonction: "Directeur Général",
      photo: "/images/images3.jpeg",
      partenariat: "Partenariat RSE",
      depuis: "2022",
      montant: "3 000 000 FCFA/an",
      citation: "Notre responsabilité sociale d'entreprise trouve son sens dans ce partenariat. Nous contribuons au développement de notre pays en soutenant l'éducation.",
      histoire: "TechBénin a intégré le soutien à l'alphabétisation dans sa stratégie RSE. L'entreprise finance des centres d'alphabétisation et encourage ses employés à faire du volontariat.",
      impact: [
        "Financement de 3 centres d'alphabétisation",
        "Programme de volontariat d'entreprise",
        "Don de matériel informatique",
        "Bourses pour 20 facilitateurs"
      ],
      projets: ["Centres Cotonou", "Volontariat", "Équipement"]
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Témoignages de Partenaires"
        subtitle="Ensemble, nous transformons des vies et des communautés"
        image="/images/images2.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <Handshake className="mx-auto mb-6 text-orange-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Nos Partenaires Témoignent
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Découvrez ce que nos partenaires disent de leur collaboration avec Wycliffe Bénin 
              et l'impact qu'ils créent ensemble avec nous.
            </p>
          </div>
        </ScrollAnimation>

        {/* Statistiques Partenariat */}
        <section className="mb-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-card p-12">
          <div className="grid md:grid-cols-4 gap-6">
            <ScrollAnimation animation="scale" delay={0.1}>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Users className="mx-auto mb-3 text-orange-600" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">45+</div>
                <div className="text-gray-700 font-medium">Partenaires Actifs</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale" delay={0.2}>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Globe className="mx-auto mb-3 text-blue-900" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">12</div>
                <div className="text-gray-700 font-medium">Pays Représentés</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale" delay={0.3}>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Award className="mx-auto mb-3 text-orange-600" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">25</div>
                <div className="text-gray-700 font-medium">Projets Soutenus</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="scale" delay={0.4}>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Heart className="mx-auto mb-3 text-blue-900" size={40} />
                <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Satisfaction</div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Témoignages détaillés */}
        <section className="mb-20">
          <div className="space-y-12">
            {temoignages.map((temoignage, index) => (
              <ScrollAnimation 
                key={index} 
                animation="slideUp"
                delay={0.1}
              >
                <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto">
                      <LazyImage 
                        src={temoignage.photo} 
                        alt={temoignage.organisation}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                        {temoignage.logo}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="md:col-span-2 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-blue-900 mb-2">
                            {temoignage.organisation}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-primary-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                              {temoignage.type}
                            </span>
                            <span className="bg-secondary-50 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                              {temoignage.partenariat}
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                              Depuis {temoignage.depuis}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-orange-600 fill-primary" size={16} />
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary-50 border-l-4 border-orange-600 p-4 rounded-r-card mb-4">
                        <Quote className="text-orange-600 mb-2" size={20} />
                        <p className="text-gray-800 italic leading-relaxed">
                          "{temoignage.citation}"
                        </p>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                            {temoignage.responsable.split(' ')[0][0]}
                          </div>
                          <div>
                            <p className="font-semibold text-blue-900 text-sm">
                              {temoignage.responsable}
                            </p>
                            <p className="text-xs text-gray-600">{temoignage.fonction}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {temoignage.histoire}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-card p-4">
                          <h4 className="font-bold text-blue-900 mb-3 text-sm">
                            Impact du Partenariat
                          </h4>
                          <ul className="space-y-2">
                            {temoignage.impact.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                <span className="text-orange-600 mt-0.5">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gray-50 rounded-card p-4">
                          <h4 className="font-bold text-blue-900 mb-3 text-sm">
                            Projets Soutenus
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {temoignage.projets.map((projet, idx) => (
                              <span 
                                key={idx}
                                className="bg-white text-blue-900 px-3 py-1 rounded-full text-xs font-medium border border-secondary-200"
                              >
                                {projet}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-xs text-gray-600">Contribution annuelle</p>
                            <p className="text-lg font-bold text-orange-600">{temoignage.montant}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Types de partenaires */}
        <ScrollAnimation animation="slideUp">
          <section className="mb-20 bg-gray-50 rounded-card p-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Nos Différents Types de Partenaires
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Church className="mx-auto mb-4 text-orange-600" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Églises</h3>
                <p className="text-gray-700 text-sm">25 églises et réseaux</p>
              </div>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Globe className="mx-auto mb-4 text-blue-900" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">ONG</h3>
                <p className="text-gray-700 text-sm">12 organisations</p>
              </div>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Building className="mx-auto mb-4 text-orange-600" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Entreprises</h3>
                <p className="text-gray-700 text-sm">5 entreprises RSE</p>
              </div>
              <div className="bg-white rounded-card p-6 text-center shadow-card">
                <Users className="mx-auto mb-4 text-blue-900" size={40} />
                <h3 className="font-bold text-blue-900 mb-2">Institutions</h3>
                <p className="text-gray-700 text-sm">3 institutions publiques</p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-blue-900 to-secondary-600 rounded-card p-12 text-center text-white shadow-elevated">
            <Handshake className="mx-auto mb-6 text-white" size={60} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez Nos Partenaires
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Ensemble, nous pouvons faire plus pour rendre la Parole de Dieu accessible 
              à tous les peuples du Bénin. Devenez partenaire aujourd'hui !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partenariat"
                className="inline-flex items-center justify-center bg-white text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-button font-semibold hover:bg-orange-700 transition shadow-lg"
              >
                Devenir Partenaire
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default TemoignagePartenaires;
