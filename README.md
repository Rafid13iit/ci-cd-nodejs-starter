# Node.js CI/CD Learning Project

A simple Node.js project to learn CI/CD using **GitHub Actions** and **Vercel**. The pipeline automates testing and deployment on every push to the `master` branch.

## Features
- Automated testing with **Jest**.
- Continuous deployment to **Vercel**.

## Workflow
1. Push code to `master` → Triggers CI/CD pipeline.
2. Run tests → Verifies functionality.
3. Deploy to Vercel → If tests pass, the app is deployed.

## Run Locally
```bash
npm install
npm start
```

## Run Tests
```bash
npm test
```

## Deployment
Your app will be automatically deployed to Vercel. The deployed app will be available at:
```
https://<your-vercel-project-name>.vercel.app
```

## Notes
- Every push to the `master` branch triggers the CI/CD pipeline.
- Pull requests will create unique preview deployments on Vercel.

Happy coding!

