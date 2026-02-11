import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE_URL from "../../config";
import "./Learn.css";

const LearnDetailsPage = () => {
  const { id } = useParams();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModuleDetails = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/learning-modules/${id}`);
        const data = await res.json();
        setModule(data);
      } catch (error) {
        console.error("Error fetching module details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchModuleDetails();
  }, [id]);

  if (loading) return <div className="loader">Loading module details...</div>;
  if (!module) return <div className="error">Module not found.</div>;

  return (
    <div className="learn-details-container">
      <Link to="/learn" className="btn btn-success mb-4 rounded-pill px-4 py-2 shadow-sm">
        Back to Learn
      </Link>
    
      <div className="learn-card">
        {/* Thumbnail */}
        {module.thumbnail && (
          <img
            src={module.thumbnail}
            alt={module.title}
            className="learn-thumbnail"
          />
        )}

        <div className="learn-content">
          <h1 className="learn-title">{module.title}</h1>
          <p className="learn-description">{module.short_description}</p>

          {/* Info badges */}
          <div className="learn-info">
            {module.difficulty_level && (
              <span className="badge badge-green">
                Difficulty: {module.difficulty_level}
              </span>
            )}
            {module.estimated_time && (
              <span className="badge badge-blue">⏱ {module.estimated_time}</span>
            )}
            {module.author && (
              <span className="badge badge-yellow">👨‍🏫 {module.author}</span>
            )}
          </div>

          {/* Full Content */}
          {module.full_content && (
            <div className="learn-fullcontent">
              <h2>Overview</h2>
              <p>{module.full_content}</p>
            </div>
          )}

          {/* Steps */}
          {module.steps && module.steps.length > 0 && (
            <div className="learn-steps">
              <h2>Learning Steps</h2>
              <ol>
                {module.steps.map((step, index) => (
                  <li key={step.step_id || index}>
                    <strong>{step.step_title}: </strong>
                    {step.description}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tags */}
          {module.tags && module.tags.length > 0 && (
            <div className="learn-tags">
              <h2>Tags</h2>
              {module.tags.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Resources */}
          {module.resources && module.resources.length > 0 && (
            <div className="learn-resources">
              <h2>Additional Resources</h2>
              <ul>
                {module.resources.map((res, index) => (
                  <li key={res.resource_id || index}>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {res.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Video URL */}
          {module.video_url && (
            <div className="learn-video">
              <h2>Watch Tutorial</h2>
              <a
                href={module.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                {module.video_url} ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnDetailsPage;
