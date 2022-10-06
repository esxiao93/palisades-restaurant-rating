import React from 'react';
import styled from 'styled-components';

function Header({restaurant}) {

  const {id, name, location, url_link, image_url, slug, reviews, avg_score} = restaurant
  const total = reviews.length
  // console.log(restaurant)

  return (
    <Wrapper>
      <h1> <img src={image_url} alt={name} />{name}</h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size: 30px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: -8px;
  }
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0px;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0px;
`