import React from "react";

export default function ArticleFilters({
  handleTopicChange,
  handleSortByChange,
  currentTopic,
  currentSortBy,
}) {
  return (
    <div className="dropdowns">
      <select
        onChange={handleSortByChange}
        className="dropdown-pill"
        value={currentSortBy}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="most-votes">Most votes</option>
        <option value="least-votes">Least votes</option>
        <option value="most-commented">Most commented</option>
        <option value="least-commented">Least commented</option>
      </select>

      <select
        onChange={handleTopicChange}
        value={currentTopic}
        className="dropdown-pill"
      >
        <option value="all-topics">All topics</option>
        <option value="football">Football</option>
        <option value="coding">Coding</option>
        <option value="cooking">Cooking</option>
      </select>
    </div>
  );
}
