import { 
  headerElement,
  footerElement,
  localApi,
  categoriesElement,
  searchedArticlesElement
 } from './common.js'
 import categoriesHTML from "./modules/categories.js";
 // Header
 import { headerHTML } from './components/Header.js'
 headerElement.insertAdjacentHTML('afterbegin',headerHTML);

 

function getSearchedArticles(q) {
  fetch(`${localApi}/search/${q.q}`).then(response =>{
    if(!response.ok) {
    console.log('Something went wrong');
    return;
    }
    
    return response.json();
  }).then(data =>{

    data.forEach(data =>{
     let searchedArticlesHTML = `<article class="flex w-[95%] ml-8 bg-white shadow-xl hover:shadow-xl my-3">
      <div class="flex flex-row w-1/3">
        <img alt="" src=${data.imgUrl} class="w-full h-34 p-1" />
      </div>
      
      <div class="flex flex-col justify-between dark:bg-neutral-900 w-2/3">
        <div
          class="border-gray-900/10 border-s p-2 sm:p-4 sm:border-l-transparent"
        >
          <a href="#">
            <h3
              class="line-clamp-2 sm:line-clamp-3 font-bold text-gray-900 dark:text-gray-300 uppercase"
            >
            ${data.title}
            </h3>
          </a>
  
          <p class="line-clamp-4"> ${data.description}
          </p>
        </div>
  
        <div class="sm:flex sm:justify-end sm:items-end">
          <a
            href="article.html?id=${data._id}"
            class="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
          >
          Lexo me shume
        </a>
        </div>
      </div>
    </article>`
    searchedArticlesElement.insertAdjacentHTML('beforeend', searchedArticlesHTML);

    })
    


}).catch(err=>{
    console.log(err);
  })
}

const searchField = document.querySelector('input')
searchField.addEventListener('keyup', event => {
            const query = event.target.value
            let searchHTML ='';
        if (event.target.value.length >= 3) {

        
           switch(event.keyCode) {
                case 13:
                searchedArticlesElement.classList.add('p-8')
                searchedArticlesElement.innerHTML = `<p class="dark:text-white flex"> Searched for: <span class="text-purple-700">${query}</span></p>`;
                searchedArticlesElement.insertAdjacentHTML('afterbegin', searchHTML) 
                scrollTo(0,0)
                search({
                      q:query
                    }) 
                break
            }
          }
        })

export default function search(q) {
  getSearchedArticles(q);
}

