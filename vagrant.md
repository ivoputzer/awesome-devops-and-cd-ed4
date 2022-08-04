# Vagrant Project Box

Let's do the provisioning of a new vagrant machine

- Ubuntu 20.04 (focal64)
- Add a user with your same github username to allow direct login into the VM
- Install package `net-tools` to have access to commands like `ifconfig`
- (optional) Install mosh (https://mosh.org/) for better ssh connections.

Provisioning/deployment of the vagrant machine:
- install nodejs and its dependencies
- make sure the project is copied over to the VM (or that a shared folder is mounted)
- make sure nodejs dependencies of the repository are installed (on the VM especially in case of mounted folders)
- run the application, but serve static files and api separately
  - :1234 static files
  - :1235 websocket server
- (optional) find run configuration using reverse proxy (nginx, haproxy, apache, traefik, etc) that exposes both services using the same port :1234 (both http/ws on the same port)
- (optional) do things with ansible.

>> 1:30h >> ReGroup at 17:00

### Team 1
Roberto Manzo, Andrea Montemaggiore

### Team 2
Biondo Livio, Coletta Piervito

### Team 3
Straface Mariangela, Marchiori Matteo

### Team 4
De Montis Francesco, Federici Mattia

### Team 5
Fumagalli Luca2, Piferi Tomaso

### Team 6
Rocco Matteo, Socolovschi Serghei

### Team 7
Vassallo Pietro, Giorgini Giorgio
