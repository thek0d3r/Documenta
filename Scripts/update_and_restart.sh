#!/bin/bash

APP_DIR=/root/Documenta

pkill npm
pkill next
pkill go

git fetch
changes=$(git rev-list HEAD...origin/main --count)

if [ "$changes" -gt 0 ]; then
    git pull

    cd $APP_DIR/Front-End/
    npm install
    npm run build
    npm run start &

    cd $APP_DIR/Backend/
    go mod tidy
    go run main.go &
fi
