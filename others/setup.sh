#!/bin/bash
mkdir -p ~/devEnv/docker
cd ~/devEnv/docker
sudo yum update
sudo yum install -y docker 
sudo docker 
sudo docker run -it -p 3000:3000 -v ~/482Learning/test:/opt/application -w /opt/application golden/meteor-dev

