const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('responds with Hello, CI/CD with GitHub Actions and Vercel! Good', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello, CI/CD with GitHub Actions and Vercel!');
    });
});