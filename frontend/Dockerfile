FROM node:21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


########### Multi Stage ############################

FROM node:21-slim

WORKDIR /app

COPY --from=builder /app .

COPY .env.docker .env.local

EXPOSE 5173

CMD ["npm","run","dev","--","--host","0.0.0.0"]

