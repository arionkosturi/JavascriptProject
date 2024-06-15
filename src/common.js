export const singleArticleElement = document.querySelector('.single_article');
export const mainNewsElement = document.querySelector('.main_news');
export const mainNewsRightSideElement = document.querySelector('.main_news_right-side');
export const articleElement = document.querySelector('.realtime');
export const categoriesElement = document.querySelector('.categories');
export const categoryElement = document.querySelector('.individualCategory');
export const headerElement = document.querySelector('header');
export const footerElement = document.querySelector('footer');
export const articlesCategoryElement = document.querySelector('.articles_by_category');
let category = ''
// export const url = `https://newsapi.org/v2/
// top-headlines
// &category=${category}
// &apiKey=${API_KEY}`
// import {API_KEY} from './env.js'
export const state = {
  articles: {},
  topFive: {}
}
export const localApi = `http://localhost:3344/news`
export const topFiveUrl = `http://localhost:3344/news/top`