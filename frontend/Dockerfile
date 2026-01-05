FROM node:23-slim

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Variables d'environnement pour le dev server
ENV HOST=0.0.0.0
ENV PORT=3000

# Démarrer l'application en mode développement
CMD ["npm", "start"]
