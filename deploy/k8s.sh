#!/bin/bash
set -e

IMAGE=basecmswebsites/$1:$2
npx @endeavorb2b/rancher2cli dl basecms-website $1 $IMAGE --namespace=$3
