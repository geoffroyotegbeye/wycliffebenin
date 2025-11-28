import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation simple de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);
    
    // Simuler l'envoi (à remplacer par un vrai appel API)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'hover:bg-red-600' }
  ];

  const quickLinks = [
    { label: 'Contactez-nous', path: '/contact' },
    { label: 'Impliquez-vous', path: '/rejoignez-nous' },
    { label: 'À Propos', path: '/vision' },
    { label: 'Boutique', path: '/boutique' },
    { label: 'Blog', path: '/blog' },
    { label: 'Ressources', path: '/ressources' }
  ];

  const recentPosts = [
    { title: 'Transition de leadership : Nouveau Directeur Exécutif', date: '9 Octobre 2024' },
    { title: 'Dédicace de la Bible - Nouveau Testament Alogbé', date: '12 Septembre 2024' },
    { title: '15 âmes précieuses ont répondu à l\'appel !', date: '15 Août 2024' }
  ];

  return (
    <footer className="text-white mt-16" style={{ backgroundColor: '#001f5f' }}>
      {/* Newsletter Section */}
      <div className="py-6 sm:py-8" style={{ backgroundColor: '#ff6600' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Restez Informé</h3>
              <p className="text-sm sm:text-base text-white/90">Inscrivez-vous à notre newsletter pour recevoir nos actualités</p>
            </div>
            
            {isSubmitted ? (
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-button">
                <CheckCircle size={20} className="text-white" />
                <span className="text-white font-semibold text-sm sm:text-base">Merci pour votre inscription !</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre email"
                      required
                      disabled={isSubmitting}
                      className="px-3 sm:px-4 py-2 sm:py-3 rounded-l-button w-full md:w-80 text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-r-button font-semibold hover:bg-blue-950 transition flex items-center gap-2 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span className="hidden sm:inline">Envoi...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                          <span className="hidden sm:inline">S'inscrire</span>
                        </>
                      )}
                    </button>
                  </div>
                  {error && (
                    <p className="text-white text-xs sm:text-sm bg-red-500/20 px-3 py-1 rounded">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            
            {/* À Propos de Nous */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/images/logo-wycliffebenin.png"
                  alt="Wycliffe BENIN"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">
                Wycliffe BENIN
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 sm:mb-6">
                Depuis 2004, association chrétienne autorisée contribuant au salut et au développement 
                de tous les peuples à travers la traduction biblique et l'alphabétisation.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 p-2 sm:p-3 rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Liens Rapides */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white relative inline-block">
                Liens Rapides
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-orange-600 transition-all duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight size={14} className="sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white relative inline-block">
                Contactez-nous
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600"></span>
              </h3>
              <ul className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                <li className="flex items-start text-gray-300 text-sm group">
                  <MapPin size={18} className="sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <span>02 BP 348 Cotonou, Bénin</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <Phone size={18} className="sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+22966393434" className="hover:text-orange-600 transition">
                      +229 66 39 34 34
                    </a>
                    <a href="tel:+22964231808" className="hover:text-orange-600 transition">
                      +229 64 23 18 08
                    </a>
                  </div>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <Mail size={18} className="sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <a href="mailto:infos@wycliffebenin.org" className="hover:text-orange-600 transition break-all">
                    infos@wycliffebenin.org
                  </a>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <Clock size={18} className="sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p>Lun - Ven: 8h00 - 16h30</p>
                    <p className="text-xs text-gray-400 mt-1">Sam - Dim: Fermé</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Articles Récents */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white relative inline-block">
                Articles Récents
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600"></span>
              </h3>
              <ul className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                {recentPosts.map((post, index) => (
                  <li key={index}>
                    <Link to="/actualites" className="group block">
                      <p className="text-sm font-medium text-gray-300 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1 sm:mt-2">
                        <Clock size={12} className="text-orange-600 flex-shrink-0" />
                        <p className="text-xs text-gray-400">{post.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Wycliffe BENIN. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <Link to="/politique-confidentialite" className="text-gray-300 hover:text-orange-600 transition whitespace-nowrap">
                Politique de confidentialité
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/conditions-utilisation" className="text-gray-300 hover:text-orange-600 transition whitespace-nowrap">
                Conditions d'utilisation
              </Link>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <Link to="/mentions-legales" className="text-gray-300 hover:text-orange-600 transition whitespace-nowrap">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
