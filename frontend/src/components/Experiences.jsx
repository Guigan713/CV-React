/**
 * ============================================================================
 * EXPERIENCES.JSX - Section Expériences Professionnelles
 * ============================================================================
 * 
 * @description Affiche la liste des expériences professionnelles.
 *              Chaque expérience comprend :
 *              - Date/période
 *              - Titre du poste
 *              - Entreprise/lieu
 *              - Description
 *              - Liste des missions réalisées
 * 
 * @position    Première section dans FormationsExperiences
 * 
 * @props       {Array} datas - Liste des expériences depuis l'API
 *              Structure: [{
 *                id: number,
 *                date: string,
 *                title: string,
 *                location: string,
 *                text: string,
 *                missions: [{ id: number, title: string }]
 *              }]
 * 
 * @layout      Grille 2 colonnes : Date | Détails
 * ============================================================================
 */

import React from "react"

// ============================================================================
// COMPOSANT EXPERIENCES
// ============================================================================

function Experiences(props) {
  // Extraction des données depuis les props
  const datas = props.datas

  return (
    // Conteneur principal avec classe "cursus" pour le styling
    <div className="cursus">
      {/* Titre de la section */}
      <h2>Expériences professionelles</h2>
      
      {/* Boucle sur chaque expérience */}
      {datas.map(item => (
        // Ligne de la grille pour chaque expérience
        <div className="grid__row" key={item.id}>
          
          {/* Colonne gauche : Date/Période */}
          <div className="grid__item">
            <p className="grid__date">{item.date}</p>
          </div>
          
          {/* Colonne droite : Détails de l'expérience */}
          <div className="grid__item">
            {/* Titre du poste */}
            <h3 className="grid__title">{item.title}</h3>
            
            {/* Entreprise / Lieu */}
            <p className="grid__location">{item.location}</p>
            
            {/* Description du poste */}
            <p className="grid__text">{item.text}</p>
            
            {/* Liste des missions réalisées */}
            <ul className="grid__missions">
              {item.missions.map(mission => (
                <li className="grid__mission" key={mission.id}>
                  {mission.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experiences