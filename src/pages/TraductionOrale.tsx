import { Mic, Headphones, Radio, Users } from 'lucide-react';

const TraductionOrale = () => {
  const avantages = [
    {
      titre: "Accessible aux Non-Lecteurs",
      description: "Permet aux personnes non alphabétisées d'accéder à la Parole de Dieu.",
      icon: <Headphones className="text-orange-600" size={40} />
    },
    {
      titre: "Transmission Naturelle",
      description: "Respecte la tradition orale forte dans les cultures africaines.",
      icon: <Mic className="text-blue-900" size={40} />
    },
    {
      titre: "Large Diffusion",
      description: "Peut être partagé via radio, téléphones et lecteurs audio.",
      icon: <Radio className="text-orange-600" size={40} />
    },
    {
      titre: "Écoute Communautaire",
      description: "Favorise l'écoute en groupe et les discussions communautaires.",
      icon: <Users className="text-blue-900" size={40} />
    }
  ];

  const formats = [
    { nom: "Audio Bible", description: "Enregistrement complet de la Bible", icon: "🎧" },
    { nom: "Histoires Bibliques", description: "Récits bibliques racontés", icon: "📻" },
    { nom: "Chants et Cantiques", description: "Musique chrétienne en langue locale", icon: "🎵" },
    { nom: "Enseignements", description: "Messages et prédications enregistrés", icon: "🎤" }
  ];

  return (
    <div className="w-full">
      <div className="relative h-[400px] overflow-hidden">
        <img src='/images/projet-03.webp' alt="Traduction Orale" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-secondary/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Traduction Orale</h1>
              <p className="text-xl md:text-2xl text-white/90">
                La Parole de Dieu en audio pour les communautés à tradition orale
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <section className="mb-20">
          <div className="bg-primary-50 border-l-4 border-orange-600 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Pourquoi la Traduction Orale ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Dans de nombreuses communautés du Bénin, la tradition orale est le principal moyen 
              de transmission du savoir. La traduction orale permet à ces communautés d'accéder 
              à la Parole de Dieu de manière naturelle et culturellement appropriée, même sans 
              savoir lire.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Avantages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {avantages.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition border-l-4 border-orange-600">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.titre}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Formats Disponibles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((format, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="text-5xl mb-4">{format.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{format.nom}</h3>
                  <p className="text-sm text-gray-600">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Impact Communautaire</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Les enregistrements audio permettent aux familles et aux communautés d'écouter 
                ensemble la Parole de Dieu, créant des moments de partage et de discussion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ils peuvent être écoutés pendant les travaux champêtres, les déplacements ou 
                les moments de repos, intégrant ainsi la Parole dans la vie quotidienne.
              </p>
            </div>
            <img src='/images/projet-04.webp' alt="Impact" className="rounded-lg shadow-2xl" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default TraductionOrale;
