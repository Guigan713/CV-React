import React from "react"

import Skill from "./Skill"
import Interests from "./Interests.js"

import "./Skills.css"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <img align="left" alt="Terraform" src="https://shields.io/badge/-Terraform-7B42BC?&logo=Terraform&logoColor=white&style=plastic" />
        <Skill title=""rating="4" /> 
        <img align="left" alt="Linux" src="https://shields.io/badge/-Linux-FCC624?&logo=Linux&logoColor=white&style=plastic" />
        <Skill title="" rating="4" />        
        <img align="left" alt="Ansible" src="https://shields.io/badge/-Ansible-EE0000?&logo=Ansible&logoColor=white&style=plastic" />
        <Skill title="" rating="3" />
        <img align="left" alt="Python" src="https://shields.io/badge/-Python-3776AB?&logo=Python&logoColor=white&style=plastic" />
        <Skill title="" rating="3" />
        <img align="left" alt="GitHub Actions" src="https://shields.io/badge/-GitHub%20Actions-2088FF?&logo=GitHub-Actions&logoColor=white&style=plastic" />
        <Skill title="" rating="4" />
        <img align="left" alt="Docker" src="https://shields.io/badge/-Docker-2496ED?&logo=Docker&logoColor=white&style=plastic" />
        <Skill title="" rating="4" />
        <img align="left" alt="Kubernetes" src="https://shields.io/badge/-Kubernetes-326CE5?&logo=Kubernetes&logoColor=white&style=plastic" />
        <Skill title="" rating="2" />
        <img align="left" alt="MySQL" src="https://shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white&style=plastic" />
        <Skill title="" rating="4" />
        <img align="left" alt="HTML" src="https://shields.io/badge/-HTML5-E34F26?&logo=HTML5&logoColor=white&style=plastic" />
        <Skill title="" rating="5" />
        <img align="left" alt="CSS" src="https://shields.io/badge/-CSS3-1572B6?&logo=CSS3&logoColor=white&style=plastic" />
        <Skill title="" rating="4" />
        <img align="left" alt="Javascript" src="https://shields.io/badge/-JavaScript-F7DF1E?&logo=JavaScript&logoColor=white&style=plastic" />
        <Skill title="" rating="3" />
        <img align="left" alt="react" src="https://shields.io/badge/-React-61DAFB?&logo=React&logoColor=white&style=plastic" />
        <Skill title="" rating="3" />
        <img align="left" alt="nodejs" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white&style=plastic" />
        <Skill title="" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="5" />
        <Skill title="Espagnol" rating="3" />
      </div>
      <Interests />
    </>
  )
}

export default Skills
