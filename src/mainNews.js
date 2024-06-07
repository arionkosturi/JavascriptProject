import { news } from './modules/fetch.js'
export const mainNews =`
 <div class="opacity-95 hover:opacity-100 mr-2">
          <img src="assets/img/matt.webp" alt="" class="opacity-90" />
          <div
            class="relative bg-purple-800 bg-opacity-100 lg:bg-opacity-80 hover:bg-opacity-90 lg:-mt-28 py-2 w-full h-28 text-white"
          >
            <h3 class="p-2 md:text-lg">
             {title}
            </h3>
          </div>
        </div>
`


console.log(news);