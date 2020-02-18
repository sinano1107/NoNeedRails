class MoveController < ApplicationController
  def test
  end

  def top
    @posts = Post.all.reverse
  end
end
