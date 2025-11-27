import { BookOpen, Users, CheckCircle, FileText } from 'lucide-react';

const TraductionEcrite = () => {
  const etapes = [
    {
      numero: "1",
      titre: "Analyse Linguistique",
      description: "Étude approfondie de la grammaire, de la phonologie et du vocabulaire de la langue cible.",
      icon: "🔍"
    },
    {
      numero: "2",
      titre: "Formation d'Équipe",
      description: "Recrutement et formation de traducteurs locaux compétents en exégèse biblique.",
      icon: "👥"
    },
    {
      numero: "3",
      titre: "Traduction Initiale",
      description: "Première ébauche de la traduction verset par verset, chapitre par chapitre.",
      icon: "✍️"
    },
    {
      numero: "4",
      titre: "Révision par les Pairs",
      description: "Vérification et amélioration de la traduction par d'autres traducteurs.",
      icon: "👓"
    },
    {
      numero: "5",
      titre: "Test Communautaire",
      description: "Lecture publique et retours de la communauté pour assurer la clarté.",
      icon: "🗣️"
    },
    {
      numero: "6",
      titre: "Consultation",
      description: "Révision finale par des consultants en traduction biblique.",
      icon: "✅"
    },
    {
      numero: "7",
      titre: "Publication",
      description: "Impression et distribution de la Bible traduite à la communauté.",
      icon: "📖"
    }
  ];

  const projetsActifs = [
    { langue: "Fon", progression: 100, statut: "Complété" },
    { langue: "Bariba", progression: 100, statut: "Complété" },
    { langue: "Yoruba", progression: 100, statut: "Complété" },
    { langue: "Ditammari", progression: 65, statut: "En cours" },
    { langue: "Waama", progression: 45, statut: "En cours" },
    { langue: "Adja", progression: 60, statut: "En cours" }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative h-[400px] overflow-hidden">
        <img src='/images/projet-01.webp' alt="Traduction Écrite" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Traduction Écrite</h1>
              <p className="text-xl md:text-2xl text-white/90">
                Traduire la Bible écrite dans les langues locales du Bénin pour que chacun puisse lire la Parole de Dieu
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-orange-600">
              <BookOpen className="mx-auto mb-4 text-orange-600" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-gray-700">Langues en traduction</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-blue-900">
              <Users className="mx-auto mb-4 text-blue-900" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">45</div>
              <p className="text-gray-700">Traducteurs formés</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-orange-600">
              <CheckCircle className="mx-auto mb-4 text-orange-600" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">8</div>
              <p className="text-gray-700">Traductions complètes</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center border-t-4 border-blue-900">
              <FileText className="mx-auto mb-4 text-blue-900" size={40} />
              <div className="text-4xl font-bold text-blue-900 mb-2">320</div>
              <p className="text-gray-700">Chapitres traduits (2024)</p>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Processus de Traduction</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition">
                <div className="text-5xl mb-4">{etape.icon}</div>
                <div className="text-3xl font-bold text-orange-600 mb-2">{etape.numero}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{etape.titre}</h3>
                <p className="text-sm text-gray-600">{etape.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projets Actifs */}
        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Projets Actifs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projetsActifs.map((projet, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-blue-900">{projet.langue}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      projet.statut === 'Complété' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {projet.statut}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progression</span>
                      <span className="font-bold text-blue-900">{projet.progression}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${projet.progression === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: `${projet.progression}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image et Texte */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src='/images/projet-02.webp' alt="Traduction" className="rounded-lg shadow-2xl" />
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">L'Importance de l'Écrit</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                La traduction écrite permet aux gens de lire et relire la Parole de Dieu, de l'étudier 
                en profondeur et de la méditer personnellement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Elle crée également une base pour l'alphabétisation, l'éducation et le développement 
                de littérature dans les langues locales.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TraductionEcrite;
