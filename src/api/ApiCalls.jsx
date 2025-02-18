import axios from "axios";

const apiURL = "https://be-nc-news-r5rg.onrender.com/api";

export const fetchArticles = (topic) => {
  let url = `${apiURL}/articles`;

  console.log(url);
  console.log(topic);
  // returns undefined ??

  // if it exists we can do something with it (add to url)

  if (topic) {
    url += `?topics=${topic}`;
  }
  console.log(url);
  return axios
    .get(`${url}`)
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.error(error);
    });
};
