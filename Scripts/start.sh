#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR/Frontend/

npm install 
npm run build # more delulu
npm start > /dev/null &

cd $APP_DIR/Backend/
go mod tidy
go run main.go > /dev/null &
