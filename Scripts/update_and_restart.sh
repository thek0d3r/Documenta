#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR

git fetch
changes=$(git rev-list HEAD...origin/main --count)

if [ "$changes" -gt 0 ]; then
    git pull
    cd Front-End/
    npm install
    npm run build
    npm run start
    cd ../Backend
    go mod tidy
    go run Backend/main.go &
fi
