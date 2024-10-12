import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://be-nc-news-ws53.onrender.com/api";

const api = axios.create({
  baseURL: API_URL,
});

export const getArticles = (topic) => {
  return api
    .get("/articles", { params: { topic } })
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

export const patchArticleVotes = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const postCommentByArticleId = (article_id, username, body) => {
  return api
    .post(`/articles/${article_id}/comments`, {
      username,
      body
    })
    .then(({data}) => {
      return data.comment;
    })
};

export const deleteCommentByCommentId = (commentId) => {
  return api
    .delete(`/comments/${commentId}`)
    .then((res) => res.status);
};

export const getTopics = () => {
  return api
    .get("/topics")
    .then(({data}) => {
      return data.topics;
    });
};