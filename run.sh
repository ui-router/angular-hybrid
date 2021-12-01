#!/usr/bin/env bash

cd library
yarn 
yarn build
cd ../app
yarn
yarn start 

# open browser, open browser console
