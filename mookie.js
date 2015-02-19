

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('loaded', false);


  $("a[href^=#]").on("click", function(event) {
    event.preventDefault();
    var $link = $(this);
    var $target = $($link.attr("href"));
    $("html,body").animate({
      scrollTop: $target.offset().top
    }, 660);
  });

  setTimeout(function() {
    $("body").removeClass("is-loading").addClass("is-loaded");
    $(".pre-loader").fadeOut();
    $window.trigger('scroll');
  }, 800);


  var $window = $(window);
  $window.on("scroll", function() {
    $("section").each(function(index, section) {
      var $section = $(section);
      var sectionTop = $section.offset().top;
      var sectionBottom = $section.offset().top + $section.height();
      if ($window.scrollTop() >= sectionTop && $window.scrollTop() < sectionBottom) {
        $section.addClass('current');
      } else {
        $section.removeClass('current').removeClass('animate');
      }
    });

    $("section:in-viewport(200)").do(function() {
	console.log('animating');
      $(this).addClass('animate');
      var $navItem = $("nav a[href=#" + $(this).attr("id") + "]");
      $('nav a').removeClass('current');
      $navItem.addClass('current');
    });
  });





  Template.appBody.rendered=function(){
    window.scrollReveal = new scrollReveal();
    
    window.setTimeout(function(){
      Router.go('home');
    },800);
  };


  Template.appBody.events({
    'loaded #maindiv':function(){
      console.log('loaded');
    },
    'click a':function(evt){
      console.log('click');
   //   evt.preventDefault();

    var $link = $(this);
    var $target = $($link.attr("href"));
//    $("html,body").animate({
//      scrollTop: $target.offset().top
 //   }, 660);

    }
  });



  Template.appBody.helpers({
    isloading:function(){
      var result = 'is-loading';
      console.log('result: ' + result);

      if (Session.get('loaded')===true)
        result = '';

      return result;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
