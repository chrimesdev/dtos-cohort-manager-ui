import { test, expect } from "@playwright/test";

test("navigate to the Overview page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/Overview/);
});

test("navigate from Overview to Exceptions summary", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Breast screening exceptions" }).click();
  await expect(
    page.getByRole("heading", { name: "Exceptions summary" })
  ).toBeVisible();
});

test("navigate from Exceptions summary to Participant information", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Breast screening exceptions" }).click();
  await page.getByRole("link", { name: "723 333 6897" }).click();
  await expect(
    page.getByRole("heading", { name: "Participant information" })
  ).toBeVisible();
});
