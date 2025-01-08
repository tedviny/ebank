# Stage 1: Build the Angular application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular application with http-server
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist/frontend /app

RUN npm install -g http-server

EXPOSE 4000

CMD ["http-server", "/app", "-p", "4000", "-a", "0.0.0.0"]