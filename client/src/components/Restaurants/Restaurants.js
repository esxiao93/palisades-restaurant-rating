import React, { useState, useEffect } from 'react'
import Restaurant from './Restaurant'
import styled from 'styled-components'

function Restaurants () {

  const [restaurants, setRestaurants] = useState([])

//Get all restaurants from API
//Update restaurants in our state
  useEffect(() => {
    fetch('/restaurants')
    .then(response => response.json())
    .then((restaurants) => setRestaurants(restaurants))
    .catch(error => console.log(error))
  }, []);

  // console.log(restaurants)

  const restaurantList = restaurants.map(restaurant => {
    return (
    <Restaurant 
    key={restaurant.id}
    id={restaurant.id}
    name={restaurant.name}
    location={restaurant.location}
    url_link={restaurant.url_link}
    image_url={restaurant.image_url}
    slug={restaurant.slug}
    reviews={restaurant.reviews}
    avg_score={restaurant.avg_score}
    />
    )
  })

  return (
    <Home>
      <Header>
        <h1>OpenRestaurants</h1>
        <Subheader>Honest, unbiased restaurant reviews.</Subheader>
      </Header>
      <Grid>
        {restaurantList}
      </Grid>
    </Home>
  );
}

export default Restaurants;

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  
  h1{
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`