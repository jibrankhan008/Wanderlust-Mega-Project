###################Stage1##########################
FROM node:21 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

####################Stage2########################

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
