import { useState, useEffect } from 'react';
import { profile, skills, projects, experience, education } from '../data/portfolio';

export function usePortfolioData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/portfolio-data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch portfolio data, falling back to local data.', err);
        setError(err);
        // Fallback to static data
        setData({
          profile,
          skills,
          projects,
          experience,
          education,
        });
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
