const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('responds with Hello, CI/CD with Vercel!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello, CI/CD with Vercel! Let\'s test this!'); 
    });
});
