import { mainNewsElement } from './common.js';
import {API_KEY} from './env.js'
const url = `https://newsapi.org/v2/
top-headlines?country=us&apiKey=${API_KEY}`


export const mainNews = fetch(url).then(response => {
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

    const img = urlToImage ?? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freeiconspng.com%2Fuploads%2Fno-image-icon-11.PNG&f=1&nofb=1&ipt=b07d73c8fd18162a2f40a515ab49c82baedddf0f43df51447312d3def47bb6b7&ipo=images'
    const mainNewsHTML = `
    <div class="opacity-95 hover:opacity-100 mr-2">
    <img src="assets/img/matt.webp" alt="" class="opacity-90" />
    <div
      class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white"
    >
      <h3 class="p-2 md:text-lg">
       ${title}
      </h3>
    </div>
  </div>
  `
  
}).catch(
  error => {
    console.log(error);
  }
)
})
console.log(mainNewsHTML);