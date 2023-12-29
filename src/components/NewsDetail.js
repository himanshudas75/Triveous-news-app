import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { title } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const url="https://newsapi.org/v2/top-headlines?country=in&apiKey=fcdf3df48dc5488c86f9e9c0ac8801f6";

        const response = await fetch(url);
        const data = await response.json();
        const matchedArticle = data.articles.find(
          (article) => createSlug(article.title) === title
        );

        if (matchedArticle) {
          setArticle(matchedArticle);
        } else {
          console.error("Article not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [title]);

  const createSlug = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };
  const handleCloseModal = () => {
    navigate("/dashboard");
  };

  return (
    <div className="news-detail-overlay">
      <div className="news-detail-modal">
        {loading ? (
          <p>Loading...</p>
        ) : article ? (
          <div>
          
            <h2>{article.title}</h2>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <p>{article.description}</p>

            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ) : (
          <p>Article not found.</p>
        )}
        <button className="btn btn-outline-dark close-button" onClick={handleCloseModal}>
              Close
            </button>
      </div>
    </div>
  );
};

export default NewsDetail;
