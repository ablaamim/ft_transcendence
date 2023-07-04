FROM node:16.15.0-alpine

WORKDIR /app

USER root

COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]