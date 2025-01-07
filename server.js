const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD with GitHub Actions and Vercel!');
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}
