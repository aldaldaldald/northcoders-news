import { useState } from "react";
import ArticleCard from "../components/ArticleCard";

function Articles() {
  const [topic, setTopic] = useState("");
  // useState for sortBy

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  console.log(topic);
  // can set sortBy later here too

  return (
    <section className="articles">
      <h1>Articles</h1>

      <select>
        <option value="New">New</option>
        <option value="Most votes">Most votes</option>
        <option value="Most commented">Most commented</option>
      </select>

      <br></br>

      <select onChange={handleTopicChange}>
        <option value="all-items">All topics</option>
        <option value="football">Football</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
      </select>

      <section className="article-list">
        <ArticleCard topic={topic} />
      </section>
    </section>
  );
}

export default Articles;
