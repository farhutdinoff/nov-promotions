$(document).ready(function() {


   $(".nav a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });


});




$(document).ready(function(){

  $('#logo-bg').children('div').each(function(n_div,div)
  {
  $(div).children('img').each(function(n_img,img)
  {
  if(n_img) $(img).css({'opacity':'0.0'});
  else
  {
  $(div).attr({'value':(n_img+1)});
  $(img).css({'opacity':'1.0'});
  }
  });
  });
  window.setInterval(function()
  {
  $('#logo-bg').children('div').each(function(n,element)
  {
  var img = $(element).attr('value');
  var rnd = Math.floor(Math.random()*(4-1+1))+1;
  if(img != rnd)
  {
  $(element).attr({'value':rnd});
  $(element).children('#logo-bg__img'+(n+1)+img).animate(
  {'opacity':'0.0'});
  $(element).children('#logo-bg__img'+(n+1)+rnd).animate(
  {'opacity':'1.0'});
  }
  });
},1700);
});
