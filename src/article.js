import { 
  headerElement,
  footerElement,
  singleArticleElement,
  localApi,
  categoriesElement
 } from './common.js'
 import categoriesHTML from "./modules/categories.js";
 
 // Header
 import { headerHTML } from './components/Header.js'
 headerElement.insertAdjacentHTML('afterbegin',headerHTML);

 // Footer
 import { footerHTML } from './components/Footer.js'
footerElement.insertAdjacentHTML('afterbegin',footerHTML);

// Categories
categoriesElement.insertAdjacentHTML('beforebegin', categoriesHTML );



 function getArticle(id) {
  fetch(`${localApi}/${id.id}`).then(response =>{
    if(!response.ok) {
    console.log('Something went wrong');
    return;
    }
    return response.json();
  }).then(data =>{
    singleArticleElement.innerHTML = `<section class="bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <h1 class="text-2xl mt-8 font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">${data.title}</h1>

        <div class="mt-8 lg:-mx-6">
            <img class="object-cover w-full lg:mx-6 rounded-xl h-72 lg:h-96" src="${data.imgUrl}"alt="">

            <div class="mt-6  lg:mt-0 lg:mx-6 ">
                <p class="text-lg p-2 text-purple-700 font-bold uppercase">${data.category}</p>

                <pclass="block mt-4 text-3xl font-semibold text-gray-800 dark:text-white">
                    ${data.description}
                </p>

                <p class="mt-3 text-lg text-gray-500 dark:text-gray-300 md:text-md">
                    ${data.content}
                </p>

                <a href="${data.sourceUrl}" target="_blank" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Source</a>

                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Journalist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`
    console.log(data);
  }).catch(err=>{
    console.log(err);
  })
}
export default function article(id) {
  getArticle(id);
  console.log(id);
}