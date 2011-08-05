var setFrameUrl = function(url) {
	pretty_url = '';
  if (!url || url == 'undefined') return;

  if (!url.match('^https?://')) {
    pretty_url = 'http://' + url;
  }else{
		pretty_url = url;
		url = url.replace("http://", "");
		url = url.replace("https://", "");
	}

  $('#url').val(pretty_url);
  $('#frame').attr('src',"http://localhost:8080?uri=" + url);
};

var rotate = function() {
  $('#ipad').toggleClass('landscape').toggleClass('portrait');
}

$(function(){

setFrameUrl($.url.param('url'));
if ($.url.param('portrait')) rotate();

$('#rotate').click(rotate);

$('#reload').click(function(){
  $('#frame').attr('src',$('#frame').attr('src'));
});

$('#url').focus(function(){
  $('#kbd').show();
});

$('#url').blur(function(){
  $('#kbd').hide();
});

$('#url').keyup(function(evt){
  if (evt.keyCode != 13) return;
  $('#url').blur();
  setFrameUrl($(this).val());
});

$('#google').focus(function(){
  $('#kbd').show();
});

$('#google').blur(function(){
  $('#kbd').hide();
});

$('#google').keyup(function(evt){
  if (evt.keyCode != 13) return;
  $('#google').blur();
  setFrameUrl("http://www.google.com/search?q="+escape($(this).val()));
});

$('#show_about').click(function(){
  $('#about').slideToggle();
  return false;
});

});
