FROM node:alpine

WORKDIR /server

COPY src /server/

RUN npm install -g pnpm
RUN pnpm install

EXPOSE 5000

CMD [ "pnpm", "start" ]
