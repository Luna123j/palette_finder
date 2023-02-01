Rails.application.routes.draw do
  get 'users/index'

  get '/login' => 'sessions#new'
  get '/islogin' => 'sessions#isLoggedIn?'
  post '/login' => 'sessions#create'
  post '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  get '/image' => 'images#new'
  post '/image' => 'images#create'
  post '/deleteimage' => 'images#destroy'





  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:create]
end
