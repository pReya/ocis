#/bin/sh!
set -e

apk add socat

socat tcp-l:8880,fork,reuseaddr tcp:172.17.0.1:5000
