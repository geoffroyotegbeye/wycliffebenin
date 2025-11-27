import { Video, Eye, Film, Smartphone } from 'lucide-react';

const TraductionVisuelle = () => {
  const caracteristiques = [
    {
      titre: "Vidéos Bibliques",
      description: "Histoires bibliques en vidéo avec narration en langue locale.",
      icon: <Video className="text-orange-600" size={40} />
    },
    {
      titre: "Accessible à Tous",
      description: "Compréhensible même pour ceux qui ne savent ni lire ni écrire.",
      icon: <Eye className="text-blue-900" size={40} />
    },
    {
      titre: "Impact Visuel",
      description: "Les images renforcent la compréhension et la mémorisation.",
      icon: <Film className="text-orange-600" size={40} />
    },
    {
      titre: "Distribution Mobile",
      description: "Diffusion via smartphones, tablettes et projecteurs.",
      icon: <Smartphone className="text-blue-900" size={40} />
    }
  ];

  return (
    <div className="w-full">
      <div className="relative h-[400px] overflow-hidden">
        <img src="/images/images3.jpeg" alt="Traduction Visuelle" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Traduction Visuelle</h1>
              <p className="text-xl md:text-2xl text-white/90">
                La Bible en images et vidéos pour une compréhension universelle
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section className="mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Le Pouvoir de l'Image</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La traduction visuelle utilise des vidéos, des films et des animations pour raconter 
              les histoires bibliques. Cette approche est particulièrement efficace dans les cultures 
              orales et visuelles où l'apprentissage se fait par l'observation et l'écoute.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Caractéristiques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caracteristiques.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition border-t-4 border-orange-600">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.titre}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="/images/images1.jpeg" alt="Vidéos" className="rounded-lg shadow-2xl" />
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Projets en Cours</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-blue-900">Film JESUS</h4>
                      <p className="text-gray-700 text-sm">Doublage en langues locales</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-blue-900">Histoires Bibliques Animées</h4>
                      <p className="text-gray-700 text-sm">Création de contenus originaux</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 text-2xl">•</span>
                    <div>
                      <h4 className="font-bold text-blue-900">Application Mobile</h4>
                      <p className="text-gray-700 text-sm">Plateforme de diffusion vidéo</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-600 to-primary-600 rounded-2xl p-12 text-center text-white">
          <Film className="mx-auto mb-6 text-white" size={60} />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Découvrez Nos Vidéos</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Explorez notre bibliothèque de vidéos bibliques en langues locales
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Voir les Vidéos
          </button>
        </section>

      </div>
    </div>
  );
};

export default TraductionVisuelle;
