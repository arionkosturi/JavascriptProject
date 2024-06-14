import { topFiveUrl, state } from "../common.js";

let topFiveArticles = () => {
  fetch(topFiveUrl).then(
    response=>{
      if(!response.ok) {
        console.log('Something went wrong');
        return;
      }
    
      return response.json();
    
    }).then(
      data =>{
        state.topFive = data;
        state.topFive.forEach(topFive=>{
          // console.log(topFive);
        });
        return state.topFive;
        })
    .catch(err=>{
      console.log(err);
    })
}

topFiveArticles();
console.log(state.topFive

);

// function renderTopFive(){
//   for(let i=0; i<5; i++)
//   {
//     let mainNewsRightSideHTML = ` <div 
//       class="flex artikull mt-2 bg-slate-100 dark:bg-neutral-800 opacity-85 hover:opacity-100 hover:shadow-md">
//       <img src="${artikull[i].urlToImage}" class="w-1/3" alt="" />
//       <p id=${i} class="m-1 dark:text-gray-300 text-md line-clamp-3">
//         ${artikull[i].title}
//       </p>
//     </div>`
// mainNewsRightSideElement.insertAdjacentHTML('afterbegin', mainNewsRightSideHTML);
   
//   }
// }
// export default renderTopFive;
