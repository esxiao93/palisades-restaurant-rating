import React, { useState } from 'react';
// import Rating from './Rating'
// import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

function ReviewForm({restaurant, handleForm}) {

  const [review, setReview] = useState({title:'', description:'', score: 0})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [score, setScore] = useState(0)

  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleDescription(e) {
    setDescription(e.target.value)
  }
  function handleScore(e) {
    setScore(e.target.value)
  }

const handleSubmit = (e) => {
  e.preventDefault()
  const newReview = {
    title: title,
    description: description,
    score: score,
    restaurant_id: restaurant.id
  }

  fetch('/reviews', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReview)
  })
  .then(response => response.json())
  .then((newReview) => handleForm(newReview))
}

  // console.log(props)
  // console.log(props.review.title)
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <>
        <input type="radio" value={score} checked={props.review.score == score} onChange={()=>console.log('onChange')} name="rating" id={`rating-${score}`}/>
        <label onClick={props.setRating.bind(this, score)}></label>
      </>
    )
  })

  // console.log(review)
  // console.log(props.reviews)

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <div> Tell us your experience at {restaurant.name}!</div>
        <div className='field'>
          <input onChange={handleTitle} value={restaurant.reviews.title} type='text' name='title' placeholder='Review Title' />
        </div>
        <div className='field'>
          <input onChange={handleDescription} value={restaurant.reviews.description} type='text' name='description' placeholder='Review Description' />
        </div>
        <div className='field'>
          <RatingContainer>
            <div className='rating-title-text'>Rate This Restaurant</div>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </div>
        <button type='submit'>Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm;

const RatingContainer = styled.div`
text-align: center;
border-radius: 4px;
font-size: 18px;
padding: 40px 0px 10px 0px;
border: 1px solid #e6e6e6;
background: #fff;
`
const RatingBox = styled.div`
background: #fff;
display: flex;
justify-content: center;
flex-direction: row-reverse;
position: relative;
`
{/* const RatingTitle = styled.div`` */}