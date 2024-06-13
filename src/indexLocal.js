import { mainNewsElement,
  mainNewsRightSideElement,
  articleElement,
  categoriesElement,
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
  const { articles } = data;



  articles.forEach(article=>{
    // const { title, urlToImage, description} = article;
    // if (description == null) return;
    // if (description == '[Removed]') return;
    // if (urlToImage == null) return;
    // artikull.push({title, description, urlToImage})

    const articleHTML = `<article class="flex bg-white shadow-xl hover:shadow-xl my-3">
    <div class="flex flex-row w-1/2">
      <img alt="" src=${article.imageUrl} class="w-full h-34 p-1" />
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

        <p class="line-clamp-4"> ${article.description}
        </p>
      </div>

      <div class="sm:flex sm:justify-end sm:items-end">
        <a
          href="?id=${article.articleId}"
          class="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
        >
        Lexo
      </a>
      </div>
    </div>
  </article>`
  articleElement.insertAdjacentHTML('beforeend',articleHTML)  ; 
    
})
  articles.slice(0,5).forEach(article => {
      let mainNewsRightSideHTML = ` <div 
      class="flex artikull mt-2  bg-slate-100 dark:bg-neutral-800 opacity-85 hover:opacity-100 hover:shadow-md">
      <img src="${article.imageUrl}" class="w-1/3" alt="" />
      <p id=${article.articleId} class="m-1  dark:text-gray-300 text-md lg:text-lg line-clamp-2">
        
      ${article.title}
      </p>
    </div>`
  mainNewsRightSideElement.insertAdjacentHTML('afterbegin', mainNewsRightSideHTML);
  mainNewsElement.innerHTML = `<div class="opacity-95 hover:opacity-100 mr-2">
      <img src="${article.imageUrl}" alt="" class="opacity-90" />
      <div
        class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white"
      >
        <h3 class="p-2 md:text-xl  ">
         ${article.title}
        </h3>
      </div>
    </div>`

    
})

mainNewsRightSideElement.addEventListener('click', e => {
  e.preventDefault();
  let id = e.target.getAttribute('id');
  

mainNewsElement.innerHTML = `<div id="${id} class="opacity-95 hover:opacity-100 mr-2">
    <img src="" alt="" class="opacity-90" />
    <div
      class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white"
    >
      <h3 class="p-1 md:text-xl line-clamp-2 ">
       {article.title}
      </h3>
    </div>
  </div>`;

//   }


//   }) 
})
// render mainNews top5

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