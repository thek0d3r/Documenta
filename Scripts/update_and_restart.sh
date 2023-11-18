#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR

# Fetch and pull changes from the GitHub repository
git fetch
changes=$(git rev-list HEAD...origin/main --count)

if [ "$changes" -gt 0 ]; then
    git pull
    cd Front-End/
    npm install  # Replace with your build and deployment commands
    npm run start 
    cd ../Backend
    go mod tidy
    go run Backend/main.go
fi
