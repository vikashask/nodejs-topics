# Deployment in ubuntu

## Go to your server and login throught terminal

## Install Node.js
    sudo apt-get install nodejs
    sudo apt-get install build-essential
    test node is working or not by node command

## Transfer app code from git to server
    Install git
    sudo apt-get install -y git
    clone you project using git clone


## Install PM2
    sudo npm install -g pm2

## Start PM2    
    start your application like in express js if entry point is app.js
    pm2 start app.js
    pm2 stop app or resource id
    pm2 restart app_id