# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# ✅ Copy only package files from current directory (not from ./frontend!)
COPY package*.json ./
RUN npm install

# ✅ Copy the rest of the frontend app
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
