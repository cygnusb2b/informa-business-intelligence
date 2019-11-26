#!/bin/bash
set -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

if test -f "services/$1/Dockerfile"; then
  cp services/$1/Dockerfile .
else
  echo "Unable to find Dockerfile for service $1!"
  exit 1
fi

docker build -t "$1:$2" .

docker tag "$1:$2" "basecmswebsites/$1-service:$2"
docker push "basecmswebsites/$1-service:$2"
docker image rm "$1:$2"
