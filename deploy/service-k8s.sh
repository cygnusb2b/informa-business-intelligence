#!/bin/bash
set -e

IMAGE=basecmswebsites/$1-service:$2
npx @endeavorb2b/rancher2cli dl basecms-website-service $1 $IMAGE --namespace=$3
