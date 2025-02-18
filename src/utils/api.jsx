import axios from "axios";

// Creating a custom axios instance
const apiClient = axios.create({
  baseURL: "https://be-nc-news-r5rg.onrender.com/api",
  timeout: 1000,
});

export const fetchArticles = (topic) => {
  return apiClient
    .get("/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      // handle error
    });
};
