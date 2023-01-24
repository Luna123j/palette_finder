Rails.application.routes.draw do
  get 'users/index'
  get 'signup' => 'users#new'
  post '/users' => 'users#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:index]
end
