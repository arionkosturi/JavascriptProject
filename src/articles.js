import {
  articleElement
} from './common.js'
export default function Articles(settings) {
  let url = settings.url
  let articleHTML = ''

  fetch(url).then(response => {
    if(!response.ok) {
    console.log('Something went wrong');
    return;
     }
     return response.json();
  }).then(data=>{
    let articles = data

    for (articles of articles) {

    
    
     articleHTML += `<article class="flex bg-white shadow-xl hover:shadow-xl my-3">
    
           <div class="flex flex-row w-1/2">
       <a href="article.html?id=${articles._id}">
        <img alt="" src=${articles.imgUrl} class="w-full h-34 p-1" />
        </a>
  
        </div>
  
      <div class="flex flex-col justify-between dark:bg-neutral-900 w-1/2">
      <div
          class="border-gray-900/10 border-s p-2 sm:p-4 sm:border-l-transparent"
        >
          <a href="article.html?id=${articles._id}">
            <h3
              class="line-clamp-2 sm:line-clamp-3 font-bold text-gray-900 dark:text-white uppercase"
            >
            ${articles.title}
            </h3>
          </a>
  
          <p class="line-clamp-3 mt-4 dark:text-gray-50"> ${articles.description}
          </p>
        </div>
  
        <div class="sm:flex sm:justify-end sm:items-end">
          <a
            href="article.html?id=${articles._id}"
            class="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
          >
          Lexo me shume...
        </a>
        </div>
  
      </div>
    </article>`
    articleElement.innerHTML = articleHTML; 
  
  }
})
.catch(
  error => {
    console.log(error);
  }
)
}