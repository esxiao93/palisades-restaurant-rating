class RestaurantsController < ApplicationController

  def index
    restaurants = Restaurant.all
    render json: restaurants, status: :ok
  end
  
  def show
    restaurant = Restaurant.find_by(slug: params[:slug])
    render json: restaurant, status: :ok
  end

  def create
    restaurant = Restaurant.create!(restaurant_params)
    render json: restaurant, status: :created
  end

  def update
    restaurant = Restaurant.find_by(slug: params[:slug])
    restaurant.update!(restaurant_params)
    render json: restaurant, status: :ok
  end

  def destroy
    restaurant = Restaurant.find_by(slug: params[:slug])
    restaurant.destroy
    head :no_content
  end

  private

  def restaurant_params
  params.require(:restaurant).permit(:name, :location, :url_link, :image_url)
  end

  def options
    @options ||= {include: %i[reviews]}
  end


end
