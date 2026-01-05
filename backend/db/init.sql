-- Création de la base de données
-- CREATE DATABASE cv_db;

-- Table utilisateur
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    profession VARCHAR(100),
    avatar VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(100),
    github VARCHAR(255),
    gitlab VARCHAR(255),
    linkedin VARCHAR(255),
    permis_b BOOLEAN DEFAULT false
);

-- Table profil
CREATE TABLE IF NOT EXISTS profil (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description TEXT
);

-- Table catégories de compétences
CREATE TABLE IF NOT EXISTS skill_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table compétences
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES skill_categories(id),
    title VARCHAR(100) NOT NULL,
    img VARCHAR(255)
);

-- Table expériences
CREATE TABLE IF NOT EXISTS experiences (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    date VARCHAR(50),
    location VARCHAR(150)
);

-- Table missions (liées aux expériences)
CREATE TABLE IF NOT EXISTS missions (
    id SERIAL PRIMARY KEY,
    experience_id INTEGER REFERENCES experiences(id),
    title VARCHAR(255) NOT NULL
);

-- Table formations
CREATE TABLE IF NOT EXISTS formations (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    date VARCHAR(50),
    location VARCHAR(150)
);

-- Table certifications
CREATE TABLE IF NOT EXISTS certifications (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL
);

-- Table langues
CREATE TABLE IF NOT EXISTS languages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5)
);

-- Table projets personnels
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT
);

-- Table soft skills
CREATE TABLE IF NOT EXISTS soft_skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table compétences textuelles (liste à puces)
CREATE TABLE IF NOT EXISTS competences (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    is_sub_item BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0
);

-- Table stack technique (icônes)
CREATE TABLE IF NOT EXISTS stack_tech (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    icon_url VARCHAR(500) NOT NULL,
    sort_order INTEGER DEFAULT 0
);
-- Seed data pour le CV

-- Utilisateur
INSERT INTO users (name, profession, avatar, phone, email, github, gitlab, linkedin, permis_b)
VALUES (
    'Guillaume Lequin',
    'Ingénieur DevOps',
    '/images/Guigan-p.jpg',
    '0618086512',
    'guillaume.lequin713@gmail.com',
    'https://github.com/Guigan713',
    'https://gitlab.com/Guigan713',
    'https://www.linkedin.com/in/guillaume-lequin/',
    true
);

-- Profil
INSERT INTO profil (title, description)
VALUES (
    'Profil',
    'Administrateur Systèmes & DevOps, je contribue à la conception, l’automatisation et l’exploitation d’infrastructures fiables et sécurisées, en collaboration étroite avec les équipes de développement et d’exploitation. Passionné par les technologies cloud et les pratiques DevOps, je m’efforce d’améliorer continuellement les processus de déploiement et de gestion des systèmes pour garantir une performance optimale et une disponibilité maximale des services.'
);

-- Catégories de compétences
INSERT INTO skill_categories (id, name) VALUES
(1, 'Infra'),
(2, 'DevOps / CI/CD / Monitoring'),
(3, 'Front / Langages');

-- Compétences Infra
INSERT INTO skills (category_id, title, img) VALUES
(1, 'Linux', 'https://shields.io/badge/-Linux-FCC624?&logo=Linux&logoColor=white&style=plastic'),
(1, 'Nginx', 'https://shields.io/badge/-Nginx-009639?&logo=nginx&logoColor=white&style=plastic'),
(1, 'Traefik', 'https://shields.io/badge/-Traefik-00B5D8?&logo=traefik&logoColor=white&style=plastic'),
(1, 'Docker', 'https://shields.io/badge/-Docker-2496ED?&logo=Docker&logoColor=white&style=plastic'),
(1, 'Docker Swarm', 'https://shields.io/badge/-Docker%20Swarm-2496ED?&logo=Docker&logoColor=white&style=plastic');

-- Compétences DevOps
INSERT INTO skills (category_id, title, img) VALUES
(2, 'Terraform', 'https://shields.io/badge/-Terraform-7B42BC?&logo=Terraform&logoColor=white&style=plastic'),
(2, 'Ansible', 'https://shields.io/badge/-Ansible-EE0000?&logo=Ansible&logoColor=white&style=plastic'),
(2, 'Jenkins', 'https://shields.io/badge/-Jenkins-D24939?&logo=Jenkins&logoColor=white&style=plastic'),
(2, 'GitHub Actions', 'https://shields.io/badge/-GitHub%20Actions-2088FF?&logo=githubactions&logoColor=white&style=plastic'),
(2, 'GitLab', 'https://shields.io/badge/-GitLab-FC6D26?&logo=GitLab&logoColor=white&style=plastic'),
(2, 'Prometheus', 'https://shields.io/badge/-Prometheus-E6522C?&logo=Prometheus&logoColor=white&style=plastic'),
(2, 'Grafana', 'https://shields.io/badge/-Grafana-F46800?&logo=Grafana&logoColor=white&style=plastic'),
(2, 'Kubernetes', 'https://shields.io/badge/-Kubernetes-326CE5?&logo=Kubernetes&logoColor=white&style=plastic');

-- Compétences Front / Langages
INSERT INTO skills (category_id, title, img) VALUES
(3, 'HTML5', 'https://shields.io/badge/-HTML5-E34F26?&logo=HTML5&logoColor=white&style=plastic'),
(3, 'CSS3', 'https://shields.io/badge/-CSS3-1572B6?&logo=CSS3&logoColor=white&style=plastic'),
(3, 'JavaScript', 'https://shields.io/badge/-JavaScript-F7DF1E?&logo=JavaScript&logoColor=white&style=plastic'),
(3, 'React', 'https://shields.io/badge/-React-61DAFB?&logo=React&logoColor=white&style=plastic'),
(3, 'Node.js', 'https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white&style=plastic'),
(3, 'Express', 'https://shields.io/badge/-Express-000000?&logo=Express&logoColor=white&style=plastic'),
(3, 'MySQL', 'https://shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white&style=plastic'),
(3, 'Python', 'https://shields.io/badge/-Python-3776AB?&logo=Python&logoColor=white&style=plastic');

-- Expériences
INSERT INTO experiences (id, title, date, location) VALUES
(1, 'DevOps (Stage)', '03/2025 - 05/2025', 'Makara Média - Remote'),
(2, 'Développeur Power Platform', '09/01/2023 - 05/08/2024', 'Neos-SDI - Dijon'),
(3, 'Développeur Web / DevOps (Stage)', '11/2021 - 02/2022', 'OP-Rate - Remote');

-- Missions
INSERT INTO missions (experience_id, title) VALUES
(1, 'Conception et déploiement d''une infrastructure cloud automatisée permettant l''orchestration et la mise en production de deux applications web'),
(2, 'Conception et maintenance d''applications Power Platform (Power Apps Canvas, Power Automate, Power BI, Sharepoint)'),
(3, 'Refonte d''un site vitrine sous WordPress'),
(3, 'Initiation à la philosophie DevOps'),
(3, 'Déploiement d''un environnement cloud sur Google Cloud Platform avec Terraform');

-- Formations
INSERT INTO formations (title, date, location) VALUES
('Formation Administrateur Systèmes DevOps', '10/2024 - 06/2025', 'O''Clock School (Remote)'),
('Formation Développeur Sharepoint C# (POEI)', '26/09/2022 - 21/12/2022', 'Ajc Formations (Remote)'),
('Formation Développeur web Full Stack', '01/06/2021 - 05/11/2021', 'Wild Code School (Remote)'),
('Assistant d''exploitation en Hôtellerie', '2012', 'Prom Hôte Chagny'),
('Baccalauréat STG CFE (comptabilité et finances d''entreprise)', '2006 - 2007', 'Lycée Henri Parriat Montceau Les Mines');

-- Certifications
INSERT INTO certifications (title) VALUES
('Administrateur Systèmes DevOps – Titre RNCP niveau 6')
('AWS Academy - Cloud Foundations'),
('AWS Academy - Cloud Operations'),
('Cisco - English for IT 1');

-- Langues
INSERT INTO languages (name, rating) VALUES
('Français', 5),
('Anglais', 4),
('Espagnol', 2);

-- Projets personnels
INSERT INTO projects (title, description) VALUES
('Homelab', 'Projets auto-hébergés (routeur → switch → raspberry pi (bastion) → Mini PC x3)'),
('Sneaker Portfolio', 'Application Web Full Stack (React.js, Express.js, MySQL)'),
('Projet-DevOps-GLE', 'Déploiement d''une infrastructure DevOps complète (SneakerPortfolio) de manière automatisée, sécurisée et scalable sur cloud GCP');

-- Soft Skills
INSERT INTO soft_skills (name) VALUES
('Autonomie'),
('Rigueur'),
('Esprit d''équipe'),
('Curiosité'),
('Résilience');

-- Compétences textuelles DevOps
INSERT INTO competences (category, description, is_sub_item, sort_order) VALUES
('DevOps', 'Conteneurisation avec Docker', false, 1),
('DevOps', 'Automatisation avec Ansible', false, 2),
('DevOps', 'CI/CD avec Github Actions', false, 3),
('DevOps', 'Maîtrise des protocoles Réseau', false, 4),
('DevOps', 'Infrastructure As Code avec Terraform', false, 5),
('DevOps', 'Orchestration avec Kubernetes & Docker Swarm', false, 6),
('DevOps', 'Connaissance des Cloud Providers (AWS, GCP, Azure)', false, 7),
('DevOps', 'Utilisation des Systèmes Linux', false, 8),
('DevOps', 'Utilisation de Reverse-proxy (Traefik, Nginx)', false, 9);

-- Compétences textuelles Développement web
INSERT INTO competences (category, description, is_sub_item, sort_order) VALUES
('Développement web', 'Conception d''applications Web:', false, 1),
('Développement web', 'Frontend: HTML, CSS, JavaScript, React.js', true, 2),
('Développement web', 'Backend: Node.js, Express.js', true, 3),
('Développement web', 'Conception d''applications Powerapps canvas', false, 4),
('Développement web', 'Création et gestion d''une base de données (MySQL, PostgreSQL)', false, 5),
('Développement web', 'Analyser, exploiter, structurer des données', false, 6),
('Développement web', 'Tester une application', false, 7),
('Développement web', 'Utilisation de Postman', false, 8),
('Développement web', 'Langage de scripting (Shell Bash, Python)', false, 9),
('Développement web', 'API REST', false, 10);

-- Stack Technique
INSERT INTO stack_tech (name, icon_url, sort_order) VALUES
('Ansible', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', 1),
('Terraform', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', 2),
('Docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 3),
('Kubernetes', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', 4),
('HTML5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 5),
('CSS3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 6),
('JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 7),
('React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 8),
('Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 9),
('Linux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', 10),
('MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 11),
('NodeJS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 12);
