

$(function(){
	$(".se-pre-con").fadeOut(3000);
	$(window).scroll(function(){
		if($(this).scrollTop()>400)
		{
			$(".pic:eq(0)").css("-webkit-filter","grayscale(0)");
			$(".pic:eq(0)").css("-webkit-transform","scale(1.04)");
		}
		if($(this).scrollTop()>900)
		{
			$(".pic:eq(1)").css("-webkit-filter","grayscale(0)");
			$(".pic:eq(1)").css("-webkit-transform","scale(1.04)");
		}
		if($(this).scrollTop()>1400)
		{
			$(".pic:eq(2)").css("-webkit-filter","grayscale(0)");
			$(".pic:eq(2)").css("-webkit-transform","scale(1.04)");
		}
		if($(this).scrollTop()>1900)
		{
			$(".pic:eq(3)").css("-webkit-filter","grayscale(0)");
			$(".pic:eq(3)").css("-webkit-transform","scale(1.04)");
		}
		if($(this).scrollTop()>2400)
		{
			$(".pic:eq(4)").css("-webkit-filter","grayscale(0)");
			$(".pic:eq(4)").css("-webkit-transform","scale(1.04)");
		}
		if($(this).scrollTop()>2900)
		{
			$(".pic:eq(5)").css("-webkit-filter","grayscale(0)");
			$(".pic:eq(5)").css("-webkit-transform","scale(1.04)");
		}
	});
	$(".btn-outline-dark:eq(0)").click(function(){
     	if( $(".dots:eq(0)").css("display") == "none")
	    {
		  	$(".dots:eq(0)").css("display","inline");
		  	$(".myBtn:eq(0)").html("Read More");
		  	$(".more:eq(0)").css("display","none");
        }
		else
	    {
		  	$(".dots:eq(0)").css("display","none");
		  	$(".myBtn:eq(0)").html("Read Less");
		  	$(".more:eq(0)").css("display","inline");	
		}
	});
	$(".btn-outline-dark:eq(1)").click(function(){
     	if( $(".dots:eq(1)").css("display") == "none")
	    {
		  	$(".dots:eq(1)").css("display","inline");
		  	$(".myBtn:eq(1)").html("Read More");
		  	$(".more:eq(1)").css("display","none");
        }
		else
	    {
		  	$(".dots:eq(1)").css("display","none");
		  	$(".myBtn:eq(1)").html("Read Less");
		  	$(".more:eq(1)").css("display","inline");	
		}
	});
	$(".btn-outline-dark:eq(2)").click(function(){
     	if( $(".dots:eq(2)").css("display") == "none")
	    {
		  	$(".dots:eq(2)").css("display","inline");
		  	$(".myBtn:eq(2)").html("Read More");
		  	$(".more:eq(2)").css("display","none");
        }
		else
	    {
		  	$(".dots:eq(2)").css("display","none");
		  	$(".myBtn:eq(2)").html("Read Less");
		  	$(".more:eq(2)").css("display","inline");	
		}
	});
	$(".btn-outline-dark:eq(3)").click(function(){
     	if( $(".dots:eq(3)").css("display") == "none")
	    {
		  	$(".dots:eq(3)").css("display","inline");
		  	$(".myBtn:eq(3)").html("Read More");
		  	$(".more:eq(3)").css("display","none");
        }
		else
	    {
		  	$(".dots:eq(3)").css("display","none");
		  	$(".myBtn:eq(3)").html("Read Less");
		  	$(".more:eq(3)").css("display","inline");	
		}
	});
	$(".btn-outline-dark:eq(4)").click(function(){
     	if( $(".dots:eq(4)").css("display") == "none")
	    {
		  	$(".dots:eq(4)").css("display","inline");
		  	$(".myBtn:eq(4)").html("Read More");
		  	$(".more:eq(4)").css("display","none");
        }
		else
	    {
		  	$(".dots:eq(4)").css("display","none");
		  	$(".myBtn:eq(4)").html("Read Less");
		  	$(".more:eq(4)").css("display","inline");	
		}
	});			
	$(".btn-outline-dark:eq(5)").click(function(){
     	if( $(".dots:eq(5)").css("display") == "none")
	    {
		  	$(".dots:eq(5)").css("display","inline");
		  	$(".myBtn:eq(5)").html("Read More");
		  	$(".more:eq(5)").css("display","none");
        }
		else
	    {
		  	$(".dots:eq(5)").css("display","none");
		  	$(".myBtn:eq(5)").html("Read Less");
		  	$(".more:eq(5)").css("display","inline");	
		}
	});			

});