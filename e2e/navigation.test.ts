import { test, expect } from "@playwright/test";

test("navigate to the Homepage an unauthenticated users", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Log in with your Care Identity account",
    })
  ).toBeVisible();
});

// TODO: Click the Log in with my Care Identity button and check that the user is redirected to the correct log in provider endpoint

// TODO: Log in with an account that has access and expect to be redirected to the Overview page

// TODO: Log in with an account that does not have access and expect to be redirected to Log in with your Care Identity account page

// TODO: Check that the number of exceptions on the Overview page is same number as the number of the API results

// TODO: Navigate from the Overview page to the Exceptions summary page

// TODO: Try to access the Exceptions summary page without being logged in and expect to be redirected to the Log in with your Care Identity account page

// TODO: Navigate back from the from the Exceptions summary page to the Overview page

// TODO: Randomly select an exception ID from API data in the Exceptions summary page and navigate to the Participant details page

// TODO: Make sure that the expected content from the API is display on the Participant details page

// TODO: Make sure you can navigate back from the from the Patients details to the Exceptions summary page
