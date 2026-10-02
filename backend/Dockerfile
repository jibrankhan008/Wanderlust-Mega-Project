####################Stage1#########################
FROM node:21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

###################Stage2#########################
FROM node:21-slim

WORKDIR /app

COPY --from=builder /app .

EXPOSE 8080

CMD ["npm","start"]
