// OnLoad
$(function() {
	$( ".accordion" ).accordion({
		collapsible: true,
	    heightStyle: "content" 
	});
	$( ".fadeIn" ).animate( {
		opacity: 1,
		},500,function () {
			$(".btnAnimate").animate({
				top: "0",
				opacity:1
			},250);
	});
	$(".slideInBT").animate({
		top: 0,
		opacity: 1
	},250);
	$( ".mobileNavToggle" ).click(function() {
			$(".navigationBar").slideToggle("fast", function () {
			$(".sideBar").toggleClass("mobileNo");
		});
	});
	$(".searchTabletToggle").click(function () {
		$(".googleSearchWrapper").slideToggle("fast");
	});
	$(".sidebearMobileToggle").click(function () {
		$(".sideBar").toggleClass("sbExpanded");
	});
	// VerticalTabs
	$( ".verticalTabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	// Horizontal Tabs
	$( ".horizontalTabs" ).tabs();
	$(".morelessToggle1").click(function () {
		$(".showhideText1").toggleClass("showText");
	});
	$(".morelessToggle2").click(function () {
		$(".showhideText2").toggleClass("showText");
	});
	$(".morelessToggle3").click(function () {
		$(".showhideText3").toggleClass("showText");
	});
});

// VisiblePlugin
(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

// Animate if visible
$(window).scroll(function(event) {
  $(".anWV").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.animate({
		opacity:1,
		top: 0
      });
    }
  });
  $(".anWS").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.animate({
		opacity:1
      });
    }
  });

});



// TableEvenRowClass
$('tr:nth-child(2n)').addClass('even');

/*backToTop*/
$(document).ready(function(){
   $(".backToTop").click(function() {
      $('html, body').animate({
      scrollTop: 0
   }, 500);
 });
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});