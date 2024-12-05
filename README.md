# Node.js CI/CD Learning Project

A simple Node.js project to learn CI/CD using **GitHub Actions** and **Heroku**. The pipeline automates testing and deployment on every push to the `main` branch.

## Features
- Automated testing with **Jest**.
- Continuous deployment to **Heroku**.

## Workflow
1. Push code to `main` → Triggers CI/CD pipeline.
2. Run tests → Verifies functionality.
3. Deploy to Heroku → If tests pass, the app is deployed.

## Run Locally
    npm install
    npm start

## Run Test
    npm test

## Deployment
    Your app will be available at:
    https://<your-heroku-app-name>.herokuapp.com


Happy coding!