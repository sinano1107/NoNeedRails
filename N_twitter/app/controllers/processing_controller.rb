class ProcessingController < ApplicationController
  def make_post
    post = Post.new(content: params[:content])
    post.save
    redirect_to("/")
  end
end
