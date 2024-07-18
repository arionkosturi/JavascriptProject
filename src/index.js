import {
  mainNewsElement,
  mainNewsRightSideElement,
  categoriesElement,
  footerElement,
  prevButton,
  nextButton,
  localApi,
} from "./common.js";
import categoriesHTML from "./modules/categories.js";
import Articles from "./articles.js";

// Footer
import { footerHTML } from "./components/Footer.js";
footerElement.insertAdjacentHTML("afterbegin", footerHTML);
// Categories
categoriesElement.insertAdjacentHTML("beforebegin", categoriesHTML);

// Search and Header
import "./search.js";
import "./components/Darkmode.js";

let artikull = [];
let pageN = 0;
let mainNewsRightSideHTML;

Articles({
  url: `${localApi}/?p=${pageN}`,
});

// Pagination
const paginetedView = document.querySelector(".pagination");
prevButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (pageN > 0) {
    pageN--;
  }
  Articles({ url: `${localApi}/?p=${pageN}` });
  paginetedView.scrollIntoView({ behavior: "smooth" });
});
nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  pageN++;
  Articles({ url: `${localApi}/?p=${pageN}` });
  paginetedView.scrollIntoView({ behavior: "smooth" });
});
fetch(`${localApi}/top`)
  .then((response) => {
    if (!response.ok) {
      console.log("Something went wrong");
      return;
    }

    return response.json();
  })
  .then((data) => {
    data.map((article, index) => {
      artikull.push(data[index]);
      mainNewsRightSideHTML = `<div id=${index}
             class="flex mb-2 lg:mt-0 artikull bg-slate-100 dark:bg-neutral-800 opacity-85 hover:opacity-100 hover:shadow-md">
             <img src="${article.imgUrl}" class="w-1/3 hover:cursor-default" alt="" />
             <p id=${index} class="p-1 dark:text-gray-300 text-sm lg:text-md">
               ${article.title}
             </p>
           </div>`;
      mainNewsRightSideElement.insertAdjacentHTML(
        "afterbegin",
        mainNewsRightSideHTML
      );
    });
    mainNewsElement.innerHTML = `<div class="opacity-95 hover:opacity-100 mr-2">
  <a href="article.html?id=/">
  <img src="${artikull[0].imgUrl}" alt="" class="opacity-90" />
  <div 
    class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white">
    <h3 class="p-1 md:text-xl line-clamp-2 ">
    ${artikull[0].title}
    </h3>
  </div>
  </a>
</div>`;

    return mainNewsRightSideHTML;
  })
  .catch((error) => {
    console.log(error);
  });

mainNewsRightSideElement.addEventListener("click", (e) => {
  e.preventDefault();
  let id = e.target.id || 0;
  mainNewsElement.innerHTML = `<div class="opacity-95 hover:opacity-100 mr-2">
        <a href="article.html?id=${artikull[id]._id}">
        <img src="${artikull[id].imgUrl}" alt="" class="opacity-90" />
        <div 
          class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white">
          <h3 class="p-1 md:text-xl line-clamp-2 ">
           ${artikull[id].title}
          </h3>
        </div>
        </a>
      </div>`;
  window.scrollTo(0, 0);
});
