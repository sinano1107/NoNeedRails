require 'test_helper'

class ProcessingControllerTest < ActionDispatch::IntegrationTest
  test "should get make_post" do
    get processing_make_post_url
    assert_response :success
  end

end
