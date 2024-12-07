// utils/scrapeGoogleMaps.js
const puppeteer = require("puppeteer");

const scrapeGoogleMaps = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    const extractData = () => {
      const email = document
        .querySelector('a[href^="mailto:"]')
        ?.href.replace("mailto:", "");
      const name = document.querySelector(
        ".section-hero-header-title-title"
      )?.innerText;
      const website = document.querySelector(
        'a[data-tooltip="Open website"]'
      )?.href;
      const facebookLink = Array.from(document.querySelectorAll("a")).find(
        (a) => a.href.includes("facebook.com")
      )?.href;
      const reviews = Array.from(
        document.querySelectorAll(".section-review-content")
      ).map((review) => review.innerText);

      return { email, name, website, facebookLink, reviews };
    };

    return extractData();
  });

  await browser.close();
  return data;
};

module.exports = scrapeGoogleMaps;
