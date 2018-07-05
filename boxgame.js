for (var i = 0; i < 2000; i++){
	$(".root").append("<div class='box'></div");
}

$("div").on('dblclick', function(){
	$("div").off("mouseover");
})

$("div").on('mouseover', function(){
	$(this).css("background", "yellow");
})

$("#my-selection").on("change", function(){
	var myColor = $("#my-selection").val();

	$("div").on("mouseover", function(){
		$(this).css("background", myColor);
	})
})