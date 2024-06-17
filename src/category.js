import { 
  // headerElement,
  footerElement,
  articlesCategoryElement,
  localApi,
  categoriesElement
 } from './common.js'
 import categoriesHTML from "./modules/categories.js";

  // Footer
 import { footerHTML } from './components/Footer.js'
footerElement.insertAdjacentHTML('afterbegin',footerHTML);

// Categories
categoriesElement.insertAdjacentHTML('beforebegin', categoriesHTML );

function getCategory(categoryName) {
  fetch(`${localApi}/category/${categoryName.category}`).then(response =>{
    if(!response.ok) {
    console.log('Something went wrong');
    return;
    }
    
    return response.json();
  }).then(data =>{
    let categNameHTML = `<div class="mt-6 text-4xl font-bold p-2 text-purple-700">${categoryName.category}</div>`
    articlesCategoryElement.insertAdjacentHTML('beforebegin', categNameHTML) 
    data.forEach(data =>{
      let articlesByCategoryHTML = `<article class="flex mr-4 bg-white shadow-xl hover:shadow-xl my-3">
      <div class="flex flex-row w-1/2">
        <img alt="" src=${data.imgUrl} class="w-full h-34 p-1" />
      </div>
      
      <div class="flex flex-col justify-between dark:bg-neutral-900 w-1/2">
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
    articlesCategoryElement.insertAdjacentHTML('beforeend', articlesByCategoryHTML);

    })
    

}).catch(err=>{
    console.log(err);
  })
}
export default function category(categoryName) {
  getCategory(categoryName);
}