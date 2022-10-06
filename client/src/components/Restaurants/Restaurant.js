import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Restaurant({id, name, location, url_link, image_url, slug, reviews, avg_score}) {

  return (
    <Card>
      <RestaurantLogo>
        <img src={image_url} alt={image_url}/>
      </RestaurantLogo>
      <RestaurantName>{name}</RestaurantName>
      <RestaurantLocation>{location}</RestaurantLocation>
      <div className="restaurant-score">{avg_score}</div>
      <LinkWrapper>
        <Link to={`/restaurants/${slug}`}>View Restaurant</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Restaurant;

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`
const RestaurantLogo = styled.div`
  width: 350px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 250px;
    width: 100%;
    border: 1px solid #efefef;
  }
`
const RestaurantName = styled.div`
  padding: 20px 0px 10px 0px;
`
const RestaurantLocation = styled.div`
  padding: 20px 0px 10px 0px;
`
const LinkWrapper = styled.div`
  margin: 30px 0px 20px 0px;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`