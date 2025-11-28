import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Mapping des chemins vers des noms lisibles
  const pathNameMap: { [key: string]: string } = {
    'accueil': 'Accueil',
    'vision': 'Vision & Mission',
    'historique': 'Historique',
    'statistiques': 'Statistiques',
    'pourquoi-traduire': 'Pourquoi Traduire',
    'traduction-ecrite': 'Traduction Écrite',
    'traduction-orale': 'Traduction Orale',
    'traduction-alogbe': 'Traduction Alogbé',
    'traduction-visuelle': 'Traduction Visuelle',
    'alphabetisation': 'Alphabétisation',
    'transformation-communautaire': 'Transformation Communautaire',
    'recrutement': 'Recrutement Missionnaire',
    'services': 'Services',
    'contact': 'Contact',
    'donnez': 'Faire un Don',
    'intercedez': 'Intercédez',
    'engagez-vous': 'Engagez-vous',
    'partenariat': 'Partenariat',
    'actualites': 'Actualités',
    'nos-formations': 'Nos Formations',
    'nos-rdv': 'Nos Rendez-vous',
    'temoignage-traduction': 'Témoignages Traduction',
    'temoignage-alphabetisation': 'Témoignages Alphabétisation',
    'temoignage-transformation': 'Témoignages Transformation',
    'temoignage-partenaires': 'Témoignages Partenaires',
    'conseil-administration': 'Conseil d\'Administration',
    'administration-generale': 'Administration Générale',
    'cartographie': 'Cartographie',
    'vie-communautes': 'Vie des Communautés',
    'projet-jesus-film': 'Projet Jesus Film',
    'missions-exterieur': 'Missions à l\'Extérieur',
    'chaine-priere': 'Chaîne de Prière',
    'blog-alogbe': 'Blog Alogbé',
    'boutique': 'Boutique',
    'booking': 'Réservation',
    'zoom-wycliffe': 'Zoom sur Wycliffe'
  };

  // Ne pas afficher le breadcrumb sur la page d'accueil
  if (pathnames.length === 0 || (pathnames.length === 1 && pathnames[0] === 'accueil')) {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
        <ol className="flex items-center flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
          {/* Home */}
          <li className="flex items-center">
            <Link
              to="/accueil"
              className="flex items-center gap-1 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Home size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Accueil</span>
            </Link>
          </li>

          {/* Séparateur */}
          {pathnames.length > 0 && (
            <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
          )}

          {/* Pages intermédiaires et page actuelle */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = pathNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <li key={name} className="flex items-center">
                {isLast ? (
                  <span className="text-orange-600 font-semibold truncate max-w-[150px] sm:max-w-none">
                    {displayName}
                  </span>
                ) : (
                  <>
                    <Link
                      to={routeTo}
                      className="text-gray-600 hover:text-orange-600 transition-colors truncate max-w-[100px] sm:max-w-none"
                    >
                      {displayName}
                    </Link>
                    <ChevronRight size={14} className="text-gray-400 mx-1 sm:mx-2 flex-shrink-0" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
