#!/bin/bash
cd mongoDB/
docker build --tag kpineau/mongodb .
cd ../meteor-prod
docker build --tag kpineau/meteor-prod .

#this will start the mongoserver
docker run --name mongo_instance_001 -v /File/MEGA/482Project/Configurations/MongoDB:/opt/application -d pineauk/meteor
#this will start the meteor server
docker run -p 3000:3000 -v <location of app>:/opt/application -w /opt/application -d pineauk/meteor
