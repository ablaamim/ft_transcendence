FROM node:16.15.0-alpine AS build

WORKDIR /app


COPY . .

RUN npm install && npm run build

EXPOSE 3001

CMD ["npm", "run", "start"]