function getKanyeQuotes()  {
    fetch('https://api.kanye.rest/').then((json)=> console.log(json)).catch((error) => console.error(error))
}