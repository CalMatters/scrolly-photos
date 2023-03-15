// playwright.config.ts
import { defineConfig } from '@playwright/test';
export default defineConfig({
    webServer: {
        command: 'npx http-server --port 3000',
        port: 3000,
        reuseExistingServer: true
    },
    use: {
        baseURL: 'http://localhost:3000/',
        // headless: false,
    },
});