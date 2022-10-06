class ReviewsController < ApplicationController

  def create
    review = Review.create!(review_params)
    render json: petition, status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private
  
  def review_params
    params.require(:review).permit(:title, :description, :score, :restaurant_id)
  end
end