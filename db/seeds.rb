# SEED DATA
puts "✅ Deleting seed data..."

Restaurant.destroy_all
Review.destroy_all



# restaurants
puts '✅ Seeding restaurant data...'
restaurants = Restaurant.create([
  {
    name: "IT Show",
    location: "232 Broad Ave Palisades Park, NJ 07650",
    url_link: "https://www.itshowramen.com",
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/nQ1Tz-AtR3M1yM0IE-jupA/o.jpg"
  },
  {
    name: "Old Shanghai Soup Dumpling",
    location: "133 Broad Ave Palisades Park, NJ 07650",
    url_link: "http://oldshanghaisd.com",
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/EnW--_6nCOdsmykpSjxmfQ/o.jpg"
  },
  {
    name: "To Sok Chon",
    location: "138 W Central Blvd Palisades Park, NJ 07650",
    url_link: "http://www.to-sok-chon.com",
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/l2cgspAwcD90_jUuXrckJw/o.jpg"
  },
  {
    name: "Gomtangjip",
    location: "8 Henry Ave Palisades Park, NJ 07650",
    url_link: "",
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/slKr_hG8WAXoKYLCICXpYA/o.jpg"
  },
  {
    name: "Mama Chicken",
    location: "252 Broad Ave Palisades Park, NJ 07650",
    url_link: "",
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/Q7BBP6MEHEUXFVGKl6CnjQ/o.jpg"
  },
  {
    name: "Halmae Noodle",
    location: "413 Broad Ave Palisades Park, NJ 07650",
    url_link: "https://www.halmaepalpark.com",
    image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/hhwZNdXFzV2uRoRP3gAx5A/o.jpg"
  }
])

# reviews
puts '✅ Seeding review data...'
reviews = Review.create([
  {
    title: "The Food Is Amazing",
    score: 4,
    description: "The food here is amazing, when you think of ramen, this is the place you think of.",
    restaurant: restaurants.first
  },
  {
    title: "The Food Was Cold",
    score: 1,
    description: "This is just a test review but the food came out cold...",
    restaurant: restaurants.first
  },
  {
    title: "This Restaurant Serves Authentic Shanghainese Food",
    score: 5,
    description: "I have finally found a wonderful restaurant that serves authentic Shanghainese food!",
    restaurant: restaurants.second
  },
  {
    title: "This Restaurant Could Be Better",
    score: 2,
    description: "This is just another test review but the food was not that yummy...",
    restaurant: restaurants.second
  },
])

# confirm seed data completed
puts '🌱 Seeding Data Completed!'
