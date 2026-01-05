/**
 * ============================================================================
 * SIDEBAR.JSX - Barre Latérale du CV
 * ============================================================================
 * 
 * @description Composant sidebar affichant les informations complémentaires :
 *              - Compétences techniques (groupées par catégorie)
 *              - Soft Skills (qualités personnelles)
 *              - Langues parlées
 *              - Stack Technique (icônes des technologies)
 *              - Projets personnels avec QR code vers le portfolio
 * 
 * @position    Colonne gauche du CV (fond terracotta/marron)
 * 
 * @data        Toutes les données proviennent de l'API backend PostgreSQL
 *              via les fonctions du service api.js
 * 
 * @hooks       - useState : Gestion des états locaux pour chaque section
 *              - useEffect : Chargement asynchrone des données au montage
 * 
 * @api         - fetchCompetences() : /api/competences
 *              - fetchSoftSkills() : /api/soft-skills
 *              - fetchLanguages() : /api/languages
 *              - fetchStackTech() : /api/stack-tech
 *              - fetchProjects() : /api/projects
 * ============================================================================
 */

import React, { useState, useEffect } from 'react'

// Service API pour récupérer les données du backend
import { fetchCompetences, fetchSoftSkills, fetchLanguages, fetchStackTech, fetchProjects } from '../services/api'

// Styles du composant
import './Sidebar.css'

// ============================================================================
// COMPOSANT SIDEBAR
// ============================================================================

function Sidebar() {
    // ========================================================================
    // ÉTATS LOCAUX (useState)
    // ========================================================================
    
    const [competences, setCompetences] = useState({})   // Objet groupé par catégorie
    const [softSkills, setSoftSkills] = useState([])     // Liste des soft skills
    const [langues, setLangues] = useState([])           // Liste des langues
    const [stackTech, setStackTech] = useState([])       // Liste des technologies
    const [projects, setProjects] = useState([])         // Liste des projets (non utilisé actuellement)
    const [loading, setLoading] = useState(true)         // État de chargement
    const [error, setError] = useState(null)             // Message d'erreur éventuel

    // ========================================================================
    // EFFET DE CHARGEMENT (useEffect)
    // ========================================================================
    
    /**
     * Charge toutes les données de la sidebar au montage du composant
     * Utilise Promise.all pour des requêtes parallèles (optimisation)
     */
    useEffect(() => {
        const loadData = async () => {
            try {
                // Chargement parallèle de toutes les données
                const [compData, softData, langData, stackData, projData] = await Promise.all([
                    fetchCompetences(),
                    fetchSoftSkills(),
                    fetchLanguages(),
                    fetchStackTech(),
                    fetchProjects()
                ])
                
                // Mise à jour des états avec les données reçues
                setCompetences(compData)
                setSoftSkills(softData)
                setLangues(langData)
                setStackTech(stackData)
                setProjects(projData)
            } catch (err) {
                console.error('Error loading sidebar data:', err)
                setError(err.message)
            } finally {
                setLoading(false)  // Fin du chargement (succès ou erreur)
            }
        }
        loadData()
    }, [])  // Tableau vide = exécution uniquement au montage

    // ========================================================================
    // RENDU CONDITIONNEL (États de chargement/erreur)
    // ========================================================================
    
    if (loading) return <div className="sidebar-content">Chargement...</div>
    if (error) return <div className="sidebar-content">Erreur: {error}</div>

    // ========================================================================
    // RENDU JSX PRINCIPAL
    // ========================================================================
    
    return (
        <div className="sidebar-content">
            
            {/* ============================================================
                SECTION COMPÉTENCES
                Affiche les compétences groupées par catégorie
                Structure: { "Catégorie": [{ id, description, is_sub_item }] }
            ============================================================ */}
            <section className="sidebar-section">
                <h2 className="sidebar-title">Compétences</h2>
                
                {/* Boucle sur chaque catégorie de compétences */}
                {Object.entries(competences).map(([category, items]) => (
                    <div key={category}>
                        {/* Nom de la catégorie (ex: "Cloud", "CI/CD") */}
                        <h3 className="sidebar-subtitle">{category}</h3>
                        <ul className="competences-list">
                            {/* Liste des compétences de cette catégorie */}
                            {items.map((item) => (
                                <li key={item.id} className={item.is_sub_item ? "sub-item" : ""}>
                                    {/* Les sous-items sont préfixés par ○ */}
                                    {item.is_sub_item ? `○ ${item.description}` : item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* ============================================================
                SECTION SOFT SKILLS & LANGUES (côte à côte)
                Deux colonnes de largeur égale (sidebar-half)
            ============================================================ */}
            <div className="sidebar-row">
                
                {/* Colonne Soft Skills */}
                <section className="sidebar-section sidebar-half">
                    <h2 className="sidebar-title">Soft Skills</h2>
                    <ul className="soft-skills-list">
                        {softSkills.map((skill) => (
                            <li key={skill.id}>{skill.name}</li>
                        ))}
                    </ul>
                </section>

                {/* Colonne Langues */}
                <section className="sidebar-section sidebar-half">
                    <h2 className="sidebar-title">Langues</h2>
                    <ul className="langues-list">
                        {langues.map((langue) => (
                            <li key={langue.id}>
                                <span>{langue.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* ============================================================
                SECTION STACK TECHNIQUE
                Grille d'icônes des technologies maîtrisées
                Chaque tech a une icône (SVG via URL) et un nom
            ============================================================ */}
            <section className="sidebar-section">
                <h2 className="sidebar-title">Stack Technique</h2>
                <div className="stack-grid">
                    {stackTech.map((tech) => (
                        <div key={tech.id} className="stack-item">
                            {/* Icône de la technologie (URL externe) */}
                            <img src={tech.icon_url} alt={tech.name} className="stack-icon" />
                            {/* Nom de la technologie */}
                            <span className="stack-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============================================================
                SECTION PROJETS PERSONNELS
                QR Code + lien vers le portfolio GitHub Pages
            ============================================================ */}
            <section className="sidebar-section">
                <h2 className="sidebar-title">Projets Perso</h2>
                <div className="projets-perso">
                    {/* QR Code généré dynamiquement via API externe */}
                    <div className="qr-placeholder">
                        <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://guigan713.github.io/PortfolioG" 
                            alt="QR Code Portfolio"
                            className="qr-code"
                        />
                    </div>
                    {/* Lien texte vers le portfolio */}
                    <a href="https://guigan713.github.io/PortfolioG" target="_blank" rel="noopener noreferrer" className="portfolio-text">Portfolio</a>
                </div>
            </section>
        </div>
    )
}

export default Sidebar
