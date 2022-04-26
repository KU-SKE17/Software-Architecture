# Docker <!-- omit in toc -->

KodeKloud: [Course](https://kodekloud.com/p/docker-for-the-absolute-beginner-hands-on), [Slide](9%20Docker%20for%20Beginners.pdf)

## Image

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

### Create Image

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
$ docker run python cat /etc/*release*
```

```bash
# check something in Dockerfile
$ cat Dockerfile-<image_name> | grep <something>
```

### Make image smaller

modify Dockerfile to use smaller package (ex. from python:3.6 to python:3.6-alpine)

```bash
# update image
$ docker build -t <image_name>:<tag> .
```

## Container

```bash
# start a container (only first time)
$ docker run <images_name>

# list containers
$ docker ps
# check if container running or not
$ docker ps -a
```

note. you can use container_id instead of container_name (no need to be full id)

```bash
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
# create and link with another image
$ docker run -d --link <another_container_name> <container_name>

# stop <container>
$ docker stop <container_name>
# remove <container>
$ docker rm <container_name>
```

```bash
# inspect a container (json)
$ docker inspect <container_name>
# view logs of a container
$ docker logs <container_name>
# list environment
$ docker exec -it <container_name> env
```

```bash
# exec command on a container
$ docker exec <container_name> <command>
$ docker run <app_path> <command>
```

```bash
# attach (go back to background)
$ docker attach <container_name>
# detach (leave current as background)
$ docker detach <container_name>
```

## Compose

compose 'docker run' commends to `docker-compose.yml`
(have multiple apps as project component)

for example: [voting app](https://github.com/dockersamples/example-voting-app)

```bash
# create/run containers
$ docker-compose up
```

## Docker Engine/Storage

- docker root path: `/var/lib/docker`
- directory name == container id

## Docker Network

```bash
# Bridge - normal run
$ docker run <container>
# None - run with isolate network
$ docker run <container> --network=none
# Host - run same port
$ docker run <container> --network=host
```

```bash
# list current networks
$ docker network ls
# inspect a network
$ docker network inspect <network_name>
```

```bash
# create new network
$ docker network create --driver <network_driver> --subnet <network_subnet> --gateway <network_gateway> <network_name>
```

```bash
# deploy new container with a network
$ docker run -d --name <new_container_name> --network <network_name> <new_container_image>
```

## Docker Registry

image name (~path: `registry/username/repo_name`)

note. DockerHub is a hosted registry solution by Docker Inc

```bash
# login to a self-hosted registry
$ docker logIn <server>

# remove dangling images
$ docker image prune -a
```
