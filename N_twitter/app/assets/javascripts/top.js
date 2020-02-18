//-make-btnの座標設定-------------------------------------------------------------

function init__make_btn() {
  posi = $('#right-grid').position();
  console.log("posi", posi)
  $('#make-btn').offset({ top: 600, left: posi.left-28 })
}


$(window).on('load resize', function() {init__make_btn()});




//------------------------------------------------------------------------------
console.log("top.js complete")
