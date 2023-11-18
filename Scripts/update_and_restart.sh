#!/bin/bash

APP_DIR=/root/Documenta

git fetch
changes=$(git rev-list HEAD...origin/main --count)

if [ "$changes" -gt 0 ]; then
    pkill npm
    pkill next
    pkill main
    git pull

    cd $APP_DIR/Front-End/
    npm install
    npm run build
    npm run start > /dev/null &

    cd $APP_DIR/Backend/
    go mod tidy
    go run main.go > /dev/null &
fi
