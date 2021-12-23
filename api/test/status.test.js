import axios from 'axios';

/**
 * Test the GET route for home /
*/
describe('Dao API', () => {
    it('returns status to be OK', async () => {
        const apiUrl = 'http://localhost:2015/';
        const res = await axios(apiUrl);
        const data = res.data;
        expect(data).toHaveProperty('status', 'ok');
    });
});