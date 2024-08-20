13th step - JS13K Games 2024 - Triskaidekaphobia
=======================================

[![pages-build-deployment](https://github.com/jayther/js13k-2024-triskaidekaphobia/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jayther/js13k-2024-triskaidekaphobia/actions/workflows/pages/pages-build-deployment)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

TODO insert game description here

## Game Links

Try the submitted entry at: TODO

Try the current state of the game at: https://jayther.github.io/js13k-2024-triskaidekaphobia/

## Instructions

TODO

# Developing

## Setup

1. Make sure to use Node 16.x with npm 8.x
   1. `nvm use` to use the current version in `.nvmrc`
2. `npm i`

## Build

1. `npm run build`

This will make a build in `dist/` folder.

## Local dev

This will require 2 terminals.

1. `npm run watch`
2. `npm run server`, which will serve `dist`

In browser, go to http://127.0.0.1:8080

Note that `npm run watch` won't build right away until a change in `src/` has occurred.

## Deploy

1. Build with `npm run build`, which will update the `docs/` folder
2. Push to main

# License

[MIT](LICENSE)
