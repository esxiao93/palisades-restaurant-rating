class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :url_link, :image_url, :slug

  has_many :reviews
end
