FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

RUN npm install -g http-server

EXPOSE 4000

CMD ["http-server", "dist/frontend", "-p", "4000"]