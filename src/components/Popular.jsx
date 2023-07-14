import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@splidejs/react-splide/css';

  const Wrapper = styled.div`
    margin: 4rem 0rem;
    padding: 4rem 2rem;
  `;
  const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

export const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!dataLoaded) {
      getPopular();
      setDataLoaded(true);
    }
  }, [dataLoaded]);

  const getPopular = async () => {
    const number = 9;
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${number}`);
    const data = await api.json();
    setPopular(data.recipes);
  }
  return (
      <Wrapper>
      <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: 'free',
          gap: '5rem'
        }}>
          {popular.map((item) =>
              <SplideSlide key={item.id}>
                <Card>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title}/>
                </Card>
              </SplideSlide>
          )}
        </Splide>
      </Wrapper>
  )
}
