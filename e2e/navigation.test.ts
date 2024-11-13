import { test, expect } from "@playwright/test";

test("navigate to the Overview page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});

test("navigate from Overview to Exceptions summary", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Breast screening exceptions" }).click();
  await expect(
    page.getByRole("heading", { name: "Exceptions summary" })
  ).toBeVisible();
});

test("navigate from Exceptions summary to Participant information", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Breast screening exceptions" }).click();
  await page.getByRole("link", { name: "10001767" }).click();
  await expect(
    page.getByRole("heading", { name: "Participant information" })
  ).toBeVisible();
});
