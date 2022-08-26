FROM node:16

WORKDIR /usr/src

COPY package.json package-lock.json ./

RUN npm install --no-progress --no-optional\
 && npm cache clean --force --silent

COPY ./ ./

EXPOSE 1235

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]
