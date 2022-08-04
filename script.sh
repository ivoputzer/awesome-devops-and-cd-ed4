killall node || true
cd /tmp/awesome-devops-and-cd-ed4
npm install
npm run build
nohup npm run dev &
nohup npm run start &
