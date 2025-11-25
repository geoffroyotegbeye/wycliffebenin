import HeroSection from '../components/HeroSection';
import ScrollAnimation from '../components/ScrollAnimation';
import { ShoppingCart, BookOpen, Shirt, Music, Gift, CreditCard } from 'lucide-react';

const Boutique = () => {
  const categories = [
    {
      nom: "Bibles et Livres",
      icon: <BookOpen className="text-primary" size={40} />,
      produits: [
        { nom: "Bible en Fon-Gbe", prix: "5 000 FCFA" },
        { nom: "Nouveau Testament Alogbé", prix: "3 000 FCFA" },
        { nom: "Livres d'alphabétisation", prix: "1 500 FCFA" },
        { nom: "Matériel pédagogique", prix: "2 000 FCFA" }
      ]
    },
    {
      nom: "Articles Promotionnels",
      icon: <Shirt className="text-secondary" size={40} />,
      produits: [
        { nom: "T-shirts Wycliffe", prix: "3 500 FCFA" },
        { nom: "Casquettes", prix: "2 500 FCFA" },
        { nom: "Sacs en toile", prix: "2 000 FCFA" },
        { nom: "Porte-clés", prix: "500 FCFA" }
      ]
    },
    {
      nom: "Médias Audio/Vidéo",
      icon: <Music className="text-primary" size={40} />,
      produits: [
        { nom: "CD Audio Bible", prix: "2 000 FCFA" },
        { nom: "DVD Jesus Film", prix: "1 500 FCFA" },
        { nom: "Clé USB Ressources", prix: "5 000 FCFA" },
        { nom: "Carte SD Audio", prix: "3 000 FCFA" }
      ]
    },
    {
      nom: "Cadeaux et Souvenirs",
      icon: <Gift className="text-secondary" size={40} />,
      produits: [
        { nom: "Calendriers", prix: "1 000 FCFA" },
        { nom: "Carnets de notes", prix: "1 500 FCFA" },
        { nom: "Marque-pages", prix: "300 FCFA" },
        { nom: "Affiches", prix: "500 FCFA" }
      ]
    }
  ];

  return (
    <div className="w-full">
      <HeroSection
        title="Boutique en Ligne"
        subtitle="Découvrez nos produits et soutenez notre mission"
        image="/images/images1.jpeg"
        height="medium"
        overlay="dark"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Notre Boutique
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tous les bénéfices de notre boutique sont réinvestis dans nos projets 
              de traduction biblique et d'alphabétisation. Chaque achat fait une différence !
            </p>
          </div>
        </ScrollAnimation>

        {/* Catégories de Produits */}
        <div className="mb-16">
          {categories.map((categorie, catIndex) => (
            <div key={catIndex} className="mb-12">
              <ScrollAnimation animation="slideUp">
                <div className="flex items-center gap-4 mb-6">
                  {categorie.icon}
                  <h2 className="text-3xl font-bold text-secondary">
                    {categorie.nom}
                  </h2>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categorie.produits.map((produit, index) => (
                  <ScrollAnimation key={index} animation="scale" delay={index * 0.1}>
                    <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition p-6">
                      <div className="w-full h-40 bg-gray-200 rounded-card mb-4 flex items-center justify-center">
                        <ShoppingCart className="text-gray-400" size={48} />
                      </div>
                      <h3 className="font-bold text-secondary mb-2">
                        {produit.nom}
                      </h3>
                      <p className="text-2xl font-bold text-primary mb-4">
                        {produit.prix}
                      </p>
                      <button className="w-full bg-primary text-white px-4 py-2 rounded-button font-semibold hover:bg-primary-600 transition">
                        Ajouter au panier
                      </button>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Informations Pratiques */}
        <ScrollAnimation animation="fadeIn">
          <div className="bg-gray-50 rounded-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Informations Pratiques
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-card p-6 shadow-card text-center">
                <CreditCard className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-bold text-secondary mb-2">Paiement</h3>
                <p className="text-gray-700 text-sm">
                  Espèces, Mobile Money, Virement bancaire
                </p>
              </div>
              <div className="bg-white rounded-card p-6 shadow-card text-center">
                <ShoppingCart className="mx-auto mb-4 text-secondary" size={40} />
                <h3 className="font-bold text-secondary mb-2">Livraison</h3>
                <p className="text-gray-700 text-sm">
                  Retrait sur place ou livraison à Cotonou (frais en sus)
                </p>
              </div>
              <div className="bg-white rounded-card p-6 shadow-card text-center">
                <Gift className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-bold text-secondary mb-2">Commandes Groupées</h3>
                <p className="text-gray-700 text-sm">
                  Réductions disponibles pour les commandes en gros
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Note Importante */}
        <ScrollAnimation animation="slideUp">
          <div className="bg-primary-50 border-l-4 border-primary rounded-card p-6 mb-16">
            <h3 className="font-bold text-secondary mb-2">📢 Boutique en Développement</h3>
            <p className="text-gray-700">
              Notre boutique en ligne est actuellement en cours de développement. 
              Pour passer commande, veuillez nous contacter directement par téléphone 
              (+229 97 00 00 00) ou email (boutique@wycliffebenin.org).
            </p>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animation="scale">
          <div className="bg-gradient-to-r from-secondary to-secondary-600 rounded-card shadow-elevated p-12 text-center">
            <ShoppingCart className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-4xl font-bold text-white mb-6">
              Commandez Dès Maintenant
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour passer votre commande et soutenir notre mission !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+22997000000"
                className="inline-block bg-primary text-white px-8 py-3 rounded-button font-semibold hover:bg-primary-600 transition shadow-lg"
              >
                Appeler Maintenant
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-button font-semibold hover:bg-white hover:text-secondary transition"
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
};

export default Boutique;
