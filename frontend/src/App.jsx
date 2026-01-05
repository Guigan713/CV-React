/**
 * ============================================================================
 * APP.JSX - Composant Principal de l'Application CV React
 * ============================================================================
 * 
 * @description Point d'entrée principal de l'application CV.
 *              Gère la mise en page globale et la fonctionnalité d'export PDF.
 * 
 * @structure   Layout en 2 colonnes (CSS Grid) :
 *              - Sidebar (gauche) : Compétences, soft skills, langues, stack tech, projets
 *              - Main (droite) : Header, Profil, Expériences, Formations, Certifications
 * 
 * @features    - Export PDF via window.print() avec styles optimisés pour l'impression
 *              - Mode sombre/clair (DarkMode component)
 *              - Responsive design
 * 
 * @author      Guillaume Lequin
 * ============================================================================
 */

// ============================================================================
// IMPORTS
// ============================================================================

// Composants de l'application
import DarkMode from './components/DarkMode';              // Toggle mode sombre/clair
import FormationsExperiences from './components/FormationsExperiences'; // Section expériences + formations + certifications
import Profil from './components/Profil';                  // Paragraphe de présentation
import Header from './components/Header';                  // En-tête avec nom, titre et contacts
import Sidebar from './components/Sidebar';                // Barre latérale avec compétences

// Icônes Material UI
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

// Styles globaux
import './App.css';

// ============================================================================
// COMPOSANT PRINCIPAL
// ============================================================================

function App() {

  /**
   * Gestionnaire d'export PDF
   * --------------------------
   * Prépare le document pour l'impression en :
   * 1. Définissant la largeur au format A4 (210mm)
   * 2. Ajoutant la classe cv-print pour les styles d'impression
   * 3. Désactivant le mode sombre pour une impression propre
   * 4. Déclenchant window.print() après application des styles
   * 5. Restaurant les styles originaux après impression
   */
  const handleGenerateCv = () => {
    const cvTemplate = document.getElementById("cv-print")
    if (!cvTemplate) return
    
    // Préparation des styles d'impression : largeur A4 et désactivation du mode sombre
    cvTemplate.style.width = "210mm"
    cvTemplate.classList.add("cv-print")
    document.body.classList.remove("dark")
    
    // Délai pour permettre l'application des styles avant l'impression
    setTimeout(() => {
      window.print()
      // Restauration des styles originaux après impression
      cvTemplate.style.width = "100%"
      cvTemplate.classList.remove("cv-print")
    }, 300)
  }

  // ==========================================================================
  // RENDU JSX
  // ==========================================================================
  return (
    // Conteneur principal avec ID pour l'export PDF
    <div id={"cv-print"} className="App">
      
      {/* 
        Zone d'actions (haut droit) - Masquée à l'impression 
        Contient : bouton mode sombre + bouton export PDF
      */}
      <div className="actions no-print">
        <DarkMode />
        <button onClick={handleGenerateCv} title="Télécharger PDF"> 
          <PictureAsPdfOutlinedIcon />
        </button>
      </div>

      {/* 
        Grille principale du CV - Layout 2 colonnes
        CSS Grid : sidebar (1fr) | main (2fr)
      */}
      <div className="grid__container">
        
        {/* Colonne gauche - Sidebar avec fond coloré */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Colonne droite - Contenu principal */}
        <div className="main">
          <Header />              {/* Nom, profession, contacts */}
          <Profil />              {/* Paragraphe de présentation */}
          <FormationsExperiences /> {/* Expériences + Formations + Certifications */}
        </div>
      </div>
    </div>
  );
}

export default App;
