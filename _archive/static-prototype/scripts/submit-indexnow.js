/**
 * Submit all sitemap URLs to Bing IndexNow.
 * Usage: node scripts/submit-indexnow.js
 *
 * Requires the key file at site root:
 * https://tobytoki.hk/c4f8a2e91b7d3f6e0a5c8b2d9f1e4a7b.txt
 */

const INDEXNOW_KEY = "c4f8a2e91b7d3f6e0a5c8b2d9f1e4a7b";
const HOST = "tobytoki.hk";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/services.html`,
  `https://${HOST}/gallery.html`,
  `https://${HOST}/about.html`,
  `https://${HOST}/contact.html`,
  `https://${HOST}/blog/`,
  `https://${HOST}/blog/birthday-party-face-painting-tips.html`,
  `https://${HOST}/blog/face-paint-safety-for-kids.html`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/okf/index.md`,
  `https://${HOST}/.well-known/ai-catalog.json`,
];

async function submit() {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  if (!res.ok) {
    const text = await res.text();
    console.error(text);
    process.exit(1);
  }
  console.log(`Submitted ${URL_LIST.length} URLs to IndexNow.`);
}

submit().catch((err) => {
  console.error(err);
  process.exit(1);
});
