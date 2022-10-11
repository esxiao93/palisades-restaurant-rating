import React, { useState, useEffect} from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ReviewForm from './ReviewForm';
import styled from 'styled-components';

function Restaurant() {
  const [restaurant, setRestaurant] = useState({
    reviews: [{title:'', description:'', score: 0}]
  })
  const [reviews, setReviews] = useState([])
  // const [review, setReview] = useState({title:'', description:'', score: 0})
  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [score, setScore] = useState(0)
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

  console.log(reviews)

  function handleForm(newReview) {
    const newReviewArray = [...reviews, newReview]
    setReviews(newReviewArray)
  }

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   // console.log('name:', e.target.name, 'value:', e.target.value)
  //   setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  // }

// console.log(review)
// console.log(restaurant)
// console.log(restaurant.reviews)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newReview = {
  //     title: title,
  //     description: description,
  //     score: score,
  //     restaurant_id: restaurant.id
  //   }

  //   fetch('/reviews', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newReview)
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setReview([...review, data])
  //   })
  // }

  // console.log(restaurant)
  // console.log(review)
  return (
    <Wrapper>
       {
      loaded &&
      <>
        <Column>
          <Main>
            <Header restaurant={restaurant} review={restaurant.included}/>
            <div className="reviews"></div>
          </Main>
        </Column>
        <Column>
          <ReviewForm 
            // handleChange={handleChange} 
            // handleSubmit={handleSubmit} 
            handleForm={handleForm}
            restaurant={restaurant}
          />
        </Column> 
      </>
      }
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




  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const csrfToken = document.querySelector('[name=csrfToken]').content
  //   axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

  //   const restaurant_id = restaurant.id
  //   axios.post('/reviews', {review, restaurant_id})
  //   .then(resp => {
  //     const included = [...restaurant.included, resp.data]
  //     setRestaurant({...restaurant, included})
  //     setReview({title:'', description:'', score: 0})
  //   })
  //   .catch(resp => {})
  // }

  // const setRating = (score, e) => {
  //   e.preventDefault()
  //   setReview({...review, score})
  // }