PWD = $(shell pwd -L)
DOCKER_COMPOSE = docker-compose

build:
	- docker-compose build

up:
	- docker-compose up --scale comment-app=2 -d

down:
	- docker-compose down