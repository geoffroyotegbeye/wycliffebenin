import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Wycliffe Bénin - Traduction Biblique et Alphabétisation",
  description = "Wycliffe Bénin œuvre pour rendre la Parole de Dieu accessible à tous les peuples du Bénin dans leur langue maternelle à travers la traduction biblique et l'alphabétisation holistique.",
  keywords = "Wycliffe, Bénin, traduction biblique, alphabétisation, langues locales, Bible, mission, développement communautaire",
  image = "https://wycliffebenin.org/images/logo-wycliffebenin.png",
  url = "https://wycliffebenin.com",
  type = "website"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Meta tags principaux */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Wycliffe Bénin" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
