import { test, expect } from "@playwright/test";

test.describe("Vortexz Solutions QA Test Suite", () => {
  // 1. Homepage loads
  test("1. Homepage loads successfully with hero, brand elements, and sections", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Vortexz Solutions/i);

    // Hero headline
    const heroHeading = page.locator("h1");
    await expect(heroHeading).toContainText("Digital Solutions Built for Growing Businesses");

    // Brand elements
    await expect(page.locator("text=VORTEXZ SOLUTIONS").first()).toBeVisible();

    // CTA buttons
    const startProjectBtn = page.locator('a:has-text("Start a Project")').first();
    await expect(startProjectBtn).toBeVisible();

    // Check main sections exist
    await expect(page.locator("text=What We Build")).toBeVisible();
    await expect(page.locator("text=Selected Work")).toBeVisible();
    await expect(page.locator("text=Built Around Your Business")).toBeVisible();
    await expect(page.locator("text=From Idea to Launch")).toBeVisible();
    await expect(page.locator("text=Local Understanding. Global Delivery.")).toBeVisible();
  });

  // 2. Navigation works
  test("2. Navigation links in desktop navbar work properly", async ({ page }) => {
    await page.goto("/");

    // Click Services in desktop nav
    const servicesLink = page.locator('nav[aria-label="Main Navigation"] a:has-text("Services")');
    await servicesLink.click();
    await expect(page).toHaveURL(/\/services/);
    await expect(page.locator("h1")).toContainText("Technology Solutions");

    // Click Projects
    const projectsLink = page.locator('nav[aria-label="Main Navigation"] a:has-text("Projects")');
    await projectsLink.click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.locator("h1")).toContainText("Projects That Turn Ideas");

    // Click Let's Talk CTA
    const letsTalkBtn = page.locator('header a:has-text("Let\'s Talk")').first();
    await letsTalkBtn.click();
    await expect(page).toHaveURL(/\/contact-us/);
  });

  // 3. Services page opens
  test("3. Services page displays all 8 core services and workflow", async ({ page }) => {
    await page.goto("/services");
    await expect(page).toHaveTitle(/Services/i);

    // Verify service titles
    await expect(page.locator("h3:has-text('Business Website Development')")).toBeVisible();
    await expect(page.locator("h3:has-text('E-Commerce Development')")).toBeVisible();
    await expect(page.locator("h3:has-text('Custom Web Systems')")).toBeVisible();
    await expect(page.locator("h3:has-text('Mobile Application Development')")).toBeVisible();
    await expect(page.locator("h3:has-text('UI/UX Design')")).toBeVisible();
    await expect(page.locator("h3:has-text('Custom Software Development')")).toBeVisible();
    await expect(page.locator("h3:has-text('Website Maintenance & Support')")).toBeVisible();

    // How We Work section
    await expect(page.locator("text=From Concept to Production")).toBeVisible();
  });

  // 4. Projects page opens
  test("4. Projects page loads portfolio grid with case studies", async ({ page }) => {
    await page.goto("/projects");
    await expect(page).toHaveTitle(/Projects/i);

    const projectCards = page.locator("article");
    await expect(projectCards.first()).toBeVisible();
    const count = await projectCards.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  // 5. Project filter works
  test("5. Project filter tabs smoothly update displayed projects", async ({ page }) => {
    await page.goto("/projects");

    // Click E-Commerce filter
    const ecommerceBtn = page.locator('button:has-text("E-Commerce")');
    await ecommerceBtn.click();

    // Verify only E-Commerce projects are visible
    await expect(page.locator("text=Aurora DTC Lifestyle E-Commerce")).toBeVisible();
    await expect(page.locator("text=Zenith Advisory Corporate Website")).not.toBeVisible();

    // Click All filter
    const allBtn = page.locator('button:has-text("All")');
    await allBtn.click();
    await expect(page.locator("text=Zenith Advisory Corporate Website")).toBeVisible();
  });

  // 6. Project detail page opens
  test("6. Project detail case study page renders full breakdown", async ({ page }) => {
    await page.goto("/projects/apex-logistics-portal");
    await expect(page).toHaveTitle(/Apex Logistics Management System/i);

    // Case study sections
    await expect(page.locator("h1")).toContainText("Apex Logistics Management System");
    await expect(page.locator("text=The Operational Challenge")).toBeVisible();
    await expect(page.locator("text=The Engineering Solution")).toBeVisible();
    await expect(page.locator("text=Key System Capabilities")).toBeVisible();
    await expect(page.locator("text=Delivered Artifacts")).toBeVisible();

    // Back to all projects link
    const backLink = page.locator('a:has-text("Back to All Projects")');
    await expect(backLink).toBeVisible();
  });

  // 7. About Us opens
  test("7. About Us page renders philosophy and regional presence", async ({ page }) => {
    await page.goto("/about-us");
    await expect(page).toHaveTitle(/About Us/i);

    await expect(page.locator("h1")).toContainText("Building Digital Solutions With Purpose");
    await expect(page.locator("text=A Dedicated Software Solutions Partner.")).toBeVisible();
    await expect(page.locator("text=How We Approach Engineering")).toBeVisible();
    await expect(page.locator("text=Sri Lanka").first()).toBeVisible();
    await expect(page.locator("text=Australia").first()).toBeVisible();
  });

  // 8. Contact page opens
  test("8. Contact page renders inquiry form and regional hubs", async ({ page }) => {
    await page.goto("/contact-us");
    await expect(page).toHaveTitle(/Contact Us/i);

    await expect(page.locator("h1")).toContainText("Let's Build Something Together");
    await expect(page.locator("form")).toBeVisible();
    await expect(page.locator('input[name="fullName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="country"]')).toBeVisible();
    await expect(page.locator('select[name="service"]')).toBeVisible();
    await expect(page.locator('textarea[name="description"]')).toBeVisible();
  });

  // 9. Contact form validation works
  test("9. Contact form validation detects missing fields and submits properly", async ({
    page,
  }) => {
    await page.goto("/contact-us");

    const submitBtn = page.locator('button[type="submit"]:has-text("Send Inquiry")');
    await submitBtn.click();

    // Check client-side validation errors
    await expect(page.locator("text=Full name is required.")).toBeVisible();
    await expect(page.locator("text=Email address is required.")).toBeVisible();
    await expect(page.locator("text=Please provide a brief project description.")).toBeVisible();

    // Fill valid data
    await page.fill('input[name="fullName"]', "Randimal Fernando");
    await page.fill('input[name="company"]', "Tech Venture LK");
    await page.fill('input[name="email"]', "randimal@example.com");
    await page.fill('input[name="phone"]', "+94 77 123 4567");
    await page.selectOption('select[name="country"]', "Sri Lanka");
    await page.selectOption('select[name="service"]', "Custom Web System");
    await page.fill(
      'textarea[name="description"]',
      "We need a custom dispatch and inventory portal for our retail distribution business."
    );

    await submitBtn.click();

    // Verify success state
    await expect(page.locator("text=Inquiry Received")).toBeVisible({ timeout: 5000 });
    await expect(
      page.locator("text=Thank you for reaching out to Vortexz Solutions")
    ).toBeVisible();
  });

  // 10. Mobile navigation works
  test("10. Mobile hamburger menu opens and allows navigation", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Open hamburger
    const menuBtn = page.locator('button[aria-label="Open menu"]');
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    // Mobile nav drawer visible
    const mobileDrawer = page.locator("#mobile-navigation");
    await expect(mobileDrawer).toBeVisible();

    // Click Services in mobile nav
    const mobileServicesLink = mobileDrawer.locator('a:has-text("Services")');
    await mobileServicesLink.click();

    await expect(page).toHaveURL(/\/services/);
    await expect(page.locator("h1")).toContainText("Technology Solutions");
  });
});
