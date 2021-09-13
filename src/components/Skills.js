import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests.js"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="4" />
        <Skill title="NODE" rating="3" />
        <Skill title="MySQL" rating="4" />
        <Skill title="NPM/GIT" rating="4" />
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
