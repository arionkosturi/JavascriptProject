import {API_KEY} from '../env.js'
const url = `https://newsapi.org/v2/
top-headlines?country=us&apiKey=${API_KEY}`

export const news = fetch(url).then(response => {
  if(!response.ok) {
     console.log('Something went wrong');
     return;
   }
   return response.json();
})
.then(data => {
  const { articles } = data
  articles.forEach(article=>{
    const { title, author, urlToImage, description} = article;
    if (description == null) return;
    if (description == '[Removed]') return;
    let articleTitle = title;
    let articleDescription = description;



    return articleTitle;
    
}
)

})
