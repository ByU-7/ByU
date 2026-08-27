async function searchIMDB(title) {
  try {
    const res = await fetch('https://v3.sg.media-imdb.com/suggestion/x/' + encodeURIComponent(title) + '.json');
    const data = await res.json();
    if (data.d && data.d.length > 0 && data.d[0].i) {
      return data.d[0].i.imageUrl;
    }
  } catch(e) {}
  return null;
}
async function run() {
  console.log('12 Angry Men', await searchIMDB('12 Angry Men'));
  console.log('Hacksaw Ridge', await searchIMDB('Hacksaw Ridge'));
  console.log('Sheep Detective', await searchIMDB('Sheep Without a Shepherd'));
  console.log('Grave of the Fireflies', await searchIMDB('Grave of the Fireflies'));
}
run();
