import axios from 'axios';
import apiConfig from '../utils/api-url';

/**
 * Test the GET route for home /
 */
describe('Status API', () => {
    it('returns status to be OK', async () => {
        const url = apiConfig.home;
        const res = await axios(url);
        const data = res.data;
        expect(data).toHaveProperty('status', 'ok');
    });
});
