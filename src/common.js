export const singleArticleElement = document.querySelector('.single_article');
export const mainNewsElement = document.querySelector('.main_news');
export const mainNewsRightSideElement = document.querySelector('.main_news_right-side');
export const articleElement = document.querySelector('.realtime');
export const categoriesElement = document.querySelector('.categories');
export const categoryElement = document.querySelector('.individualCategory');
export const headerElement = document.querySelector('header');
export const footerElement = document.querySelector('footer');
export const articlesCategoryElement = document.querySelector('.articles_by_category');
export const searchFormEl = document.querySelector(".search");
export const searchInputEl = document.querySelector(".search__input");
export const searchedArticlesElement = document.querySelector(".searched_articles");
export const prevButton = document.querySelector('#prev');
export const nextButton = document.querySelector('#next');
export const searchBtnElement = document.querySelector('.search__submit-btn')
export const state = {
  articles: {},
  topFive: {}
}
export const localApi = `http://localhost:3344/news`
