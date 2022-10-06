import React from 'react';

function ReviewForm() {

  return (
    <div className='wrapper'>
      <form>
        <div> Tell us your experience at [Restaurant]!</div>
        <div className='field'>
          <input type='text' name='title' placeholder='Review Title' />
        </div>
        <div className='field'>
          <input type='text' name='description' placeholder='Review Description' />
        </div>
        <div className='field'>
          <div className='rating_container'>
            <div className='rating-title-text'>Rate This Restaurant</div>
            [Star Rating Goes Here]
          </div>
        </div>
        <button type='submit'>Submit Your Review</button>
      </form>
    </div>
  )
}

export default ReviewForm;