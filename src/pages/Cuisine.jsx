import React, { useEffect, useState } from 'react';
import "./Cuisine.scss";
import { useParams } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";

export const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const getCuisine = async (name) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
      const data = await response.json();
      setCuisine(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getCuisine(params.type)
  }, [params.type]);

  if (loading) {
    return (
      <div className='cuisine-loading'>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className="cuisine">
        <div className="cuisine__grid">
          {cuisine.length > 0 ? (
            cuisine.map((item) => (
              <div className="cuisine__card" key={item.id}>
                <div className="cuisine__card-img">
                  <img src={item.image} alt="" />
                </div>
                <h4 className="cuisine__card-title">
                  {item.title}
                </h4>
              </div>
            ))
          ) : (
            <p>No cuisine data available</p>
          )}
        </div>
      </div>
    );
  }
};
