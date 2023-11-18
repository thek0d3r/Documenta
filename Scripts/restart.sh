#!/bin/bash

APP_DIR=/root/Documenta

pkill npm
pkill next
pkill main

cd $APP_DIR/Front-End/
npm install
npm run build
npm run start > /dev/null &

cd $APP_DIR/Backend/
go mod tidy
go run main.go > /dev/null &

