import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-ws53.onrender.com/api",
});

export const getArticles = (params) => {
  return api
  .get("/articles", { params })
  .then(({data}) => {
    return data.articles
  });
};

export const getArticleById = (article_id) => {
  return api
  .get(`/articles/${article_id}`)
  .then(({data}) => {
    return data.article
  });
};
