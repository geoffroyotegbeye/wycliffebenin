import { TrendingUp, Users, BookOpen, Globe, Award, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import LazyImage from '../components/LazyImage';

const Statistiques = () => {
  const stats = [
    {
      categorie: "Traduction Biblique",
      donnees: [
        { label: "Langues en cours de traduction", valeur: "15", icon: <BookOpen className="text-primary" size={24} /> },
        { label: "Traductions complétées", valeur: "8", icon: <Award className="text-secondary" size={24} /> },
        { label: "Traducteurs formés", valeur: "45", icon: <Users className="text-primary" size={24} /> },
        { label: "Chapitres traduits (2024)", valeur: "320", icon: <Target className="text-secondary" size={24} /> }
      ]
    },
    {
      categorie: "Alphabétisation",
      donnees: [
        { label: "Centres d'alphabétisation", valeur: "28", icon: <Globe className="text-primary" size={24} /> },
        { label: "Apprenants actifs", valeur: "1,250", icon: <Users className="text-secondary" size={24} /> },
        { label: "Formateurs certifiés", valeur: "62", icon: <Award className="text-primary" size={24} /> },
        { label: "Taux de réussite", valeur: "87%", icon: <TrendingUp className="text-secondary" size={24} /> }
      ]
    },
    {
      categorie: "Impact Communautaire",
      donnees: [
        { label: "Communautés touchées", valeur: "85", icon: <Globe className="text-primary" size={24} /> },
        { label: "Bénéficiaires directs", valeur: "50,000+", icon: <Users className="text-secondary" size={24} /> },
        { label: "Églises partenaires", valeur: "120", icon: <Target className="text-primary" size={24} /> },
        { label: "Bénévoles actifs", valeur: "180", icon: <Users className="text-secondary" size={24} /> }
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

  const chartData = evolutionAnnuelle.map(item => ({
    annee: item.annee,
    'Projets de Traduction': item.traductions,
    'Personnes Alphabétisées': Math.floor(item.alphabetises / 100),
    'Communautés': item.communautes
  }));

  const languesParRegion = [
    { region: "Atacora-Donga", langues: 4, population: "120,000" },
    { region: "Borgou-Alibori", langues: 3, population: "95,000" },
    { region: "Mono-Couffo", langues: 2, population: "75,000" },
    { region: "Ouémé-Plateau", langues: 3, population: "110,000" },
    { region: "Zou-Collines", langues: 3, population: "88,000" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden bg-gradient-to-r from-secondary to-secondary-600">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollAnimation animation="slideUp">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Statistiques
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                L'impact mesurable de notre travail au Bénin
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Statistiques par Catégorie */}
        {stats.map((categorie, catIndex) => (
          <section key={catIndex} className="mb-20">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-secondary mb-8">
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
                  <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-t-4 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      {stat.icon}
                      <div className="text-3xl font-bold text-secondary">
                        <AnimatedCounter 
                          end={parseInt(stat.valeur.replace(/[^0-9]/g, ''))} 
                          suffix={stat.valeur.includes('%') ? '%' : stat.valeur.includes('+') ? '+' : ''}
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

        {/* Évolution Annuelle avec Graphiques */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation animation="slideUp">
              <h2 className="text-4xl font-bold text-secondary mb-8 text-center">
                Évolution 2020-2024
              </h2>
            </ScrollAnimation>

            {/* Graphique en ligne */}
            <ScrollAnimation animation="slideUp" delay={0.2}>
              <div className="bg-white rounded-card p-8 shadow-card mb-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Croissance des Projets</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="annee" stroke="#001f5f" />
                    <YAxis stroke="#001f5f" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '2px solid #ff6600',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="Projets de Traduction" 
                      stroke="#ff6600" 
                      strokeWidth={3}
                      dot={{ fill: '#ff6600', r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Personnes Alphabétisées" 
                      stroke="#001f5f" 
                      strokeWidth={3}
                      dot={{ fill: '#001f5f', r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </ScrollAnimation>

            {/* Graphique en barres */}
            <ScrollAnimation animation="slideUp" delay={0.3}>
              <div className="bg-white rounded-card p-8 shadow-card mb-8">
                <h3 className="text-xl font-bold text-secondary mb-6">Communautés Touchées</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="annee" stroke="#001f5f" />
                    <YAxis stroke="#001f5f" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '2px solid #ff6600',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="Communautés" fill="#ff6600" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ScrollAnimation>

            {/* Tableau */}
            <ScrollAnimation animation="slideUp" delay={0.4}>
              <div className="bg-white rounded-card p-8 shadow-card">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 text-secondary font-bold">Année</th>
                        <th className="text-center py-4 px-4 text-secondary font-bold">Projets de Traduction</th>
                        <th className="text-center py-4 px-4 text-secondary font-bold">Personnes Alphabétisées</th>
                        <th className="text-center py-4 px-4 text-secondary font-bold">Communautés Touchées</th>
                      </tr>
                    </thead>
                    <tbody>
                      {evolutionAnnuelle.map((annee, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition">
                          <td className="py-4 px-4 font-bold text-primary">{annee.annee}</td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block bg-primary-50 text-primary px-3 py-1 rounded-full font-semibold">
                              {annee.traductions}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <span className="inline-block bg-secondary-50 text-secondary px-3 py-1 rounded-full font-semibold">
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
            <h2 className="text-4xl font-bold text-secondary mb-8 text-center">
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
                <div className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition border-l-4 border-secondary">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Langues actives</span>
                      <span className="text-2xl font-bold text-primary">
                        <AnimatedCounter end={region.langues} />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Population touchée</span>
                      <span className="text-lg font-semibold text-secondary">{region.population}</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Graphique Visuel */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation animation="slideRight">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">
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
                src="/images/images3.jpeg" 
                alt="Impact statistique"
                className="rounded-card shadow-elevated h-80"
              />
            </ScrollAnimation>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faites Partie de l'Histoire
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Votre soutien nous permet de continuer à étendre notre impact et à toucher 
            encore plus de communautés avec la Parole de Dieu.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Soutenir Notre Mission
          </button>
        </section>

      </div>
    </div>
  );
};

export default Statistiques;
