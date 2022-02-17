#!/bin/sh

set -e

apk add socat

socat tcp-l:9200,fork,reuseaddr tcp:172.17.0.1:9200
