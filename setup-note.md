# Set Up From Scratch

## Environment

### Node.js
Grab the official LTS installer from [here](https://nodejs.org/en/download) and install.

### IDE
[VSCode](https://code.visualstudio.com/)

#### VSCode Extensions
- Code formatter: 
  - [Prettier](https://prettier.io/)
  - [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- Format on save
  - go to settings with `cmd + ,`, search for and enable "Editor: Format On Save"

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
Now a base Vite + React app is running at `http://localhost:5173`

### Components

#### Basic file structure
- Create a `components` folder.
  - In here, for each component we create its own folder which contains
    - the component's `.tsx`
    - a `index.tsx` to export the component as default
#### A basic component 
- Create a folder `Message`
- Create a tsx component that renders the hello world message `Message.tsx`
- Create a `index.tsx` to export it
- import and render `"./components/Message"` in `App.tsx`

#### A ListGroup component

### Style

### Form validation

### Fetch Data with React Query
TODO
### Global State with Zustand
TODO
### Routing with React Router
TODO
### Test
TODO

### Animation
TODO
### i18n
TODO