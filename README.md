# Align Tech Assessment

## Status

[![vegam17](https://circleci.com/gh/vegam17/aligntech.svg?style=shield)](https://app.circleci.com/pipelines/github/vegam17/aligntech)

## Launching with Docker

- Install [Docker](https://www.docker.com/) and ensure it is running
- Open a terminal and navigate to the root of this project
- Build the docker project by entering the command `docker compose up`
- Wait while the project is built. This involves downloading a docker image, installing modules and building the project.
- Once complete, you should see a message stating: 'You can now view aligntech in the browser'
- View the project at: [http://localhost:3000](http://localhost:3000)
- Issue the command `docker compose down` to stop the project

## Development

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm lint`

Runs the code linter to detect any code linting errors.\
