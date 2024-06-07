import  { 
  singleArticleElement,

 }  from './common.js'
 import  { 
  news,

 }  from './modules/fetch.js'


export default function singleArticle() {
  singleArticleElement.innerHTML = 'test';
  console.log(news);

}
console.log(news);
singleArticle();