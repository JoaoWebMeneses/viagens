Rails.application.routes.draw do
  # namespace é o nome da pasta
  # resources é pra pegar o conteudo do controlador
  
  namespace :api do
    namespace :v1 do
      resources :travels
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
