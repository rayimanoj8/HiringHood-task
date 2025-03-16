# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose backend port (should match the one in server.js)
EXPOSE 5000

# Set environment variables (MongoDB URI is from .env)
ENV NODE_ENV=production

# Start the backend
CMD ["node", "server.js"]
