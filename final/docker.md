# Docker

KodeKloud: [Course](https://kodekloud.com/p/docker-for-the-absolute-beginner-hands-on), [Slide](1%20Docker%20for%20Beginners.pdf)

## Commands

Image

```bash
# list available images
$ docker images

# download an image
$ docker run <images_name>
# only pull, not run container
$ docker pull <images_name>

# remove image (request: no container in that image)
$ docker rmi <images_name>
# remove all images
$ docker rmi $(docker images -aq)
```

Container

```bash
# start a container (only first time)
$ docker run <images_name>

# list containers
$ docker ps
# check if container running or not
$ docker ps -a

# note. can use container_id instead of container_name (no need to be full id)

# run <container>
$ docker run <container_name>
$ docker run <container_name>:<version>
# run app on foreground
$ docker run <app_path>
# run app on background
$ docker run -d <app_path>
# with interact
$ docker run -i <container_name>
$ docker run -it <container_name>
# assign/mapping) port
# (publish port_x to port_y)
$ docker run -p <port_y:port_x> <container_name>
# assign limited volume
$ docker run -v <volume> <container_name>
# assign environment (as new container)
$ docker run (--name <new_container_name>) -e <key>=<value> <container_name>

# inspect a container (json)
$ docker inspect <container_name>
# view logs of a container
$ docker logs <container_name>

# exec command on a container
$ docker exec <container_name> <command>
# list environment
$ docker exec -it <container_name> env

# attach (go back to background)
$ docker attach <container_name>
# detach (leave current as background)
$ docker detach <container_name>

# stop <container>
$ docker stop <container_name>
# remove <container>
$ docker rm <container_name>
```

## Create Image

in the python-flask project folder

create Dockerfile

```Dockerfile
from Ubuntu

RUN apt-get update
RUN apt-get install python

RUN pip flask
RUN pip flask-mysql

COPY . /opt/source-code

ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run
```

in terminal

```bash
# build/deploy image
$ docker build Dockerfile -t <your_image_name>
$ docker push <your_image_name>
```

```bash
# check env version
docker run python cat /etc/*release*
```

make image smaller

modify Dockerfile to use smaller package (ex. from python:3.6 to python:3.6-alpine)

```bash
# update image
docker build -t <image_name>:<tag> .
```
