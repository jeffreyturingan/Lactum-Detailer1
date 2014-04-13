$(document).ready(function() {
	document.body.addEventListener('touchmove', function(e) {
	  // This prevents native scrolling from happening.
	  e.preventDefault();
	}, false);
	
	var actionfinger = 2;
	
	$("#s0").swipe({
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s1').addClass('active');
			tos1();
		},fingers:actionfinger 
	});
	
	$("#s1").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s0').removeClass('done');
			resets1();
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s2').addClass('active');
			resets1();
			tos2();
		},fingers:actionfinger 
	});
	
	
	$("#s2").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s1').removeClass('done');
			resets2();
			tos1();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s3').addClass('active');
			resets2();
			tos3();
		},fingers:actionfinger 
	});
	
	$("#s3").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s2').removeClass('done');
			resets3();
			tos2();
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s4').addClass('active');
			resets3();
			tos4();
			
		},fingers:actionfinger 
	});
	
	$("#s4").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s3').removeClass('done');
			resets4();
			tos3();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s5').addClass('active');
			resets4();
			tos5();
			
		},fingers:actionfinger 
	});
	
	$("#s5").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s4').removeClass('done');
			resets5();
			tos4();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s6').addClass('active');
			resets5();
			tos6();
			
		},fingers:actionfinger 
	});
	
	$("#s6").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s5').removeClass('done');
			resets6();
			tos5();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s7').addClass('active');
			resets6();
			tos7();
		},fingers:actionfinger 
	});
	
	$("#s7").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s6').removeClass('done');
			resets7();
			tos6();
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s8').addClass('active');
			resets7();
			tos8();
			
			
		},fingers:actionfinger 
	});
	
	$("#s8").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s7').removeClass('done');
			resets8();
			tos7();
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s9').addClass('active');
			resets8();
			tos9();
			
		},fingers:actionfinger 
	});
	
	$("#s9").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s8').removeClass('done');
			resets9();
			tos8();
			
			
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s10').addClass('active');
			resets9();
			tos10();
			
		},fingers:actionfinger 
	});
	
	$("#s10").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s9').removeClass('done');
			resets10();
			tos9();
			
		},fingers:actionfinger 
	});
	
	$('.restart').live('click',function() {
		resetall();
	});
	
	/*RESET*/
	function resets1() {
		$('#s1 > span,#s1 > i').removeClass('anim');
	}
	function resets2() {
		$('#s2 > .s2b,#s2 > .s2c').removeClass('anim');
	}
	function resets3() {
		$('.s3a,.s3b,.s3c,.s3d, #s3 > i').removeClass('anim');
	}
	function resets4() {
		$('.s4a,.s4a2,.s4b,.s4c,.s4d').removeClass('anim');
	}
	function resets5() {
		$('.s5a,.s5b,.s5c,.s5d,.s5e,#s5 > i').removeClass('anim');
	}
	function resets6() {
		$('.s6b,.s6c,.s6d,.s6e').removeClass('anim');
	}
	function resets7() {
		$('.s7a').removeClass('anim').removeClass('anim2').removeClass('anim3').removeClass('anim4').removeClass('anim5').removeClass('anim6');
		$('.s7b,.s7c,.s7d').removeClass('anim');
	}
	function resets8() {
		$('.s8e,.s8b,.s8c,.s8d').removeClass('anim');
	}
	function resets9() {
		$('.s9b,#s9 > i').removeClass('anim');
	}
	function resets10() {
		$('.s10a,#s10 > i').removeClass('anim');
	}
	function resetall() {
		$('#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9,#s10').removeClass('active');
		$('span,i,img').removeClass('anim');
		$('#s0,#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9,#s10').removeClass('done');
	}
	
	
	/*ANIMATION*/
	function tos1() {
		setTimeout(function() {$('#s1 > span,#s1 > i').addClass('anim');}, 500);
	}
	function tos2() {
		setTimeout(function() {$('#s2 > .s2b,#s2 > .s2c').addClass('anim');}, 1000);
	}
	function tos3() {
		setTimeout(function() {$('#s3 > .s3a').addClass('anim');}, 1000);
		setTimeout(function() {$('#s3 > .s3b, #s3 > i').addClass('anim');}, 1500);
		setTimeout(function() {$('#s3 > .s3c').addClass('anim');}, 2000);
		setTimeout(function() {$('#s3 > .s3d').addClass('anim');}, 2500);
	}
	
	function tos4() {
		setTimeout(function() {$('#s4 > .s4a').addClass('anim');},1000);
		setTimeout(function() {$('#s4 > .s4a2').addClass('anim');},1500);
		setTimeout(function() {$('#s4 > .s4b').addClass('anim');},2000);
		setTimeout(function() {$('#s4 > .s4c').addClass('anim');},2500);
		setTimeout(function() {$('#s4 > .s4d').addClass('anim');},3000);
	}
	function tos5() {
		setTimeout(function() {$('#s5 > .s5a').addClass('anim');},1000);
		setTimeout(function() {$('#s5 > .s5b, #s5 > i').addClass('anim');},1500);
		setTimeout(function() {$('#s5 > .s5c').addClass('anim');},2000);
		setTimeout(function() {$('#s5 > .s5d').addClass('anim');},2500);
		setTimeout(function() {$('#s5 > .s5e').addClass('anim');},3000);
	}
	function tos6() {
		setTimeout(function() {$('#s6 > .s6b').addClass('anim');},1000);
		setTimeout(function() {$('#s6 > .s6c').addClass('anim');},1500);
		setTimeout(function() {$('#s6 > .s6d').addClass('anim');},2000);
		setTimeout(function() {$('#s6 > .s6e').addClass('anim');},2500);
	}
	function tos7() {
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

		/*setTimeout(function() {$('#s7 > .s7b').addClass('anim');},1500);
		setTimeout(function() {$('#s7 > .s7c').addClass('anim');},2000);
		setTimeout(function() {$('#s7 > .s7d').addClass('anim');},2500);*/
	}
	function tos8() {
		/*setTimeout(function() {$('#s8 > .s8a').addClass('anim');},1000);*/
		setTimeout(function() {$('#s8 > .s8b').addClass('anim');},1500);
		setTimeout(function() {$('#s8 > .s8c').addClass('anim');},2000);
		setTimeout(function() {$('#s8 > .s8d').addClass('anim');},2500);
		setTimeout(function() {$('#s8 > .s8e').addClass('anim');},3000);
	}
	function tos9() {
		setTimeout(function() {$('#s9 > .s9b, #s9 > i').addClass('anim');},1000);
	}
	function tos10() {
		setTimeout(function() {$('#s10 > .s10a, #s10 > i ').addClass('anim');},1000);
	}
	
});