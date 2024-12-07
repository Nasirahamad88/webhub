import puppeteer from "puppeteer";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
    });
  }

  let browser;
  try {
    console.log(`Launching browser to scrape URL: ${url}`);
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    console.log(`Navigating to URL: ${url}`);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });

    // Wait for a key element that indicates the page is fully loaded
    await page.waitForSelector(
      '.section-hero-header-title, .section-review-text, a[href^="mailto:"]',
      { timeout: 10000 }
    );

    const data = await page.evaluate(() => {
      const nameElement = document.querySelector(".section-hero-header-title");
      const name = nameElement ? nameElement.innerText : "No name found";

      const reviewElements = document.querySelectorAll(".section-review-text");
      const reviews =
        reviewElements.length > 0
          ? Array.from(reviewElements).map((review) => review.innerText)
          : [];

      const emailElements = document.querySelectorAll('a[href^="mailto:"]');
      const emails =
        emailElements.length > 0
          ? Array.from(emailElements).map((email) =>
              email.href.replace("mailto:", "")
            )
          : [];

      return { name, reviews, emails };
    });

    console.log(`Scraping completed successfully for URL: ${url}`);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Scraping error:", error);
    return new Response(
      JSON.stringify({
        error: "Error scraping the data",
        details: error.message,
      }),
      { status: 500 }
    );
  } finally {
    if (browser) {
      console.log("Closing browser");
      await browser.close();
    }
  }
}
