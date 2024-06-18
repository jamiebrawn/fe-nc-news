import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-ws53.onrender.com/api",
});

export const getArticles = () => {
  return api
  .get("/articles")
  .then(({data}) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return api
  .get(`/articles/${article_id}`)
  .then(({data}) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return api
  .get(`/articles/${article_id}/comments`)
  .then(({ data }) => {
    console.log(data.comments)
    return data.comments;
  });
};