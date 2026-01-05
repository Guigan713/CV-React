const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchUser = async () => {
    const response = await fetch(`${API_URL}/user`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
};

export const fetchProfil = async () => {
    const response = await fetch(`${API_URL}/profil`);
    if (!response.ok) throw new Error('Failed to fetch profil');
    return response.json();
};

export const fetchSkills = async () => {
    const response = await fetch(`${API_URL}/skills`);
    if (!response.ok) throw new Error('Failed to fetch skills');
    return response.json();
};

export const fetchExperiences = async () => {
    const response = await fetch(`${API_URL}/experiences`);
    if (!response.ok) throw new Error('Failed to fetch experiences');
    return response.json();
};

export const fetchFormations = async () => {
    const response = await fetch(`${API_URL}/formations`);
    if (!response.ok) throw new Error('Failed to fetch formations');
    return response.json();
};

export const fetchCertifications = async () => {
    const response = await fetch(`${API_URL}/certifications`);
    if (!response.ok) throw new Error('Failed to fetch certifications');
    return response.json();
};

export const fetchLanguages = async () => {
    const response = await fetch(`${API_URL}/languages`);
    if (!response.ok) throw new Error('Failed to fetch languages');
    return response.json();
};

export const fetchProjects = async () => {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
};

export const fetchSoftSkills = async () => {
    const response = await fetch(`${API_URL}/soft-skills`);
    if (!response.ok) throw new Error('Failed to fetch soft skills');
    return response.json();
};

export const fetchCompetences = async () => {
    const response = await fetch(`${API_URL}/competences`);
    if (!response.ok) throw new Error('Failed to fetch competences');
    return response.json();
};

export const fetchStackTech = async () => {
    const response = await fetch(`${API_URL}/stack-tech`);
    if (!response.ok) throw new Error('Failed to fetch stack tech');
    return response.json();
};

