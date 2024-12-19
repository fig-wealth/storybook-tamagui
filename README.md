# Expo + Tamagui + Storybook

This project is a base implementation combining an Expo React Native app with Tamagui and Storybook.

## Setup

Run this command to setup the app:

```
yarn install
```

_Note:_ If you run into a node version mismatch, install a node version manager such as nvm: https://github.com/nvm-sh/nvm. `nvm install 20.10.0` then `nvm use 20.10.0`

## Getting started

Storybook docs:
https://storybook.js.org/

Tamagui docs:
https://tamagui.dev/

Example component:
[`.storybook/stories/Button`](https://github.com/fig-wealth/storybook-tamagui/tree/main/.storybook/stories/Button)

### Light/Dark Mode

Light and dark mode are supported using the browser or device settings. You can toggle it by adjusting the settings. In iOS simulators, you can also toggle it using the keyboard shortcut: CMD + SHIFT + A.

## Running the app

You can run the app using the following commands:

```
# iOS
yarn ios

# Android
yarn android

# Web
yarn web
```
