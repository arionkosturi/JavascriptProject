const categoriesData = [
  {
    Name: 'Science',
    Image: 'assets/img/science.jpg'
  },
  {
    Name: 'Entertainment', 
    Image: 'assets/img/entertainment.jpeg'
  },
  {
    Name: 'Sports', 
    Image: 'assets/img/sports.webp'
  },
  {
    Name: 'Politics', 
    Image: 'assets/img/politics.webp'
  },
  {
    Name: 'Finance', 
    Image: 'assets/img/finance.webp'
  },
  {
    Name: 'Opinion', 
    Image: 'assets/img/opinion.jpeg'
  },
]


let categoriesHTML = [];

export const categories = categoriesData.forEach((category)=>{

  let {Image, Name} = category;
  categoriesHTML += `
  <a href="category.html?category=${Name}">
  <div class="individualCategory relative w-[99%] group">
  <img
    src="${Image}"
    class="block opacity-100 group-hover:opacity-80 w-80 h-52"
  />  
  <div
    class="top-[45%] left-[35%] absolute opacity-80 group-hover:opacity-100"
  >
    <div class="bg-purple-600 p-2 text-sm text-white">
    ${Name}
    </div>
  </div>
</div>
</a>
`
return categoriesHTML;


})

export default categoriesHTML;