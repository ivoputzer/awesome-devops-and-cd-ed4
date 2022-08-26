FROM node:alpine
LABEL maintainer="Ivo von Putzer Reibegg <ivo.putzer@gmail.com>"

ENV NPM_CONFIG_LOGLEVEL error
ENV NPM_CONFIG_PRODUCTION true

WORKDIR /usr/src

COPY package.json package-lock.json ./

RUN npm install --no-progress --no-optional\
 && npm cache clean --force --silent

COPY ./ ./

EXPOSE 80

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
