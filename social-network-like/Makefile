PWD = $(shell pwd -L)
DOCKER_COMPOSE = docker-compose

build:
	- docker-compose build

up:
	- docker-compose up --scale like-app=2 -d

down:
	- docker-compose down