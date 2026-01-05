const path = require('path');
const fs = require('fs');
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
}
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user');
const profilRoutes = require('./routes/profil');
const skillsRoutes = require('./routes/skills');
const experiencesRoutes = require('./routes/experiences');
const formationsRoutes = require('./routes/formations');
const certificationsRoutes = require('./routes/certifications');
const languagesRoutes = require('./routes/languages');
const projectsRoutes = require('./routes/projects');
const softSkillsRoutes = require('./routes/softSkills');
const competencesRoutes = require('./routes/competences');
const stackTechRoutes = require('./routes/stackTech');

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

// Health check endpoint pour Kubernetes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({ message: 'API CV Backend' });
});

app.use('/api/user', userRoutes);
app.use('/api/profil', profilRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/formations', formationsRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/languages', languagesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/soft-skills', softSkillsRoutes);
app.use('/api/competences', competencesRoutes);
app.use('/api/stack-tech', stackTechRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

