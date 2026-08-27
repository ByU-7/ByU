async function run() {
  const artists = ['Reality Club', 'For Revenge', 'Taylor Swift', 'Linkin Park'];
  for (const a of artists) {
    try {
      const res = await fetch('https://itunes.apple.com/search?term=' + encodeURIComponent(a) + '&entity=album&limit=1');
      const data = await res.json();
      console.log('ARTIST', a, data.results[0] ? data.results[0].artworkUrl100.replace('100x100', '600x600') : 'NONE');
    } catch(e) { console.error(e) }
  }
  
  const movies = ['12 Angry Men (1957 film)', 'Hacksaw Ridge', 'Zootopia', 'Grave of the Fireflies']; 
  for (const m of movies) {
    try {
      const res = await fetch('https://en.wikipedia.org/w/api.php?action=query&titles=' + encodeURIComponent(m) + '&prop=pageimages&format=json&pithumbsize=500');
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      console.log('MOVIE', m, pages[pageId].thumbnail ? pages[pageId].thumbnail.source : 'NONE');
    } catch(e) { console.error(e) }
  }
}
run();
