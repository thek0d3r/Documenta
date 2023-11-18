#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR

cd Front-End/
npm install  # Replace with your build and deployment commands
npm run start
cd ../Backend
go mod tidy
go run main.go