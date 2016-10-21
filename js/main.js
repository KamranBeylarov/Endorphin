jQuery(document).ready(function($) {
   
    

	// staff togle
	$(".clicktogle1").click(function(){
		$(".toggleCreate").slideToggle(300,"linear");
	});
	$(".clicktogle2").click(function(){
		$(".toggleDig").slideToggle(300,"linear");
	});
	$(".clicktogle3").click(function(){
		$(".toggleMark").slideToggle(300,"linear");
	});
	// nav click
	$('.scroll').click(function(event) {
		var t=$(this);
		var section = t.data('section');
		var offset=$('#'+section+'').offset().top;
		$("html, body").animate({ scrollTop:offset+1 }, 1000);
	});


	//  body animation
	 $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
			var win = $(window);
		var allMods = $(".module");
		allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		el.addClass("already-visible");
		}
		});
		win.scroll(function(event) {
		
		allMods.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		el.addClass("come-in");
		}
		});
		});

		// logo src 
		for (var i = 0; i < $('.comSec').length; i++) {
				$('.comSec').eq(i).attr('data-offset', $('.comSec').eq(i).offset().top);
			};
			$(window).scroll(function(event) {
			var scrollTop=$(window).scrollTop();
			for (var i = 0; i < $('.comSec').length; i++) {	
			var elementHeight=$('.comSec').eq(i).height();
			var offSet=$('.comSec').eq(i).offset().top;
				if(scrollTop>=$('.comSec').eq(i).offset().top && scrollTop<(offSet+elementHeight-1)){
          // console.log($('.comSec').eq(i).attr('id'));;
					if($('.comSec').eq(i).attr('data-color')==0){
						$('.logo ').attr('src', '../images/logo1.png');
						$(".navmenuen").css('background', '#fff');
            if ($(window).innerWidth()<768) {
               $(".navul").css('background', '#fff')
           
            }else{
              $(".navul").css('background', 'none');
            };    
					}
					else{
						$('.logo ').attr('src', '../images/logo.png');
						$(".navmenuen").css('background', '#fedb37');
             if ($(window).innerWidth()<768) {
               $(".navul").css('background', '#fedb37');
            }else{
              $(".navul").css('background', 'none');
            };
           
					}
				}
			};
			});
			// social icons
			$(".facebook").hover(fbin,fbout) ;
			function fbin(){
				
				$('.facebook').attr('src', '../images/facebook color.png');
			};
			function fbout(){
				$('.facebook').attr('src', '../images/FACEBOOK.png');
			};
			$(".instagram").hover(instaOver, instaOut) ;
			function instaOver(){
				$('.instagram').attr('src', '../images/instagram color.png');
			};
			function instaOut(){
				$('.instagram').attr('src', '../images/INSTAGRAM.png');
			};
			$(".twitter").hover(twitOver, twitOut) ;
			function twitOver(){
				$('.twitter').attr('src', '../images/twitter color.png');
			};
			function twitOut(){
				$('.twitter').attr('src', '../images/TWITTER.png');
			};
			$(".youtube").hover(youtOver, youtOut) ;
			function youtOver(){
				$('.youtube').attr('src', '../images/youtube color.png');
			};
			function youtOut(){
				$('.youtube').attr('src', '../images/YOUTUBE.png');
			};
			$(".email").hover(emailOver, emailOut) ;
			function emailOver(){
				$('.email').attr('src', '../images/email white.png');
			};
			function emailOut(){
				$('.email').attr('src', '../images/email.png');
			};
			$(".location").hover(locationOver, locationOut) ;
			function locationOver(){
				$('.location').attr('src', '../images/location white.png');
			};
			function locationOut(){
				$('.location').attr('src', '../images/location.png');
			};
			$(".telephone").hover(telephoneOver, telephoneOut) ;
			function telephoneOver(){
				$('.telephone').attr('src', '../images/telephone white.png');
			};
			function telephoneOut(){
				$('.telephone').attr('src', '../images/telephone.png');
			};

			// clients slider 
			 var jssor_1_options = {
              $AutoPlay: false,
              $Idle: 0,
              $AutoPlaySteps: 4,
              $SlideDuration: 3500,
              $SlideEasing: $Jease$.$Linear,
              $PauseOnHover: 4,
              $SlideWidth: 140,
              $Cols:7
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 809);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
		
});	

jQuery(document).ready(function($) {
	// portfolio desktop slider
	 var jssor_2_SlideoTransitions = [
              [{b:-1,d:1,o:-1},{b:0,d:1000,o:1}],
              [{b:1900,d:2000,x:-379,e:{x:7}}],
              [{b:1900,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:1000,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:1900,d:1600,x:-200,o:-1,e:{x:16}}]
            ];
            
            var jssor_2_options = {
              $AutoPlay: true,
              $SlideDuration:1500,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_2_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);
            
            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_2_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
});
jQuery(document).ready(function($) {
		// staff slider 
			 var jssor_3_options = {
              $AutoPlay: true,
              $Idle: 0,
              $AutoPlaySteps: 4,
              $SlideDuration: 3500,
              $SlideEasing: $Jease$.$Linear,
              $PauseOnHover: 4,
              $SlideWidth: 200,
              $Cols:7
            };
            
            var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);
            
            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_3_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 809);
                    jssor_3_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
		
});
jQuery(document).ready(function($) {
	 // portfolio moil slider 
			 var jssor_5_options = {
              $AutoPlay: true,
              $Idle: 0,
              $AutoPlaySteps: 4,
              $SlideDuration: 8500,
              $SlideEasing: $Jease$.$Linear,
              $PauseOnHover: 4,
              $SlideWidth: 400,
              $Cols:7
            };
            
            var jssor_5_slider = new $JssorSlider$("jssor_5", jssor_5_options);
            
            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_5_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 809);
                    jssor_5_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
});

			




