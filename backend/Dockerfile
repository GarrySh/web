FROM node:lts

ENV PROJECT_ROOT /app
WORKDIR $PROJECT_ROOT

COPY . .

RUN yarn global add lerna
RUN lerna bootstrap

CMD [ "yarn", "gateway:dev" ]
