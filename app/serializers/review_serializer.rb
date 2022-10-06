class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :score, :restaurant_id
end
