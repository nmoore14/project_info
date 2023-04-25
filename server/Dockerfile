FROM node:18
RUN npm i -g pnpm

WORKDIR /server
COPY package.json .
RUN pnpm install
COPY . .
#CMD pnpm dev
