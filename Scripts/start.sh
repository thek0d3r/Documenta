#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR/Front-End/

npm install 
npm run build
npm start &

cd $APP_DIR/Backend/
go mod tidy
go run main.go &
