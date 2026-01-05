/**
 * ============================================================================
 * HEADER.JSX - En-tête du CV avec informations de contact
 * ============================================================================
 * 
 * @description Affiche l'en-tête du CV comprenant :
 *              - Nom complet et titre professionnel
 *              - Informations de contact (téléphone, email, LinkedIn, permis)
 * 
 * @position    Haut de la colonne principale (main)
 * 
 * @styling     - Titre avec effet de couleur sur le nom de famille (span)
 *              - Icônes Material UI pour chaque contact
 *              - Disposition en ligne des contacts
 * 
 * @data        Données statiques (pas d'appel API)
 * ============================================================================
 */

import React from 'react'

// ============================================================================
// IMPORTS - Icônes Material UI pour les contacts
// ============================================================================
import PhoneIcon from '@mui/icons-material/Phone';           // Icône téléphone
import EmailIcon from '@mui/icons-material/Email';           // Icône email
import LinkedInIcon from '@mui/icons-material/LinkedIn';     // Icône LinkedIn
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'; // Icône permis de conduire

// Styles du composant
import './Header.css'

// ============================================================================
// COMPOSANT HEADER
// ============================================================================

function Header() {
    return (
        <header className="header">
            
            {/* Section titre - Nom et profession */}
            <div className="header__top">
                <div className="header__title">
                    {/* Nom avec le prénom normal et le nom de famille stylisé */}
                    <h1 className="header__name">Guillaume <span>Lequin</span></h1>
                    {/* Titre professionnel sous le nom */}
                    <p className="header__profession">Ingénieur DevOps</p>
                </div>
            </div>

            {/* Section contacts - Disposition horizontale */}
            <div className="header__contact">
                
                {/* Téléphone */}
                <div className="contact-item">
                    <PhoneIcon />
                    <span>06 18 08 65 12</span>
                </div>

                {/* Email avec lien mailto */}
                <div className="contact-item">
                    <EmailIcon />
                    <a href="mailto:guillaume.lequin713@gmail.com">guillaume.lequin713@gmail.com</a>
                </div>

                {/* Permis de conduire */}
                <div className="contact-item">
                    <DirectionsCarIcon />
                    <span>Permis B</span>
                </div>

                {/* LinkedIn avec lien externe */}
                <div className="contact-item">
                    <LinkedInIcon />
                    <a href="https://www.linkedin.com/in/guillaume-lequin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </header>
    )
}

export default Header
