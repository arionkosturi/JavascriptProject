import { 
  footerElement,
  singleArticleElement,
  localApi,
  categoriesElement
 } from './common.js'
 import categoriesHTML from "./modules/categories.js";
 import './components/Darkmode.js'



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
    
    singleArticleElement.innerHTML = `<section class="bg-white container mx-auto dark:bg-gray-900">
    <div class="container mx-auto">
        <h1 class="text-3xl mt-8 font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">${data.title}</h1>
        <div class="mt-8 lg:-mx-6">
            <img class="object-cover w-[90%] lg:mx-6 rounded-xl h-72" src="${data.imgUrl}"alt="">
            <div class="mt-6  lg:mt-0 lg:mx-6 ">
              <a href='category.html?category=${data.category}'>  <p class="text-lg p-2 text-purple-700 font-bold uppercase">${data.category}</p></a>
                <p class="block mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    ${data.description}
                </p>
                <p class="mt-3 text-lg text-gray-500 dark:text-gray-300 md:text-md">
                    ${data.content}
                </p>
                <p class="my-8 text-lg text-gray-500 dark:text-gray-300 md:text-md content-2"></p>
                <div class="img2 w-[90%]"></div>
                <p class="my-8 text-lg text-gray-500 dark:text-gray-300 md:text-md content-3">
                </p>
                <a href="${data.sourceUrl}" target="_blank" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Source</a>
                <div class="flex items-center mt-6">
                <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">
                <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">${data.author}</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Journalist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`

// Check if additional data exists
if (data.content2) { document.querySelector('.content-2').innerHTML = `${data.content2}` }
if (data.content3) { document.querySelector('.content-3').innerHTML = `${data.content3}` }
if (data.img2Url) {document.querySelector('.img2').innerHTML = `
<img class="object-cover w-3/4 lg:mx-6 rounded-xl h-72 lg:h-96" src="${data.img2Url}"alt="">
` }

}).catch(err=>{
    console.log(err);
  })
}
export default function article(id) {
  getArticle(id);
}