import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ReviewForm from './ReviewForm';
import styled from 'styled-components';

function Restaurant(props) {
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState({})
  const {slug} = useParams()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    fetch(`/restaurants/${slug}`)
    .then(response => response.json())
    .then((restaurant) => {
      setRestaurant(restaurant)
      setLoaded(true)
    })
    .catch(error => console.log(error))
  }, [slug]);

  console.log(restaurant)
  return (
    <Wrapper>
      <Column>
        <Main>
        {
          loaded && <Header restaurant={restaurant} review={restaurant.included}/>
        }
        <div className="reviews"></div>
        </Main>
      </Column>
      <Column>
        <ReviewForm/>
      </Column>
    </Wrapper>
  )
}

export default Restaurant;

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  padding-left: 50px;
`