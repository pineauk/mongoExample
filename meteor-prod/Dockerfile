FROM ubuntu:14.04
RUN update-locale LANG=C.UTF-8 LC_MESSAGES=POSIX

MAINTAINER PhobosProject <kpineau@upei.ca>

RUN apt-get update
RUN apt-get -y dist-upgrade
RUN apt-get install -y curl

#RUN apt-get install -y npm

RUN curl https://install.meteor.com/ | sh


WORKDIR /opt/application


EXPOSE 3000


CMD [ "export USER="";export MONGO_URL=mongodb://localhost:27027/meteor; meteor" ]
