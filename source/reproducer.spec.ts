import { test } from "@playwright/test";

const adaptedTest = test.extend({
    async page({ browser }, use) {
        const context = await browser.newContext({
            recordHar: {
                path: "./test.har"
            }
        });
        await use(await context.newPage());
        await context.close();
    }
});

adaptedTest("webkit doesn't finish test in time if recording har and chunked request is in progress", async ({ page }) => {
    await page.goto("http://localhost:8000/index.html", { waitUntil: "load" });
    await page.waitForSelector("#pw-finished", { state: "attached", timeout: 15000 });
});
