import { useEffect, useRef } from 'react';
import { TrendingUp, Users, BookOpen, Globe, Award, Target } from 'lucide-react';
import { gsap } from 'gsap/dist/gsap';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import LazyImage from '../components/LazyImage';

const Statistiques = () => {
  const stats = [
    {
      categorie: "Traduction Biblique",
      donnees: [
        { label: "Langues en cours de traduction", valeur: 15, suffix: "", icon: <BookOpen className="text-orange-600" size={24} /> },
        { label: "Traductions complétées", valeur: 8, suffix: "", icon: <Award className="text-blue-900" size={24} /> },
        { label: "Traducteurs formés", valeur: 45, suffix: "", icon: <Users className="text-orange-600" size={24} /> },
        { label: "Chapitres traduits (2024)", valeur: 320, suffix: "", icon: <Target className="text-blue-900" size={24} /> }
      ]
    },
    {
      categorie: "Alphabétisation",
      donnees: [
        { label: "Centres d'alphabétisation", valeur: 28, suffix: "", icon: <Globe className="text-orange-600" size={24} /> },
        { label: "Apprenants actifs", valeur: 1250, suffix: "", icon: <Users className="text-blue-900" size={24} /> },
        { label: "Formateurs certifiés", valeur: 62, suffix: "", icon: <Award className="text-orange-600" size={24} /> },
        { label: "Taux de réussite", valeur: 87, suffix: "%", icon: <TrendingUp className="text-blue-900" size={24} /> }
      ]
    },
    {
      categorie: "Impact Communautaire",
      donnees: [
        { label: "Communautés touchées", valeur: 85, suffix: "", icon: <Globe className="text-orange-600" size={24} /> },
        { label: "Bénéficiaires directs", valeur: 50000, suffix: "+", icon: <Users className="text-blue-900" size={24} /> },
        { label: "Églises partenaires", valeur: 120, suffix: "", icon: <Target className="text-orange-600" size={24} /> },
        { label: "Bénévoles actifs", valeur: 180, suffix: "", icon: <Users className="text-blue-900" size={24} /> }
      ]
    }
  ];

  const evolutionAnnuelle = [
    { annee: "2020", traductions: 5, alphabetises: 800, communautes: 45 },
    { annee: "2021", traductions: 8, alphabetises: 950, communautes: 58 },
    { annee: "2022", traductions: 11, alphabetises: 1100, communautes: 68 },
    { annee: "2023", traductions: 13, alphabetises: 1200, communautes: 75 },
    { annee: "2024", traductions: 15, alphabetises: 1250, communautes: 85 }
  ];

  const languesParRegion = [
    { region: "Atacora-Donga", langues: 4, population: "120,000" },
    { region: "Borgou-Alibori", langues: 3, population: "95,000" },
    { region: "Mono-Couffo", langues: 2, population: "75,000" },
    { region: "Ouémé-Plateau", langues: 3, population: "110,000" },
    { region: "Zou-Collines", langues: 3, population: "88,000" }
  ];

  const BarChart = ({ data }: { data: typeof evolutionAnnuelle }) => {
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      barsRef.current.forEach((bar, index) => {
        if (bar) {
          gsap.fromTo(
            bar,
            { height: 0 },
            { 
              height: '100%', 
              duration: 1, 
              delay: index * 0.1,
              ease: 'power3.out'
            }
          );
        }
      });
    }, []);

    return (
      <div className="bg-white rounded-card p-8 shadow-card">
        <h3 className="text-xl font-bold text-blue-900 mb-6">Communautés Touchées par Année</h3>
        <div className="flex items-end justify-between gap-4 h-64">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden" style={{ height: '100%' }}>
                  <div
                    ref={el => { barsRef.current[index] = el; }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 to-primary-400 rounded-t-lg flex items-end justify-center pb-2"
                  >
                    <span className="text-white font-bold text-sm">{item.communautes}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-blue-900">{item.annee}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const LineChart = ({ data }: { data: typeof evolutionAnnuelle }) => {
    const lineRef = useRef<SVGPolylineElement>(null);

    useEffect(() => {
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.fromTo(
          lineRef.current,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
        );
      }
    }, []);

    const maxTraductions = Math.max(...data.map(d => d.traductions));
    const width = 600;
    const height = 200;
    const padding = 40;

    const points = data.map((item, index) => {
      const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((item.traductions / maxTraductions) * (height - 2 * padding));
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="bg-white rounded-card p-8 shadow-card">
        <h3 className="text-xl font-bold text-blue-900 mb-6">Évolution des Projets de Traduction</h3>
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          {/* Grille */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1={padding}
              y1={padding + (i * (height - 2 * padding) / 4)}
              x2={width - padding}
              y2={padding + (i * (height - 2 * padding) / 4)}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          ))}
          
          {/* Ligne */}
          <polyline
            ref={lineRef}
            points={points}
            fill="none"
            stroke="#ff6600"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Points */}
          {data.map((item, index) => {
            const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
            const y = height - padding - ((item.traductions / maxTraductions) * (height - 2 * padding));
            return (
              <g key={index}>
                <circle cx={x} cy={y} r="6" fill="#ff6600" />
                <text x={x} y={height - 10} textAnchor="middle" className="text-xs fill-secondary font-semibold">
                  {item.annee}
                </text>
                <text x={x} y={y - 15} textAnchor="middle" className="text-sm fill-primary font-bold">
                  {item.traductions}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full">
      <SEO 
        title="Statistiques - Wycliffe Bénin | Impact Mesurable de Notre Mission"
        description="Découvrez l'impact chiffré de Wycliffe Bénin : 15 langues en traduction, 1250 apprenants, 85 communautés touchées, 50 000+ bénéficiaires. Des résultats concrets depuis 2020."
        keywords="statistiques, impact, résultats, chiffres, Wycliffe Bénin, données, évolution, croissance, bilan"
        url="https://wycliffebenin.org/statistiques"
      />
      <HeroSection
        title="Statistiques"
        subtitle="L'impact mesurable de notre travail au Bénin"
        image='/images/projet-12.webp'
        height="medium"
        overlay="dark"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Statistiques par Catégorie */}
        {stats.map((categorie, catIndex) => (
          <section key={catIndex} className="mb-20">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">
                {categorie.categorie}
              </h2>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categorie.donnees.map((stat, index) => (
                <ScrollAnimation 
                  key={index}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-orange-600">
                    <div className="flex items-center justify-between mb-4">
                      {stat.icon}
                      <div className="text-3xl font-bold text-blue-900">
                        <AnimatedCounter 
                          end={stat.valeur} 
                          suffix={stat.suffix}
                        />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        ))}

        {/* Graphiques */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                Évolution 2020-2024
              </h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-1 gap-8 mb-8">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <LineChart data={evolutionAnnuelle} />
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <BarChart data={evolutionAnnuelle} />
              </ScrollAnimation>
            </div>

            {/* Tableau */}
            <ScrollAnimation animation="slideUp" delay={0.4}>
              <div className="bg-white rounded-card p-8 shadow-card">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Tableau Récapitulatif</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 text-blue-900 font-bold">Année</th>
                        <th className="text-center py-4 px-4 text-blue-900 font-bold">Projets de Traduction</th>
                        <th className="text-center py-4 px-4 text-blue-900 font-bold">Personnes Alphabétisées</th>
                        <th className="text-center py-4 px-4 text-blue-900 font-bold">Communautés Touchées</th>
                      </tr>
                    </thead>
                    <tbody>
                      {evolutionAnnuelle.map((annee, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                          <td className="py-4 px-4 font-bold text-orange-600">{annee.annee}</td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block bg-primary-50 text-orange-600 px-3 py-1 rounded-full font-semibold">
                              {annee.traductions}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block bg-secondary-50 text-blue-900 px-3 py-1 rounded-full font-semibold">
                              {annee.alphabetises}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-semibold">
                              {annee.communautes}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Langues par Région */}
        <section className="mb-20">
          <ScrollAnimation animation="slideUp">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Répartition par Région
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languesParRegion.map((region, index) => (
              <ScrollAnimation 
                key={index}
                animation="scale"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-l-4 border-blue-900">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Langues actives</span>
                      <span className="text-2xl font-bold text-orange-600">
                        <AnimatedCounter end={region.langues} />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Population touchée</span>
                      <span className="text-lg font-semibold text-blue-900">{region.population}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Image & Texte */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Croissance Continue
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Nos statistiques témoignent d'une croissance constante et d'un impact 
                  grandissant dans les communautés que nous servons.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Chaque chiffre représente des vies transformées par l'accès à la Parole 
                  de Dieu dans leur langue maternelle.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <LazyImage 
                src='/images/projet-12.webp' 
                alt="Impact statistique"
                className="rounded-card shadow-elevated h-80"
              />
            </ScrollAnimation>
          </div>
        </section>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <section className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-card p-12 text-center  shadow-elevated">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faites Partie de l'Histoire
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto ">
              Votre soutien nous permet de continuer à étendre notre impact et à toucher 
              encore plus de communautés avec la Parole de Dieu.
            </p>
            <a
              href="/donnez"
              className="inline-block bg-white  px-8 py-3 rounded-button font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Soutenir Notre Mission
            </a>
          </section>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Statistiques;
