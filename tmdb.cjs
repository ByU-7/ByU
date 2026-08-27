async function scrapePoster(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const match = html.match(/<meta property="og:image" content="(https:\/\/image\.tmdb\.org\/t\/p\/[^"]+)"/);
    return match ? match[1] : null;
  } catch(e) { return null; }
}
async function run() {
  console.log('12 Angry Men', await scrapePoster('https://www.themoviedb.org/movie/389-12-angry-men'));
  console.log('Hacksaw Ridge', await scrapePoster('https://www.themoviedb.org/movie/324786-hacksaw-ridge'));
  // Sheep detective -> Probably "Sheep and Wolves" or "Zootopia"? Let's just search duckduckgo html for it.
  console.log('Grave of the Fireflies', await scrapePoster('https://www.themoviedb.org/movie/128-grave-of-the-fireflies'));
}
run();
