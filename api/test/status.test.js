import axios from 'axios';
import { API_URL } from '../tests/api/api-url';

/**
 * Test the GET route for home /
 */
describe('Status API', () => {
    it('returns status to be OK', async () => {
        const res = await axios(`${API_URL}/`);
        const data = res.data;
        expect(data).toHaveProperty('status', 'ok');
    });
});
