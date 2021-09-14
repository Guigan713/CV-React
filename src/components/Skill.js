
import React from "react"


function Skill(props) {

    return (
    <div className="skill">
      <p className="skill__label">{props.title}{props.image}</p>
      <div className="skill__rating">
        <div className={`circle ${props.rating > 0 && "circle--plain"}`}></div>
        <div className={`circle ${props.rating > 1 && "circle--plain"}`}></div>
        <div className={`circle ${props.rating > 2 && "circle--plain"}`}></div>
        <div className={`circle ${props.rating > 3 && "circle--plain"}`}></div>
        <div className={`circle ${props.rating > 4 && "circle--plain"}`}></div>
      </div>
    </div>
  )
}

export default Skill
