#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR

cd Front-End/
npm install 
npm run build
npm run start &
cd ../Backend
go mod tidy
go run main.go &