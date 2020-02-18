$(document).ready(function(){
  //-modal------------------------------------------------------------------------

  //-more-btnイベントの際先にhtmlを書き換えたい
  //-more-btnが押された時にmodalの内容を書き換える処理
  //-なんでかは知らんがこれでmore-btn以外のmodal表示もできる
  //-順番に実行したいのでjqのwhenを使う（よく理解してない）

  function more_btn_function(event) {
    let id = event.target.id;
    let user_name = $(`#user_name_${id}`).text();
    let content = $(`#content_${id}`).text();

    /*
    console.log("id", id);
    console.log("user_name", user_name);
    console.log("content", content);
    */

    $('#modal_user_name').text(user_name);
    $('#modal_content').text(content);
  }

  $('.more-btn').click(function(event) {
    $.when(
      more_btn_function(event)
    ).done(function(){
      $('.modal').modal();
    })
  });


  //-Character Counter------------------------------------------------------------

  $('input#input_text, textarea#textarea2').characterCounter();

  //-collapsible------------------------------------------------------------------

  $('.collapsible').collapsible();

  //-tabs-------------------------------------------------------------------------

  $('.tabs').tabs({swipeable: true});

  //-sidenav----------------------------------------------------------------------

  $('.sidenav').sidenav();

  //------------------------------------------------------------------------------
});

console.log("materialize complete")
