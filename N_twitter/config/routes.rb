Rails.application.routes.draw do

  get 'move/test' => 'move#test'
  get '/' => 'move#top'

  post 'processing/make_post' => 'processing#make_post'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
