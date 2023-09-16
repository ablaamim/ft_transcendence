#!/bin/bash

echo "Installing Dependencies for personal use in the container"

apt-get update
apt-get upgrade -y
apt-get install zsh -y 
apt-get install vim -y
curl -L http://install.ohmyz.sh | sh
curl https://raw.githubusercontent.com/reversTeam/Sublivim/master/installer.sh | sh
apt-get install make -y
apt-get install git -y
git config --global user.name "ablaamim"
git config --global user.email aku-no-hana@outlook.fr

echo "Installing nest dependencies"

npm i -g @nestjs/cli

echo "Dependencies installed SUCCESSFULLY."