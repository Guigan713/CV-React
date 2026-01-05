/**
 * ============================================================================
 * CERTIFICATIONS.JSX - Section Diplômes & Certifications
 * ============================================================================
 * 
 * @description Affiche la liste des diplômes et certifications obtenus.
 *              Format simplifié : liste à puces avec titre uniquement
 * 
 * @position    Dernière section dans FormationsExperiences
 *              Après les Formations
 * 
 * @props       {Array} datas - Liste des certifications depuis l'API
 *              Structure: [{
 *                id: number,
 *                title: string
 *              }]
 * 
 * @layout      Liste verticale avec puces (bullets)
 *              Différent des autres sections (pas de grille date/détails)
 * ============================================================================
 */

import React from 'react'

// ============================================================================
// COMPOSANT CERTIFICATIONS
// ============================================================================

/**
 * @param {Object} props
 * @param {Array} props.datas - Tableau des certifications
 */
function Certifications(props) {
    return (
        // Conteneur avec classes "cursus" (style commun) et "certifications" (spécifique)
        <div className="cursus certifications">
            {/* Titre de la section */}
            <h2>Diplômes & Certifications</h2>
            
            {/* Liste des certifications */}
            <div className="certifications-list">
                {props.datas.map((data) => (
                    // Item de certification avec puce et titre
                    <div key={data.id} className="certification-item">
                        {/* Puce décorative (bullet point stylisé) */}
                        <div className="certification-bullet"></div>
                        {/* Titre de la certification */}
                        <p className="certification-title">{data.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications
