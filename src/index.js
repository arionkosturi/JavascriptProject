import {API_KEY} from './env.js'
import { mainNews } from './mainNews.js'
import { mainNewsElement } from './common.js'
const articleElement = document.querySelector('.realtime');

const url = `https://newsapi.org/v2/
top-headlines?country=us&apiKey=${API_KEY}`

fetch(url).then(response => {
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
    const articleHTML = `<article class="flex bg-white shadow-xl hover:shadow-xl my-3">
    <div class="flex flex-row w-1/2">
      <img alt="" src=${img} class="w-full h-34 p-1" />
    </div>

    <div class="flex flex-col justify-between dark:bg-neutral-900 w-1/2">
      <div
        class="border-gray-900/10 border-s p-2 sm:p-4 sm:border-l-transparent"
      >
        <a href="#">
          <h3
            class="line-clamp-2 sm:line-clamp-3 font-bold text-gray-900 dark:text-gray-300 uppercase"
          >
          ${title}
          </h3>
        </a>

        <p class="line-clamp-4"> ${description}
        </p>
      </div>

      <div class="sm:flex sm:justify-end sm:items-end">
        <a
          href="#"
          class="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
        >
        Lexo me shume
      </a>
      </div>
    </div>
  </article>`
  articleElement.insertAdjacentHTML('afterbegin',articleHTML)  ;  })  
}
)
.catch(
  error => {
    console.log(error);
  }
)

// article.innerHTML = `${data}`
mainNewsElement.insertAdjacentHTML('afterbegin', mainNews);