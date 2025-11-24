import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  path: string;
  category: string;
  description: string;
}

const searchData: SearchResult[] = [
  { title: 'Accueil', path: '/accueil', category: 'Page', description: 'Page d\'accueil' },
  { title: 'Vision', path: '/vision', category: 'À propos', description: 'Notre vision et mission' },
  { title: 'Traduction Écrite', path: '/traduction-ecrite', category: 'Activités', description: 'Projets de traduction biblique' },
  { title: 'Alphabétisation', path: '/alphabetisation', category: 'Activités', description: 'Programme d\'alphabétisation holistique' },
  { title: 'Transformation Communautaire', path: '/transformation-communautaire', category: 'Activités', description: 'Impact dans les communautés' },
  { title: 'Statistiques', path: '/statistiques', category: 'À propos', description: 'Nos chiffres et impact' },
  { title: 'Contact', path: '/contact', category: 'Contact', description: 'Nous contacter' },
  { title: 'Faire un Don', path: '/donnez', category: 'Rejoignez-nous', description: 'Soutenir notre mission' },
  { title: 'Boutique', path: '/boutique', category: 'Ressources', description: 'Boutique en ligne' },
  { title: 'Blog', path: '/blog', category: 'Blog', description: 'Actualités et articles' },
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-start justify-center pt-20 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="text-gray-400" size={24} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Rechercher..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg outline-none"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-8 text-center text-gray-500">
                Commencez à taper pour rechercher...
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                Aucun résultat trouvé pour "{query}"
              </div>
            ) : (
              <div className="py-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.path}
                    onClick={onClose}
                    className="block px-4 py-3 hover:bg-gray-50 transition border-l-4 border-transparent hover:border-primary"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary mb-1">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {result.description}
                        </p>
                      </div>
                      <span className="text-xs bg-primary-50 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {result.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
            <span>Utilisez ↑↓ pour naviguer</span>
            <span>ESC pour fermer</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;
