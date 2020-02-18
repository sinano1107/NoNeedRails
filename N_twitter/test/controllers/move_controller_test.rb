require 'test_helper'

class MoveControllerTest < ActionDispatch::IntegrationTest
  test "should get test" do
    get move_test_url
    assert_response :success
  end

end
