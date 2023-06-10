# Align Tech Assessment

## Status

[![vegam17](https://circleci.com/gh/vegam17/aligntech.svg?style=shield)](https://app.circleci.com/pipelines/github/vegam17/aligntech)

## Resources

- [Project Notes](https://docs.google.com/document/d/1l082fxvPRO4wQ91rBAUoZfoWvfGncgUFQRafjI5sqZo/edit?usp=sharing): Google doc containing notes related to design and development
- [Scorecard](https://docs.google.com/document/d/1WUno-js5kq3xHePKH8puQ6sWZg64Q7jn01pGGQNFEGo/edit?usp=sharing): UX scorecard created from app metrics
- [Wireframe](https://whimsical.com/align-tech-interview-E6R3cUJC2S6sLsuzCy9Kgh): Low fidelity wireframe of page
- [Figma](https://www.figma.com/file/fc6cutztQ9x3pJP5B8jQiY/Align-UI-%2F-UX-Assessment?type=design&node-id=0-1): High fidelity design for mobile & desktop
- [Colors](https://coolors.co/3098e8-262626-f5f5f5): Design colors
- [Fonts](https://www.fontpair.co/pairings/oswald-quicksand): Design fonts

## Launching with Docker

- Install [Docker](https://www.docker.com/) and ensure it is running
- Clone this project using `git clone https://github.com/vegam17/aligntech.git`
- `cd aligntech` Navigate to the project directory
- `npm run docker` Build the docker project
- Wait while the project is built. This involves downloading a docker image, installing modules and building the project.
- Once complete, you should see a message stating: 'Accepting connections at http://localhost:3000'
- Issue the command `npm run docker:down` to stop the project

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm run lint`

Runs the code linter to detect any code linting errors.\

### `npm run branch`

Generates a file under `./src/data/branchName.json` with the name of the current branch
