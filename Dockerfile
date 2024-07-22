FROM node:22-alpine3.20

COPY [".", "the project/"]

WORKDIR /the project/

RUN npm install

CMD npm start