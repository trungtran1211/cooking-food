import React, { useEffect, useState } from 'react'
import "./Cuisine.scss"
import { useParams } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";

export const Cuisine = () => {
  const [cuisine, setCuisine] = useState(); 
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const getCuisine = async (name) => {
    setLoading(true);
    await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    .then((res) => res.json())
    .then((data) => {
      setCuisine(data.results);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
        setLoading(false);
    });
  }
  
  useEffect(() => {
    getCuisine(params.type)
  },[params.type]);

  console.log(cuisine);

  if (loading) {
      return (
        <>
          <CircularProgress />
        </>
      );
  }else {
    return (
      <>
        <h3>tesstt222</h3>
      </>
    )
  }

}
