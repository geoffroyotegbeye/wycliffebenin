import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Accueil from './pages/Accueil';
import Vision from './pages/Vision';
import ConseilAdministration from './pages/ConseilAdministration';
import AdministrationGenerale from './pages/AdministrationGenerale';
import Historique from './pages/Historique';
import Statistiques from './pages/Statistiques';
import PourquoiTraduire from './pages/PourquoiTraduire';
import Cartographie from './pages/Cartographie';
import TransformationCommunautaire from './pages/TransformationCommunautaire';
import TraductionAlogbe from './pages/TraductionAlogbe';
import TraductionEcrite from './pages/TraductionEcrite';
import TraductionOrale from './pages/TraductionOrale';
import TraductionVisuelle from './pages/TraductionVisuelle';
import ProjetJesusFilm from './pages/ProjetJesusFilm';
import Alphabetisation from './pages/Alphabetisation';
import Intercedez from './pages/Intercedez';
import EngagezVous from './pages/EngagezVous';
import Donnez from './pages/Donnez';
import NosRdv from './pages/NosRdv';
import NosFormations from './pages/NosFormations';
import Services from './pages/Services';
import Partenariat from './pages/Partenariat';
import Recrutement from './pages/Recrutement';
import Boutique from './pages/Boutique';
import Booking from './pages/Booking';
import TemoignageTransformation from './pages/TemoignageTransformation';
import TemoignageTraduction from './pages/TemoignageTraduction';
import TemoignageAlphabetisation from './pages/TemoignageAlphabetisation';
import TemoignagePartenaires from './pages/TemoignagePartenaires';
import Actualites from './pages/Actualites';
import MissionsExterieur from './pages/MissionsExterieur';
import VieCommunautes from './pages/VieCommunautes';
import ZoomWycliffe from './pages/ZoomWycliffe';
import ChainePriere from './pages/ChainePriere';
import BlogAlogbe from './pages/BlogAlogbe';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/accueil" replace />} />
          <Route path="accueil" element={<Accueil />} />
          
          {/* A propos */}
          <Route path="vision" element={<Vision />} />
          <Route path="conseil-administration" element={<ConseilAdministration />} />
          <Route path="administration-generale" element={<AdministrationGenerale />} />
          <Route path="historique" element={<Historique />} />
          <Route path="statistiques" element={<Statistiques />} />
          
          {/* Activités */}
          <Route path="pourquoi-traduire" element={<PourquoiTraduire />} />
          <Route path="cartographie" element={<Cartographie />} />
          <Route path="transformation-communautaire" element={<TransformationCommunautaire />} />
          <Route path="traduction-alogbe" element={<TraductionAlogbe />} />
          <Route path="traduction-ecrite" element={<TraductionEcrite />} />
          <Route path="traduction-orale" element={<TraductionOrale />} />
          <Route path="traduction-visuelle" element={<TraductionVisuelle />} />
          <Route path="projet-jesus-film" element={<ProjetJesusFilm />} />
          <Route path="alphabetisation" element={<Alphabetisation />} />
          
          {/* Rejoignez-nous */}
          <Route path="intercedez" element={<Intercedez />} />
          <Route path="engagez-vous" element={<EngagezVous />} />
          <Route path="donnez" element={<Donnez />} />
          <Route path="nos-rdv" element={<NosRdv />} />
          <Route path="nos-formations" element={<NosFormations />} />
          
          {/* Ressources */}
          <Route path="services" element={<Services />} />
          <Route path="partenariat" element={<Partenariat />} />
          <Route path="recrutement" element={<Recrutement />} />
          <Route path="boutique" element={<Boutique />} />
          <Route path="booking" element={<Booking />} />
          
          {/* Témoignages */}
          <Route path="temoignage-transformation" element={<TemoignageTransformation />} />
          <Route path="temoignage-traduction" element={<TemoignageTraduction />} />
          <Route path="temoignage-alphabetisation" element={<TemoignageAlphabetisation />} />
          <Route path="temoignage-partenaires" element={<TemoignagePartenaires />} />
          
          {/* Blog */}
          <Route path="actualites" element={<Actualites />} />
          <Route path="missions-exterieur" element={<MissionsExterieur />} />
          <Route path="vie-communautes" element={<VieCommunautes />} />
          <Route path="zoom-wycliffe" element={<ZoomWycliffe />} />
          <Route path="chaine-priere" element={<ChainePriere />} />
          <Route path="blog-alogbe" element={<BlogAlogbe />} />
          
          {/* Contact */}
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
