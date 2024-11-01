FROM node:18

RUN npm install -g turbo

WORKDIR /home/app

COPY package.json turbo.json ./
COPY apps/*/package.json ./apps/

RUN npm install

COPY . .

RUN rm -rf package-lock.json node_modules && npm install

EXPOSE 3001
EXPOSE 3000
EXPOSE 5173

CMD ["turbo", "dev"]
