Rails.application.routes.draw do
  
  resources :users
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # post "/login", to: "sessions#create"
  # delete "/logout", to: "sessions#destroy"
  

  resources :customers, only: [:index, :create, :show, :destroy]
  resources :reviews, only: [:index, :create, :show, :destroy, :update]
  resources :coffees, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
