import { mainNewsElement,
  mainNewsRightSideElement,
  articleElement,
  categoriesElement,
  state,
  localApi } from './common.js'
import renderLocalTopFive from "./modules/localTopFive.js";
import categoriesHTML from "./modules/categories.js";
let artikull = [];

// let params = new URLSearchParams(document.location.href.split("?")[1])
// let id = params.get("id") 

fetch(localApi).then(response => {
  if(!response.ok) {
     console.log('Something went wrong');
     return;
   }

   return response.json();
}).then(data=>{
  state.articles = data

  state.articles.forEach(article=>{
    // const { title, urlToImage, description} = article;
    // if (description == null) return;
    // if (description == '[Removed]') return;
    // if (urlToImage == null) return;
    // artikull.push({title, description, urlToImage})

    const articleHTML = `<article class="flex bg-white shadow-xl hover:shadow-xl my-3">
    <div class="flex flex-row w-1/2">
      <img alt="" src=${article.imgUrl} class="w-full h-34 p-1" />
    </div>

    <div class="flex flex-col justify-between dark:bg-neutral-900 w-1/2">
      <div
        class="border-gray-900/10 border-s p-2 sm:p-4 sm:border-l-transparent"
      >
        <a href="#">
          <h3
            class="line-clamp-2 sm:line-clamp-3 font-bold text-gray-900 dark:text-gray-300 uppercase"
          >
          ${article.title}
          </h3>
        </a>

        <p class="line-clamp-3"> ${article.description}
        </p>
      </div>

      <div class="sm:flex sm:justify-end sm:items-end">
        <a
          href="article.html?id=${article._id}"
          class="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
        >
        Lexo
      </a>
      </div>
    </div>
  </article>`
  articleElement.insertAdjacentHTML('beforeend',articleHTML)  ; 
    
})

for(let i=0; i<5; i++)
  { 
    artikull.push(state.articles[i])
    let mainNewsRightSideHTML = ` <div id=${i}
      class="flex artikull mt-2  bg-slate-100 dark:bg-neutral-800 opacity-85 hover:opacity-100 hover:shadow-md">
      <img src="${artikull[i].imgUrl}" class="w-1/3" alt="" />
      <p id=${i} class="m-1  dark:text-gray-300 text-md lg:text-lg line-clamp-2">
        ${artikull[i].title}
      </p>
    </div>`
  mainNewsRightSideElement.insertAdjacentHTML('afterbegin', mainNewsRightSideHTML);

  mainNewsElement.innerHTML = `<div class="opacity-95 hover:opacity-100 mr-2">
  <img src="${artikull[0].imgUrl}" alt="" class="opacity-90" />
      <div
        class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white"
        <h3 class="p-2 md:text-5xl text-gray">
         ${artikull[0].title}
        </h3>
      </div>
    </div>`  
}
mainNewsRightSideElement.addEventListener('click', e => {
    e.preventDefault();
    let id = 0;
    id = e.target.getAttribute('id');
      // id = e.target.parent.parent('id');
      console.log(e.target.parent);
mainNewsElement.innerHTML = `<div  class="opacity-95 hover:opacity-100 mr-2">
      <img src="${artikull[id].imgUrl}" alt="" class="opacity-90" />
      <div 
        class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white">
        <h3 class="p-1 md:text-xl line-clamp-2 ">
         ${artikull[id].title}
        </h3>
      </div>
    </div>`;
  })

// // }
// // )
// .catch(
//   error => {
//     console.log(error);
//   }
// )
// renderLocalTopFive();
categoriesElement.insertAdjacentHTML('beforebegin', categoriesHTML );
})