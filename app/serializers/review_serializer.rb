class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :score, :restaurant_id
end
