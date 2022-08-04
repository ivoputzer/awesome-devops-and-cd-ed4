apt-get update

cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs
node -v

sudo apt-get install mosh
sudo apt install net-tools


sudo git clone https://github.com/ivoputzer/awesome-devops-and-cd-ed4.git

cd awesome-devops-and-cd-ed4

sudo npm install

sudo npm run start&
sudo npm run dev
