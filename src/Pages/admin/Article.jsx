import React from "react";

export const Articles = ({articles}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li
            key={article.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="text-lg font-medium">{article.title}</p>
            <p className="text-sm text-gray-600">{article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
