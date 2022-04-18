# Zendesk App Scaffold
## Description
This repo contains a scaffold to help developers build apps for Zendesk products. with **Vue3** + **Vite**

## Setup

1. Clone or fork this repo
2. Change (`cd`) into `zendesk-vue-app-scaffold` 
3. Run `npm install`

## Run locally
To serve the app to your zendesk instance with `?zat=true`, run:
```shell
npm run build --watch
npm run app
```

## Package app

You can using any command of zendesk application tool with `--path=dist` 
for example:
1. Validate app
```shell
zat validate --path=dist
```
2. Create app into your zendesk account
```shell
zat create --path=dist
```
3. Update your app after created in your account
```shell
zat update --path=dist
```
4. Or create a zip file to upload manual
```shell
zat package --path=dist
```
