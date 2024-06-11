export const singleArticleElement = document.querySelector('.single_article');
export const mainNewsElement = document.querySelector('.main_news');
export const mainNewsRightSideElement = document.querySelector('.main_news_right-side');
export const articleElement = document.querySelector('.realtime');
export const categoriesElement = document.querySelector('.categories');
export const categoryElement = document.querySelector('.individualCategory');
let category = ''
export const url = `https://newsapi.org/v2/
top-headlines
?country=us
&category=${category}
&apiKey=${API_KEY}`
import {API_KEY} from './env.js'
