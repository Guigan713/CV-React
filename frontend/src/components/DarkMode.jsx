/**
 * ============================================================================
 * DARKMODE.JSX - Composant Toggle Mode Sombre/Clair
 * ============================================================================
 * 
 * @description Bouton permettant de basculer entre le thème clair et sombre.
 *              Persiste le choix dans le localStorage du navigateur.
 * 
 * @position    Zone d'actions en haut à droite de l'application
 *              À côté du bouton d'export PDF
 * 
 * @functionality
 *              - Lit la préférence sauvegardée au chargement
 *              - Applique la classe "light" ou "dark" au body
 *              - Change l'icône selon le thème actuel (soleil/lune)
 *              - Sauvegarde le choix dans localStorage
 * 
 * @icons       - Brightness2OutlinedIcon (🌙) : Mode clair actif → cliquer pour sombre
 *              - WbSunnyOutlinedIcon (☀️) : Mode sombre actif → cliquer pour clair
 * 
 * @storage     localStorage.theme = "light" | "dark"
 * 
 * @hooks       useState : Gestion de l'état du thème pour le re-render de l'icône
 * ============================================================================
 */

import React from 'react'
import { useState } from 'react'

// ============================================================================
// IMPORTS - Icônes Material UI
// ============================================================================
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';      // Icône soleil (mode sombre)
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined'; // Icône lune (mode clair)

// ============================================================================
// COMPOSANT DARKMODE
// ============================================================================

function DarkMode() {
    // ========================================================================
    // ÉTATS ET CONSTANTES
    // ========================================================================
    
    const [themeMode, setThemeMode] = useState(("light"))  // État pour forcer le re-render
    let clickedClass = "clicked"                            // Classe CSS pour le bouton actif
    const body = document.body                              // Référence au body pour appliquer les classes
    const lightTheme = "light"                              // Constante thème clair
    const darkTheme = "dark"                                // Constante thème sombre
    let theme                                               // Variable pour stocker le thème courant

    // ========================================================================
    // INITIALISATION - Lecture du localStorage
    // ========================================================================
    
    // Récupérer la préférence sauvegardée
    if (localStorage) {
        theme = localStorage.getItem("theme")
    }

    // Appliquer le thème sauvegardé ou le thème clair par défaut
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    // ========================================================================
    // GESTIONNAIRE DE CHANGEMENT DE THÈME
    // ========================================================================
    
    /**
     * Bascule entre les thèmes clair et sombre
     * @param {Event} e - Événement du clic
     */
    const switchTheme = e => {
        if(theme === darkTheme) {
            // Passage de sombre → clair
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "light")
            theme = lightTheme
        } else {
            // Passage de clair → sombre
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
        // Met à jour l'état pour re-render l'icône
        setThemeMode(theme)
    }

    // ========================================================================
    // RENDU JSX
    // ========================================================================
    
    return (
        <button 
            className={theme === "dark" ? clickedClass : ""} 
            id="darkMode" 
            onClick={e => switchTheme(e)}
        >
            {/* 
                Affichage conditionnel de l'icône :
                - Mode clair : affiche lune (pour indiquer qu'on peut passer en sombre)
                - Mode sombre : affiche soleil (pour indiquer qu'on peut passer en clair)
            */}
            {themeMode === "light" || theme === "light" ? 
                <Brightness2OutlinedIcon />
                : (
                <WbSunnyOutlinedIcon />
            )}
        </button>
    )
}

export default DarkMode
