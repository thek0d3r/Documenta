#!/bin/bash

APP_DIR=/root/Documenta

cd $APP_DIR/Front-End/

npm install 
npm run build # comment for testing stuff
npm start > /dev/null &

cd $APP_DIR/Backend/
go mod tidy
go run main.go > /dev/null &
