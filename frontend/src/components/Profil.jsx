/**
 * ============================================================================
 * PROFIL.JSX - Section de Présentation Personnelle
 * ============================================================================
 * 
 * @description Affiche le paragraphe de présentation/résumé du profil.
 *              Court texte décrivant le parcours et les compétences clés.
 * 
 * @position    Sous le Header, avant les expériences
 * 
 * @data        Texte statique (pas d'appel API)
 *              TODO: Possibilité de migrer vers l'API /api/profil
 * 
 * @styling     - Classe "profil" pour le conteneur
 *              - Classe "mb5" pour la marge inférieure
 * ============================================================================
 */

import React from 'react'

// ============================================================================
// COMPOSANT PROFIL
// ============================================================================

function Profil() {
    return (
        // Conteneur avec marge inférieure (mb5 = margin-bottom 5)
        <div className="profil mb5">
            {/* Titre de la section */}
            <h2>Profil</h2>
            
            {/* 
                Paragraphe de présentation
                Résume le profil professionnel en quelques phrases
            */}
            <p>
                Administrateur Systèmes & DevOps, je contribue à la conception, l'automatisation et l'exploitation d'infrastructures fiables et sécurisées, en collaboration étroite avec les équipes de développement et d'exploitation. Passionné par les technologies cloud et les pratiques DevOps, je m'efforce d'améliorer continuellement les processus de déploiement et de gestion des systèmes pour garantir une performance optimale et une disponibilité maximale des services.
            </p>
        </div>
    )
}

export default Profil
