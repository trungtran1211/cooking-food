import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@splidejs/react-splide/css';

  const Wrapper = styled.div`
    margin: 4rem 0rem;
    padding: 4rem 2rem;

  `;
  const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
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
    p {
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, 0%);
      color: white;
      width: 100%;
      text-align: center;
      font-wight: 600;
      font-size: 1rem;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

export const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if(check) {
      setPopular(JSON.parse(check));
    }else {
      const number = 9;
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${number}`);
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
    
  }
  console.log(popular);
  return (
      <Wrapper>
      <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: '2rem'
        }}>
          {popular.map((item) =>
              <SplideSlide key={item.id}>
                <Card>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title}/>
                  <Gradient/>
                </Card>
              </SplideSlide>
          )}
        </Splide>
      </Wrapper>
  )
}
