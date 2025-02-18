import axios from "axios";

// Creating a custom axios instance
const apiClient = axios.create({
  baseURL: "https://be-nc-news-r5rg.onrender.com/api",
  timeout: 1000,
});

export const fetchArticles = () => {
  return apiClient
    .get("/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      // handle error
    });
};

export const fetchSingleArticle = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // handle error
    });
};
