class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  # def create
  #   review = restaurant.reviews.new(review_params)
  #   render json: review, status: :created
  # end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  # def restaurant
  #   @restaurant ||= Restaurant.find(params[:restaurant_id])
  # end
  
  def review_params
    params.require(:review).permit(:title, :description, :score, :restaurant_id)
  end
end