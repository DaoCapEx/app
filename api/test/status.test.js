import app from '../index';
import supertest from 'supertest';

/**
 * Test the GET route for home /
*/
describe('Dao API', () => {
    it('returns status to be OK', async () => {
        return supertest(app).get('/')
            .expect(200)
            .then((res) => {
                expect(res.body).toHaveProperty('status', 'ok');
            });
    });
});