# Use official Node.js image as base
FROM node:18 AS build

# Set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json.
COPY package*.json ./

RUN npm i @material-tailwind/react --save
# Install dependencies.
RUN npm install --legacy-peer-deps
RUN npm i react-icons

# Copy the rest of the application code.
COPY . .

# Expose the port the app runs on.
EXPOSE 3000

# Start the application in development mode.
CMD ["npm", "start"]

# CMD ["npm", "run", "build"]

