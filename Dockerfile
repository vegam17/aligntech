FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --global serve
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]