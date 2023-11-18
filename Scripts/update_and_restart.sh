#!/bin/bash

APP_DIR=/root/Documenta
GO_APP_NAME="main"

pkill -f "npm start"
pkill -f "$GO_APP_NAME"

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
    go run $GO_APP_NAME &
fi
