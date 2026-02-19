import { expect, test } from "@playwright/test";

const staticRoutes = [
  "/",
  "/work",
  "/services",
  "/systems",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

test.describe("AVD smoke", () => {
  for (const route of staticRoutes) {
    test(`route renders with single H1: ${route}`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("h1")).toHaveCount(1);
    });
  }

  test("work detail route opens from card", async ({ page }) => {
    await page.goto("/work");
    const firstProjectLink = page.locator('main a[href^="/work/"]:not([href="/work"])').first();
    await expect(firstProjectLink).toBeVisible();

    const href = await firstProjectLink.getAttribute("href");
    expect(href).toBeTruthy();

    await firstProjectLink.click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("contact form triggers mailto flow", async ({ page }) => {
    await page.addInitScript(() => {
      (window as Window & { __lastOpened?: string }).__lastOpened = "";

      window.open = ((url?: string | URL) => {
        (window as Window & { __lastOpened?: string }).__lastOpened = String(url ?? "");
        return null;
      }) as Window["open"];
    });

    await page.goto("/contact");

    await page.fill("#name", "Alex Rivera");
    await page.fill("#organization", "Example Corp");
    await page.fill("#email", "alex@example.com");
    await page.fill("#phone", "+1 555 010 8888");
    await page.selectOption("#projectType", "Website + CRM");
    await page.selectOption("#budget", "$15k-$30k");
    await page.selectOption("#timeline", "1-2 months");
    await page.fill("#message", "Need a fast website build with CRM integration and analytics setup.");

    await page.click('button:has-text("Send Project Details")');

    const opened = await page.evaluate(() => {
      return (window as Window & { __lastOpened?: string }).__lastOpened ?? "";
    });

    expect(opened.startsWith("mailto:")).toBeTruthy();
    expect(opened).toContain("subject=");
    expect(opened).toContain("body=");
  });
});
