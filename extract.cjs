const fs = require('fs');
const html = fs.readFileSync('C:/Users/Bayu Distira/.gemini/antigravity/brain/7b1aced3-51ed-467a-b396-9b99bb570f8c/.system_generated/steps/832/content.md', 'utf-8');
const match = html.match(/<div class='post-body entry-content[^>]*>([\s\S]*?)<\/div>\s*<div class='post-footer'>/i);
if (match) {
  let content = match[1].replace(/<br\s*\/?>/gi, '\n')
                          .replace(/<\/p>/gi, '\n\n')
                          .replace(/<[^>]+>/g, '') 
                          .replace(/&nbsp;/g, ' ')
                          .replace(/&#8220;/g, '"')
                          .replace(/&#8221;/g, '"')
                          .replace(/&#8211;/g, '-')
                          .trim();
  
  // Remove multiple newlines
  content = content.replace(/\n\s*\n/g, '\n\n');

  const frontmatter = `---
title: '"Memangnya Siapa Yang Sakit?" Mengubah Cara Pandang Kita Terhadap Cek Kesehatan'
description: 'Coba bayangkan kita mengajak seorang teman, rekan kerja, atau anggota keluarga yang tampak sehat untuk datang ke puskesmas. Apa respons pertamanya?'
pubDate: '2026-08-27'
type: 'Opinion'
tags: ['Health', 'Society']
---

`;
  
  fs.writeFileSync('d:/project/Personal Web/src/content/writing/kesehatan.md', frontmatter + content);
  console.log('Success');
} else {
  console.log('Match failed');
}
