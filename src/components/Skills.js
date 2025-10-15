import React from "react"

import Skill from "./Skill"
import Interests from "./Interests.js"

import "./Skills.css"

const SKILL_CATEGORIES = [
  {
    id: "infra",
    title: "Infra",
    skills: [
      { title: "Linux", img: "https://shields.io/badge/-Linux-FCC624?&logo=Linux&logoColor=white&style=plastic", rating: 4 },
      { title: "Nginx", img: "https://shields.io/badge/-Nginx-009639?&logo=nginx&logoColor=white&style=plastic", rating: 4 },
      { title: "Traefik", img: "https://shields.io/badge/-Traefik-00B5D8?&logo=traefik&logoColor=white&style=plastic", rating: 3 },
      { title: "Docker", img: "https://shields.io/badge/-Docker-2496ED?&logo=Docker&logoColor=white&style=plastic", rating: 4 },
      { title: "Docker Swarm", img: "https://shields.io/badge/-Docker%20Swarm-2496ED?&logo=Docker&logoColor=white&style=plastic", rating: 3 },
    ],
  },
  {
    id: "devops",
    title: "DevOps / CI/CD / Monitoring",
    skills: [
      { title: "Terraform", img: "https://shields.io/badge/-Terraform-7B42BC?&logo=Terraform&logoColor=white&style=plastic", rating: 4 },
      { title: "Ansible", img: "https://shields.io/badge/-Ansible-EE0000?&logo=Ansible&logoColor=white&style=plastic", rating: 4 },
      { title: "Jenkins", img: "https://shields.io/badge/-Jenkins-D24939?&logo=Jenkins&logoColor=white&style=plastic", rating: 3},
      { title: "GitHub Actions", img: "https://shields.io/badge/-GitHub%20Actions-2088FF?&logo=githubactions&logoColor=white&style=plastic", rating: 4 },
      { title: "GitLab", img: "https://shields.io/badge/-GitLab-FC6D26?&logo=GitLab&logoColor=white&style=plastic", rating: 4 },
      { title: "Prometheus", img: "https://shields.io/badge/-Prometheus-E6522C?&logo=Prometheus&logoColor=white&style=plastic", rating: 3 },
      { title: "Grafana", img: "https://shields.io/badge/-Grafana-F46800?&logo=Grafana&logoColor=white&style=plastic", rating: 3 },
      { title: "Kubernetes", img: "https://shields.io/badge/-Kubernetes-326CE5?&logo=Kubernetes&logoColor=white&style=plastic", rating: 4 },
    ],
  },
  {
    id: "front",
    title: "Front / Langages",
    skills: [
      { title: "HTML5", img: "https://shields.io/badge/-HTML5-E34F26?&logo=HTML5&logoColor=white&style=plastic", rating: 5 },
      { title: "CSS3", img: "https://shields.io/badge/-CSS3-1572B6?&logo=CSS3&logoColor=white&style=plastic", rating: 4 },
      { title: "JavaScript", img: "https://shields.io/badge/-JavaScript-F7DF1E?&logo=JavaScript&logoColor=white&style=plastic", rating: 3 },
      { title: "React", img: "https://shields.io/badge/-React-61DAFB?&logo=React&logoColor=white&style=plastic", rating: 4 },
      { title: "Node.js", img: "https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white&style=plastic", rating: 3 },
      { title: "Express", img: "https://shields.io/badge/-Express-000000?&logo=Express&logoColor=white&style=plastic", rating: 3 },
      { title: "MySQL", img: "https://shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white&style=plastic", rating: 4 },
      { title: "Python", img: "https://shields.io/badge/-Python-3776AB?&logo=Python&logoColor=white&style=plastic", rating: 3 },
    ],
  },
]

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        {SKILL_CATEGORIES.map((cat) => (
          <section key={cat.id} className="skill-category">
            <h3 className="h3">{cat.title}</h3>
            {cat.skills.map((s) => (
              <div key={s.title} className="skill">
                <img align="left" alt={s.title} src={s.img} />
                <Skill rating={String(s.rating)} />
              </div>
            ))}
          </section>
        ))}
      </div>
      <Interests />
    </>
  )
}

export default Skills
