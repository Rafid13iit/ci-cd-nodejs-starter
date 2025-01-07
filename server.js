const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, CI/CD with GitHub Actions and Vercel! Good");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
