FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g yarn

RUN yarn

COPY . .

EXPOSE 3030

# Don't use docker in dev!!!
CMD ["yarn", "start:prod"]

