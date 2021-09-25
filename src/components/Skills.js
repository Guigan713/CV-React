import React from "react"

import Skill from "./Skill"
import Interests from "./Interests.js"

import "./Skills.css"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <img align="left" alt="HTML" src="https://shields.io/badge/-HTML5-E34F26?&logo=HTML5&logoColor=white&style=plastic" />
        <Skill title="HTML" rating="5" />
        <img align="left" alt="CSS" src="https://shields.io/badge/-CSS3-1572B6?&logo=CSS3&logoColor=white&style=plastic" />
        <Skill title="CSS" rating="4" />
        <img align="left" alt="Javascript" src="https://shields.io/badge/-JavaScript-F7DF1E?&logo=JavaScript&logoColor=white&style=plastic" />
        <Skill title="JAVASCRIPT" rating="3" />
        <img align="left" alt="react" src="https://shields.io/badge/-React-61DAFB?&logo=React&logoColor=white&style=plastic" />
        <Skill title="REACT" rating="4" />
        <img align="left" alt="nodejs" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white&style=plastic" />
        <Skill title="NODE.JS" rating="3" />
        <img align="left" alt="MySQL" src="https://shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white&style=plastic" />
        <Skill title="MYSQL" rating="4" />
        <img align="left" alt="npm" src="https://shields.io/badge/-npm-CB3837?&logo=npm&logoColor=white&style=plastic" />
        <Skill title="NPM"rating="4" /> 
        {/* <img align="left" alt="Git" src="https://shields.io/badge/-Git-F05032?&logo=Git&logoColor=white&style=plastic" />
        <Skill title="GIT"rating="4" />  */}
        <img align="left" alt="Postman" src="https://shields.io/badge/-Postman-FF6C37?&logo=Postman&logoColor=white&style=plastic" />
        <Skill title="Postman"rating="4" />
        <img align="left" alt="Express" src="https://shields.io/badge/-Express-000000?&logo=Express&logoColor=white&style=plastic" />
        <Skill title="Express"rating="3" />

      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="5" />
        <Skill title="Espagnol" rating="4" />
        <Skill title="Italien" rating="2" />
      </div>
      <Interests />
    </>
  )
}

export default Skills
