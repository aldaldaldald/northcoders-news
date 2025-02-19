import axios from "axios";

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

export const fetchArticleComments = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // handle error
    });
};

export const getVoteCount = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.votes;
    })
    .catch((error) => {
      // handle error
    });
};

export const patchVoteCount = (article_id, inc_votes) => {
  return apiClient
    .patch(`/articles/${article_id}`, {
      inc_votes,
    })
    .then((response) => {
      return response.data.votes;
    })
    .catch((error) => {
      // handle error
    });
};
