const fs = require('fs');
const html = fs.readFileSync('D:/project/temp_substack/posts/212661241.sebutir-debu-yang-hidup-sepersekian.html', 'utf-8');

// The HTML contains <p> tags, images, etc.
// Let's grab the text content and convert <p> to newlines.

let content = html.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '\n\n');
content = content.replace(/<[^>]+>/g, ''); // strip remaining HTML

// Fix encoding issues
content = content.replace(/\?o/g, '"')
                 .replace(/\?\?/g, '"')
                 .replace(/\?/g, '...')
                 .replace(/&quot;/g, '"')
                 .replace(/&#39;/g, "'")
                 .replace(/&amp;/g, '&');

// The last part contains Substack widget text ("Thanks for reading! Subscribe... Leave a comment")
content = content.replace(/Thanks for reading! Subscribe for free to receive new posts and support my work\..*/i, '');

// Clean up multiple newlines
content = content.replace(/\n\s*\n/g, '\n\n').trim();

const frontmatter = `---
title: "Sebutir Debu yang Hidup Sepersekian Kosmik"
description: "Merenungi eksistensi manusia dari perspektif kosmik melalui kacamata Carl Sagan tentang The Pale Blue Dot."
pubDate: "2026-08-28"
type: "Essay"
tags: ["Cosmos", "Philosophy", "Society"]
---

`;

fs.writeFileSync('d:/project/Personal Web/src/content/writing/sebutir-debu.md', frontmatter + content);
console.log('Success');
