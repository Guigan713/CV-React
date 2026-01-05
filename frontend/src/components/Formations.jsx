/**
 * ============================================================================
 * FORMATIONS.JSX - Section Formations Académiques
 * ============================================================================
 * 
 * @description Affiche la liste des formations et études.
 *              Chaque formation comprend :
 *              - Date/période
 *              - Intitulé de la formation
 *              - Établissement/lieu
 * 
 * @position    Deuxième section dans FormationsExperiences
 *              Après les Expériences, avant les Certifications
 * 
 * @props       {Array} datas - Liste des formations depuis l'API
 *              Structure: [{
 *                id: number,
 *                date: string,
 *                title: string,
 *                location: string
 *              }]
 * 
 * @layout      Grille 2 colonnes : Date | Détails
 *              Même structure que Experiences mais sans missions
 * ============================================================================
 */

import React from 'react'

// ============================================================================
// COMPOSANT FORMATIONS
// ============================================================================

/**
 * @param {Object} props
 * @param {Array} props.datas - Tableau des formations (destructuré directement)
 */
function Formations({datas}) {
    return (
        // Conteneur avec marge inférieure (mb3)
        <div className="cursus mb3">
            {/* Titre de la section */}
            <h2 className="h2">Formations</h2>
            
            {/* Boucle sur chaque formation */}
            {datas.map(item => 
                // Ligne de grille pour chaque formation
                <div className="grid__row" key={item.id}>
                    
                    {/* Colonne gauche : Date/Période */}
                    <div className="grid__item">
                        <p className="grid__date">{item.date}</p>
                    </div>
                    
                    {/* Colonne droite : Détails de la formation */}
                    <div className="grid__item">
                        {/* Intitulé de la formation */}
                        <h3 className="grid__title">{item.title}</h3>
                        {/* Établissement / Lieu */}
                        <p className="grid__location">{item.location}</p>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Formations
