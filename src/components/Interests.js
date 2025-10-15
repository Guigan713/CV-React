import React from 'react'
import Skill from "./Skill"
import './Interests.css'

function Interests() {
    return (
        <>
            <div className="interests">
                <h2>Langues</h2>
                <div className="interest-category">
                    <div className="skill">
                        <p className="skill__label">Anglais</p>
                        <Skill rating="5" />
                    </div>
                    <div className="skill">
                        <p className="skill__label">Espagnol</p>
                        <Skill rating="3" />
                    </div>
                </div>
            </div>
            <div className="interests">
                <h2>Projets Personnels</h2>
                <div className="projects-list">
                    <div className="project-item">
                        <div className="project-bullet"></div>
                        <p><strong>Homelab</strong> - Projets auto-hébergés (routeur → switch → raspberry pi (bastion) → Mini PC x3)</p>
                    </div>
                    <div className="project-item">
                        <div className="project-bullet"></div>
                        <p><strong>Sneaker Portfolio</strong> - Application Web Full Stack (React.js, Express.js, MySQL)</p>
                    </div>
                    <div className="project-item">
                        <div className="project-bullet"></div>
                        <p><strong>Projet-DevOps-GLE</strong> - Déploiement d'une infrastructure DevOps complète (SneakerPortfolio) de manière automatisée, sécurisée et scalable sur cloud GCP</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interests;
