import puppeteer from 'puppeteer';
import {APP_URL} from './app-url';

/**
 * PAGE LOADS SUCCESSFULLY
 */
describe('On page load', () => {
    test('Home page loads correctly', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage()

        page.emulate({
            viewport: {
                width: 500,
                height: 2400,
            },
            userAgent: ""
        })

        const app_url = APP_URL;

        await page.goto(app_url);
        const html = await page.$eval('h5', e => e.innerHTML);
        expect(html).toBe('Login or Register');

        browser.close();
    }, 16000);
});
