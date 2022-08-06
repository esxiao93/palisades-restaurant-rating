Rails.application.routes.draw do
  root 'pages#index'
  
  resources :restaurants, param: :slug
  resource :reviews, only: [:create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'
  get '*path', to: 'pages#index', via: :all
end
