FROM node:19.7-alpine3.16

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 5173
CMD ["pnpm", "run", "dev"]
