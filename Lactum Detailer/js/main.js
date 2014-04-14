$(document).ready(function() {
	"use strict";
	document.body.addEventListener('touchmove', function(e) {
	  // This prevents native scrolling from happening.
	  e.preventDefault();
	}, false);
	
	var reset = $('span,i,img').remove();
	
	
	var actionfinger = 1,
		lengthofdrag = 400;
	
	$("#s0 > .lactumstart").live('click',function() {
		$('#s0').addClass('done');
		$('#s1').addClass('active');
		tos1();
	});
	
	$("#s0 > .alactastart").live('click',function() {
		$('#s0').addClass('done');
		$('#a1').addClass('active');
		toa1();
	});
	
	
	$('.ina1').live('click',function() {
		$('#sp1').toggleClass('spin');
	});
	$('.ina2').live('click',function() {
		$('#sp2').toggleClass('spin');
	});
	$('.ina3').live('click',function() {
		$('#sp3').toggleClass('spin');
	});
	
	$("#s1").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s0').removeClass('done');
			reset 
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s2').addClass('active');
			reset 
			tos2();
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	
	$("#s2").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s1').removeClass('done');
			reset
			tos1();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s3').addClass('active');
			reset 
			tos3();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	
	$("#s3").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s2').removeClass('done');
			reset
			tos2();
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s4').addClass('active');
			reset
			tos4();
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s4").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s3').removeClass('done');
			reset 
			tos3();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s5').addClass('active');
			reset 
			tos5();
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s5").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s4').removeClass('done');
			reset 
			tos4();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s6').addClass('active');
			reset 
			tos6();
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s6").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s5').removeClass('done');
			reset 
			tos5();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s7').addClass('active');
			reset 
			tos7();
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s7").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s6').removeClass('done');
			reset 
			tos6();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s8').addClass('active');
			reset 
			tos8();
			
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s8").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s7').removeClass('done');
			reset 
			tos7();
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s9').addClass('active');
			reset 
			tos9();
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s9").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s8').removeClass('done');
			reset 
			tos8();
			
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s10').addClass('active');
			reset 
			tos10();
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s10").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s9').removeClass('done');
			reset 
			tos9();
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$('.restart').live('click',function() {
		resetall();
	});
	
	
	function resetall() {
		$('#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9,#s10').removeClass('active');
		$('span,i,img').remove();
		$('.slide').removeClass('done');
	}
	
	
	/*ANIMATION*/
	function tos1() {
		$('#s1').html('<span></span><i></i>');
		setTimeout(function() {$('#s1 > span,#s1 > i').addClass('anim');}, 500);
	}
	function tos2() {
		$('#s2').html('<img src="css/images/s2a.png" alt=""/><span class="s2b"></span><span class="s2c"></span>');
		setTimeout(function() {$('#s2 > .s2b,#s2 > .s2c').addClass('anim');}, 1000);
	}
	function tos3() {
		$('#s3').html('<span class="s3a"></span><span class="s3b"></span><i></i><span class="s3c"></span><span class="s3d"></span><span id="s3zoom"></span><span id="s3zoombox"></span>');
		setTimeout(function() {$('#s3 > .s3a').addClass('anim');}, 1000);
		setTimeout(function() {$('#s3 > .s3b, #s3 > i').addClass('anim');}, 1500);
		setTimeout(function() {$('#s3 > .s3c').addClass('anim');}, 2000);
		setTimeout(function() {$('#s3 > .s3d').addClass('anim');}, 2500);
		
		$("#s3zoom").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s3zoombox').fadeIn();
			}, pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s3zoombox').fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		
	}
	
	function tos4() {
		$('#s4').html('<span class="s4a"></span><span class="s4a2"></span><img src="css/images/s4b.png" alt="" class="s4b"/><span class="s4c"></span><span class="s4d"></span>');
		setTimeout(function() {$('#s4 > .s4a').addClass('anim');},1000);
		setTimeout(function() {$('#s4 > .s4a2').addClass('anim');},1500);
		setTimeout(function() {$('#s4 > .s4b').addClass('anim');},2000);
		setTimeout(function() {$('#s4 > .s4c').addClass('anim');},2500);
		setTimeout(function() {$('#s4 > .s4d').addClass('anim');},3000);
	}
	function tos5() {
		$('#s5').html('<span class="s5a"></span><span class="s5b"></span><span class="s5c"></span><span class="s5d"></span><span class="s5e"></span><i></i>');
		setTimeout(function() {$('#s5 > .s5a').addClass('anim');},1000);
		setTimeout(function() {$('#s5 > .s5b, #s5 > i').addClass('anim');},1500);
		setTimeout(function() {$('#s5 > .s5c').addClass('anim');},2000);
		setTimeout(function() {$('#s5 > .s5d').addClass('anim');},2500);
		setTimeout(function() {$('#s5 > .s5e').addClass('anim');},3000);
	}
	function tos6() {
		$('#s6').html('<span class="s6a"></span><span class="s6b"></span><span class="s6c"></span><span class="s6d"></span><span class="s6e"></span>');
		setTimeout(function() {$('#s6 > .s6b').addClass('anim');},1000);
		setTimeout(function() {$('#s6 > .s6c').addClass('anim');},1500);
		setTimeout(function() {$('#s6 > .s6d').addClass('anim');},2000);
		setTimeout(function() {$('#s6 > .s6e').addClass('anim');},2500);
	}
	function tos7() {
		$('#s7').html('<span class="s7a"></span><span class="s7b"></span><span class="s7c"></span><span class="s7d"></span>');
		setTimeout(function() {
			$('#s7 > .s7a').addClass('anim');
			$('#s7 > .s7b').addClass('anim');
		},1000);
		setTimeout(function() {
			$('#s7 > .s7a').addClass('anim2');
		},1500);
		setTimeout(function() {
			$('#s7 > .s7a').addClass('anim3');
			$('#s7 > .s7c').addClass('anim');
		},2000);
		setTimeout(function() {
			$('#s7 > .s7a').addClass('anim4');
		},2500);
		setTimeout(function() {
			$('#s7 > .s7a').addClass('anim5');
			$('#s7 > .s7d').addClass('anim');
		},3000);
		setTimeout(function() {
			$('#s7 > .s7a').addClass('anim6');
		},3500);

	}
	function tos8() {
		$('#s8').html('<span class="s8a"></span><span class="s8b"></span><span class="s8c"></span><span class="s8d"></span><span class="s8e"></span>');
		setTimeout(function() {$('#s8 > .s8b').addClass('anim');},1500);
		setTimeout(function() {$('#s8 > .s8c').addClass('anim');},2000);
		setTimeout(function() {$('#s8 > .s8d').addClass('anim');},3000);
		setTimeout(function() {$('#s8 > .s8e').addClass('anim');},3500);
	}
	function tos9() {
		$('#s9').html('<span class="s9a"></span><span class="s9b"></span><i></i>');
		setTimeout(function() {$('#s9 > .s9b, #s9 > i').addClass('anim');},1000);
	}
	function tos10() {
		$('#s10').html('<span class="s10a"></span><i></i>');
		setTimeout(function() {$('#s10 > .s10a, #s10 > i ').addClass('anim');},1000);
	}
	
	
	
	
	
	
	function toa1() {
		$('#a1').html('<a class="ina0"></a><a class="ina1"></a><a class="ina2"></a><a class="ina3"></a><div id="sp1"><div id="sp1card"><div class="front face"><img src="css/images/a1a.png" alt=""/></div><div class="back face center"><img src="css/images/a1a.png" alt=""/></div></div></div><div id="sp2"><div id="sp2card"><div class="front face"><img src="css/images/a1c.png" alt=""/></div><div class="back face center"><img src="css/images/a1c.png" alt=""/></div></div></div><div id="sp3"><div id="sp3card"><div class="front face"><img src="css/images/a1e.png" alt=""/></div><div class="back face center"><img src="css/images/a1e.png" alt=""/></div></div></div><div id="sp4"><img src="css/images/a1g.png" alt=""/><span class="spark1"></span><span class="spark2"></span><span class="spark3"></span><span class="spark4"></span></div>');
		$('#sp1').fadeIn(800,function() {
			$('#sp1').addClass('spin');
			$('#a1').addClass('sp1done');
		});
	}
	
	

	
	$('.sp1done a.ina0').live('click',function() {
		$('#sp2').fadeIn(800,function() {
			$('#sp2').addClass('spin');
			$('#a1').removeClass('sp1done').addClass('sp2done');
		});
	});
	
	$('.sp2done a.ina0').live('click',function() {
		$('#sp3').fadeIn(800,function() {
			$('#sp3').addClass('spin');
			$('#a1').removeClass('sp2done').addClass('sp3done');
		});
	});
	
	$('.sp3done a.ina0').live('click',function() {
		$('#sp4').fadeIn(800,function() {
			$('#a1').removeClass('sp3done').addClass('sp4done');
			setTimeout(function() {$('.spark1').fadeIn(800).delay(100).fadeOut(800);},800);
			setTimeout(function() {$('.spark2').fadeIn(800).delay(100).fadeOut(800);},1600);
			setTimeout(function() {$('.spark3,.spark4').fadeIn(800).delay(100).fadeOut(800); $('.ina0').fadeOut();},2400);
		});
	});
	
	
	$("#a1").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s0').removeClass('done');
			reseta1();
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#a2').addClass('active');
			reseta1();
			toa2();
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	
	$("#a2").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#a1').removeClass('done').addClass('active');
			reseta2();
			toa1()
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$('.alachome').live('click',function() {
		reseta12();
	});
	
	
	function reseta1() {
		$('#a1').removeClass('active').removeClass('sp1done').removeClass('sp2done').removeClass('sp3done').removeClass('sp4done');
		$('#a1').html('');
	}
	function reseta2() {
		$('#a2').html('');
	}
	
	function reseta12() {
		$('#a1').removeClass('done').removeClass('active').removeClass('sp1done').removeClass('sp2done').removeClass('sp3done').removeClass('sp4done');
		$('#a1,#a2').html('');
		$('#a2').removeClass('active');
		$('#s0').removeClass('done');
	}
	
	function toa2() {
		$('#a2').html('<img src="css/images/a2.jpg" alt=""/><a class="alachome"></a>');
		setTimeout(function() {$('#a2 > img').fadeIn(800);},300);
		setTimeout(function() {$('#a2 > a').fadeIn(800);},1100);
	}
	
	
	
	
	
	
});