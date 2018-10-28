  	function con(data){
  		return console.log(data);
  	}


  var url = $("body").data("url");	
  $(document).ready(function(){

  	$("#loading").fadeOut("slow");
    $('.tooltipped').tooltip();
     $('.parallax').parallax();
     $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy({
      getActiveElement :   function(id) {
	    return $("a[href='#"+id+"']").parent("li").addClass("active");
	  }
    });
    $('.modal').modal();

	$(".mouse, .scrollme").on('click', function(){
		$('html, body').animate({
	        scrollTop: $("#itproject").offset().top-200,
	    }, 500);
	});

	//event click
	$(".close-button-modal").on("click", function(){
		$("html").css("overflow", "visible");
	});

	$(".content-2-2").on("click", function(){

		$(".content-2-2").text("Load more...");
		$(".content-2-2").addClass("disabled");

		$("#loading-itproject").css("display", "visible");
		var length = $(".count-itproject").length;
	    	$.ajax({
	    		url : url + "ajaxget/itproject_experience/" + length,
				method : "GET",
	    		complete:function(data){
	    			var html = "";
	    			var newdata = data.responseText;
	    				  newdata = JSON.parse(newdata);
	    			// template
	    			newdata.forEach(function(entry){
		    			   html += '<div class="col s6 m6 l4 count-itproject">' +
					      '<div class="card">'+
					        '<div class="card-content">'+
					        	'<i class="fas fa-headphones fa-3x"></i>'+
					        	'<h4>'+entry.nama+'</h4>'+
					          '<p>'+entry.deskripsi+'</p>'+
					        '</div>'+
					        '<div class="card-action">'+
					          '<a href="#">Read more</a>'+
					        '</div>'+
					      '</div>'+
					    '</div>';
	    			});
				    $("#content-itproject").append(html);
				    $(".content-2-2").text("Load more");
				    $(".content-2-2").removeClass("disabled");
	    		},
	    		error:function(){
	    			alert("something wrong... try again");
	    		}
	    	})

	});

	$(".content-4-2").on("click", function(){

		$(".content-4-2").text("Load more...");
		$(".content-4-2").addClass("disabled");

		$("#loading-work").css("display", "visible");
		var length = $(".count-work").length;
	    	$.ajax({
	    		url : url + "ajaxget/work_experience/" + length,
				method : "GET",
	    		complete:function(data){
	    			var html = "";
	    			var newdata = data.responseText;
	    				  newdata = JSON.parse(newdata);
	    			// template
	    			newdata.forEach(function(entry){
		    			   html += '<div class="col s6 m6 count-work">'+
								      '<div class="card">'+
								        '<div class="card-content white-text">'+
								          '<div class="row">'+
								          	'<div class="col l4">'+
								          		'<img src="<?=site_url("dist/img/box.png")?>" class="responsive-img">'+
								          	'</div>'+
								          	'<div class="col l8 left-align content-4-1">'+
								          		'<h5>Card Title</h5>'+
										          '<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>'+
								          	'</div>'+
								          '</div>'+
								        '</div>'+
								      '</div>'+
								    '</div>';
	    			});
				    $("#content-work").append(html);
				    $(".content-4-2").text("Load more");
				    $(".content-4-2").removeClass("disabled");
	    		},
	    		error:function(){
	    			alert("something wrong... try again");
	    		}
	    	})

	});

	$(".contactme").on("submit", function(e){
		e.preventDefault();
		$(".content-8-3").addClass("disabled");
		$(".content-8-3").text("send message...");
		$.ajax({
			url : url + "ajaxsend/send_contact",
			method : "POST",
			data : new FormData(this),
			contentType: false,
			cache : false,
			processData: false,	
    		complete:function(data){
    			if(data.responseText == "sukses"){
	    			  var toastHTML = '<span>your message has been sent</span>';
	  				  M.toast({html: toastHTML});
	  				  $(".contactme")[0].reset();
	  				  $(".input-field label").addClass("active");
	  				  $('.content-8-3').blur();
	  				  $(".content-8-3").removeClass("disabled");
	  				  $(".content-8-3").text("send message");
    			}else{
    				alert("something wrong... try again");
    			}
    		},
    		error:function(){
    			alert("something wrong... try again");
    		}
		})
	});

	$("#form-quate").on("submit", function(e){
		$("#send-quates-button").text("Send...");
		$("#send-quates-button").addClass("disabled");
		e.preventDefault();
		$.ajax({
			url : url + "ajaxsend/send_quates",
			method : "POST",
			data : new FormData(this),
			contentType: false,
			cache : false,
			processData: false,	
    		complete:function(data){
    			if(data.responseText == "sukses"){
    				  var toastHTML = '<span>Success.... thankyou for your appreciate :)</span>';
 					  M.toast({html: toastHTML});
 					  $("#form-quate")[0].reset();
 					  $("#send-quates-button").text("Send !");
 					  $("#send-quates-button").removeClass("disabled");
    			}
    		},
    		error:function(){
    			alert("something wrong... try again");
    		}
		});
	});

  });

  var itproject_height = $('.content-2').scroll()[0].offsetTop;
  var itproject_height_end = $('.content-2').scroll()[0].clientHeight;
  
  var work_height = $('.content-4').scroll()[0].offsetTop;
  var work_height_end = $('.content-4').scroll()[0].clientHeight;

  $(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    var width = $(window).width();
    var count = $(".count-itproject").length;
    var count1 = $(".count-work").length;
    //data = 1 - (scrollPos/400);
    if(scrollPos == 0){
    	$("nav").removeClass("nav");
    	$(".capedeh-1").removeClass("capedeh");
    	if(width <= 1200){
    		$("body").css("overflow", "visible");
    	}else{
    		$("body").css("overflow", "hidden");
    	}
    	$(".imgnya").attr("src", ""+"dist/img/makassar-putih.png");
    	$(".imgnya").css("padding-top", "0px");
    	$(".brand-logo").removeClass("brand-logo-1");
    	$(".scroll-btn").show();
    }else{
    	$("nav").addClass("nav");
    	$(".capedeh-1").addClass("capedeh");
    	$("body").css("overflow", "visible");
    	$(".imgnya").attr("src", "dist/img/makassar.png");
    	$(".imgnya").css("padding-top", "10px");
    	$(".brand-logo").addClass("brand-logo-1");
    	$(".scroll-btn").hide();
    }  
    if(scrollPos >= itproject_height-200 && scrollPos <= (itproject_height+itproject_height_end)-200 && count == 0){
	    	$.ajax({
	    		url : url + "ajaxget/itproject_experience",
				method : "GET",
	    		complete:function(data){
	    			var html = "";
	    			var newdata = data.responseText;
	    				newdata = JSON.parse(newdata);
	    			// template
	    			newdata.forEach(function(entry){
		    			   html += '<div class="col s6 m6 l4 count-itproject">' +
					      '<div class="card">'+
					        '<div class="card-content">'+
					        	'<i class="fas fa-headphones fa-3x"></i>'+
					        	'<h4>'+entry.nama+'</h4>'+
					          '<p>'+entry.deskripsi+'</p>'+
					        '</div>'+
					        '<div class="card-action">'+
					          '<a href="#">Read more</a>'+
					        '</div>'+
					      '</div>'+
					    '</div>';
	    			});
				    $("#content-itproject").html(html);
	    		},
	    		error:function(){
	    			alert("something wrong... try again");
	    		}
	    	})
    }
    if(scrollPos >= work_height-200 && scrollPos <= (work_height+work_height_end)-200 && count1 == 0){
	    	$.ajax({
	    		url : url + "ajaxget/work_experience",
				method : "GET",
	    		complete:function(data){
	    			var html = "";
	    			var newdata = data.responseText;
	    				newdata = JSON.parse(newdata);
	    			// template
	    			newdata.forEach(function(entry){
		    			   html += '<div class="col s6 m6 count-work">' +
								      '<div class="card">' +
								        '<div class="card-content white-text">' +
								          '<div class="row">' +
								          	'<div class="col l4">' +
								          		'<img src="" class="responsive-img">' +
								          	'</div>' +
								          	'<div class="col l8 left-align content-4-1">' +
								          		'<h5>Card Title</h5>' +
										          '<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>' +
								          	'</div>' +
								          '</div>' +
								        '</div>' +
								      '</div>' +
								    '</div>';
	    			});
				    $("#content-work").html(html);	    				
	    		},
	    		error:function(){
	    			alert("something wrong... try again");
	    		}
	    	})
    }


}); 
