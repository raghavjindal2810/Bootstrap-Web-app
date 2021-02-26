



// 		$target.hide("slow", function(){ $(this).remove(); })   slowly remove div element


//		$("p").addClass("important test");		Add Important as well as test CLASS

//		border:1px solid black;					Correct Syntax


$(function(){
	
	$(".se-pre-con").fadeOut(4000);
	$(window).scroll(function(){
		if($(this).scrollTop() > 90)
		{
			$("#first").hide();
			$("#second").hide();
			$("#backTop").fadeIn('slow');
			$(".headerLink").css("display","block");
			$('header').addClass("sticky");
			$('#companyLogo').css("height","80px");
			$('#companyLogo').css("width","80px");
		}
		else {
			$('header').removeClass("sticky");
			$("#first").show();
			$("#second").show();
			$(".headerLink").css("display","none");
			$("#backTop").fadeOut('slow');		
			$('#companyLogo').css("height","135px");
			$('#companyLogo').css("width","135px");
		}
	});
	$("#eventImage img, br").hover(function(){
		$(this).css("transform","scale(1.4)");
		$(this).css("transition","all 2.5s");
	},
	function(){
		$(this).css("transform","scale(1)");
		$(this).css("transition","all 1.5s ease .5s");		
	});
	$("#fixed1").hover(function(){
			$("#fixed1 .demoHidden").css("display","block");
		},
		function(){
			$("#fixed1 .demoHidden").css("display","none");
	});
});