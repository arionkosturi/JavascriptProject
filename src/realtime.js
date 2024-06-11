export default renderRealtime = articles.forEach(article=>{
  const { title, author, urlToImage, description} = article;

  const articleHTML = `<article class="flex bg-white shadow-xl hover:shadow-xl my-3">
  <div class="flex flex-row w-1/2">
    <img alt="" src="${urlToImage}" class="w-full" />
  </div>

  <div class="flex flex-col justify-between dark:bg-neutral-900 w-1/2">
    <div
      class="border-gray-900/10 border-s p-2 sm:p-4 sm:border-l-transparent"
    >
      <a href="#">
        <h3
          class="line-clamp-2 sm:line-clamp-3 font-bold text-gray-900 dark:text-gray-300 uppercase"
        >
        ${title}
        </h3>
      </a>

      <p> ${description} 
      </p>
    </div>

    <div class="sm:flex sm:justify-end sm:items-end">
      <a
        href="#"
        class="block bg-purple-500 hover:bg-purple-400 mx-2 px-5 py-3 font-bold text-center text-gray-100 text-xs uppercase transition"
      >
      Lexo
    </a>
    </div>
  </div>
</article>`
});