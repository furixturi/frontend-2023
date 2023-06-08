# Set Up From Scratch

## Environment

### Node.js
Grab the official LTS installer from [here](https://nodejs.org/en/download) and install.

### IDE
[VSCode](https://code.visualstudio.com/)

#### VSCode Extensions
- Code formatter: [Prettier](https://prettier.io/)
- Format on save: go to settings with `cmd + ,`, search for and enable "Editor: Format On Save"

## React App

### Dev Setup

Instead of [CRA](https://create-react-app.dev/), this time we try out [Vite](https://vitejs.dev/) since we've heard that its dev server is faster and its build is leaner.

```bash
$ npm create vite@4.1.0
```
1. Set project name
2. Select framework: React
3. Select a variant: TypeScript

This creates a folder with the project name and a scaffolding react app in it.

Go in the app folder and run

```bash
$ cd <project name>
$ npm install
$ npm run dev
```
Now a base Vite + React app is running at `localhost:5173`
