/**
 * ============================================================================
 * FORMATIONSEXPERIENCES.JSX - Conteneur Principal du Contenu CV
 * ============================================================================
 * 
 * @description Composant conteneur qui charge et affiche les sections :
 *              - Expériences professionnelles
 *              - Formations académiques
 *              - Diplômes & Certifications
 * 
 * @position    Partie inférieure de la colonne principale (main)
 *              Sous le Header et le Profil
 * 
 * @role        - Orchestrateur : charge les données et les distribue aux enfants
 *              - Gestion de l'état de chargement global
 *              - Appels API parallèles pour optimiser le temps de chargement
 * 
 * @hooks       - useState : États pour formations, experiences, certifications
 *              - useEffect : Chargement des données au montage
 * 
 * @api         - fetchFormations() : /api/formations
 *              - fetchExperiences() : /api/experiences
 *              - fetchCertifications() : /api/certifications
 * 
 * @children    - Experiences : Liste des expériences professionnelles
 *              - Formations : Liste des formations
 *              - Certifications : Liste des diplômes et certifications
 * ============================================================================
 */

import React, { useState, useEffect } from 'react'

// ============================================================================
// IMPORTS - Composants enfants
// ============================================================================
import Formations from './Formations'           // Composant formations académiques
import Experiences from './Experiences'         // Composant expériences professionnelles
import Certifications from './Certifications'   // Composant diplômes & certifications

// Service API
import { fetchFormations, fetchExperiences, fetchCertifications } from '../services/api'

// Styles
import './FormationsExperiences.css'

// ============================================================================
// COMPOSANT FORMATIONSEXPERIENCES
// ============================================================================

function FormationsExperiences() {
    // ========================================================================
    // ÉTATS LOCAUX
    // ========================================================================
    
    const [formations, setFormations] = useState([])       // Liste des formations
    const [experiences, setExperiences] = useState([])     // Liste des expériences
    const [certifications, setCertifications] = useState([]) // Liste des certifications
    const [loading, setLoading] = useState(true)           // État de chargement

    // ========================================================================
    // EFFET DE CHARGEMENT DES DONNÉES
    // ========================================================================
    
    /**
     * Charge les données depuis l'API au montage du composant
     * Utilise Promise.all pour charger en parallèle (plus rapide)
     */
    useEffect(() => {
        const loadData = async () => {
            try {
                // Requêtes parallèles vers l'API backend
                const [formData, expData, certData] = await Promise.all([
                    fetchFormations(),      // GET /api/formations
                    fetchExperiences(),     // GET /api/experiences
                    fetchCertifications()   // GET /api/certifications
                ])
                
                // Mise à jour des états avec les données reçues
                setFormations(formData)
                setExperiences(expData)
                setCertifications(certData)
            } catch (err) {
                console.error('Error loading data:', err)
            } finally {
                setLoading(false)  // Fin du chargement
            }
        }
        loadData()
    }, [])  // [] = exécution unique au montage

    // ========================================================================
    // RENDU CONDITIONNEL - État de chargement
    // ========================================================================
    
    if (loading) return <div>Chargement...</div>

    // ========================================================================
    // RENDU JSX
    // ========================================================================
    
    /**
     * Fragment React (<>) pour éviter un div wrapper inutile
     * Ordre d'affichage : Expériences → Formations → Certifications
     */
    return (
        <>
            {/* Section Expériences Professionnelles */}
            <Experiences datas={experiences} />
            
            {/* Section Formations Académiques */}
            <Formations datas={formations} />
            
            {/* Section Diplômes & Certifications */}
            <Certifications datas={certifications} />
        </>
    )
}

export default FormationsExperiences;
