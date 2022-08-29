# Playroom Web App

### Installation
- `git clone git@github.com:ivoputzer/awesome-devops-and-cd-ed4.git`
- `cd awesome-devops-and-cd-ed4`
- `npm install`
- `npm test`


### Run
- `npm run dev` # runs `parcel serve` which takes care of static assets
- `npm run start` # using `nodemon` runs `server.js` which is based on http, express, socket.io


### How to generate a `password` hash for provision.yml
```shell
docker run -it alpine:latest /usr/bin/mkpasswd --method=sha-512


# - name: <github-username>
#   comment: <full-name>
#   password: <generated-password-hash>
#   state: present
```

### Contributors

- [@ivoputzer](https://github.com/ivoputzer)
- [@matteomarchiori](https://github.com/matteomarchiori)
- [@lucafumagalli](https://github.com/lucafumagalli)
- [@pietro](https://github.com/pietrovassallo-bip)
- [@giorgio](https://github.com/ggiorgini-bip)
- [@liviobi](https://github.com/liviobi)
- [@AndreaMontemaggiore1](https://github.com/AndreaMontemaggiore1)
- [@pcoletta](https://github.com/pcoletta)
- [@ssocolovschi](https://github.com/ssocolovschi)
- [@mattiafederici](https://github.com/mattiafederici)
- [@robertomanzobip](https://github.com/robertomanzo-bip)
- [@tommasopiferi-bip](https://github.com/tommasopiferi-bip)
- [@fdemontis](https://github.com/fdemontis)
- [@mstraface](https://github.com/mstraface)
- [@Matteo R.](https://github.com/mr-bip)



### Pull changes

```shell
git pull --rebase origin master

npm run docker:build
npm run static:build

npm run docker
npm run static
```


### Docker compose
```shell
git pull --rebase origin master

docker compose up -d
```
