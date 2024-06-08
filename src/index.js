import {API_KEY} from './env.js'
import { mainNewsElement,
  mainNewsRightSideElement
 } from './common.js'
const articleElement = document.querySelector('.realtime');

const url = `https://newsapi.org/v2/
top-headlines?country=us&apiKey=${API_KEY}`

let artikull = [];
fetch(url).then(response => {
  if(!response.ok) {
     console.log('Something went wrong');
     return;
   }
  
   return response.json();
})
.then(data => {
  const { articles } = data;
  articles.forEach(article=>{
    const { title, urlToImage, description} = article;
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
  articleElement.insertAdjacentHTML('afterbegin',articleHTML)  ;  
   
}) 
// render mainNews top5


articles.forEach(article=>{
  let { title, urlToImage, description} = article;
  if (description == null) return;
  if (urlToImage == null) return;
  if (description == '[Removed]') return;
  artikull.push({title, description, urlToImage})

})




    for(let i=0; i<5; i++)
      {
        let mainNewsRightSideHTML = ` <div 
          class="flex artikull mt-2 bg-slate-100 dark:bg-neutral-800 opacity-85 hover:opacity-100 hover:shadow-md">
          <img src="${artikull[i].urlToImage}" class="w-1/3" alt="" />
          <p id=${i} class="m-1 dark:text-gray-300">
            ${artikull[i].title}
          </p>
        </div>`
  mainNewsRightSideElement.insertAdjacentHTML('afterbegin', mainNewsRightSideHTML);
       
      }
      mainNewsRightSideElement.addEventListener('click', e => {
        e.preventDefault();
        e.target.closest('#id');

       let id = e.target.getAttribute('id') ?? 0;

       let mainNewsHTML = `<div class="opacity-95 hover:opacity-100 mr-2">
          <img src="${artikull[id].urlToImage}" alt="" class="opacity-90" />
          <div
            class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white"
          >
            <h3 class="p-2 md:text-lg">
             ${artikull[id].title}
            </h3>
          </div>
        </div>
`
id=0;
mainNewsElement.insertAdjacentHTML('afterbegin', mainNewsHTML);
      })
      



}


)
.catch(
  error => {
    console.log(error);
  }
)
// article.innerHTML = `${data}`


