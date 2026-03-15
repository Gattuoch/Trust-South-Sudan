import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// List all your site URLs
const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/news", changefreq: "weekly", priority: 0.7 },
  { url: "/programs", changefreq: "monthly", priority: 0.7 },
  { url: "/impact", changefreq: "monthly", priority: 0.7 },
  { url: "/membership", changefreq: "monthly", priority: 0.6 },
  { url: "/donate", changefreq: "monthly", priority: 0.6 },
];

// Create sitemap stream
const sitemapStream = new SitemapStream({ hostname: "https://trust-south-sudan.vercel.app" });

// Add URLs to the sitemap
links.forEach(link => sitemapStream.write(link));

// End the stream
sitemapStream.end();

// Generate XML and write to file
const sitemapXML = await streamToPromise(sitemapStream).then(data => data.toString());
fs.writeFileSync("./public/sitemap.xml", sitemapXML);

console.log("Sitemap generated successfully!");
