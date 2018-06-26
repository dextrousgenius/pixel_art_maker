// Select color input
// Select size input

var selectedHeight;
var selectedWidth;
var selectedColor;



// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){


  event.preventDefault();

  selectedHeight = $('#inputHeight').val();

  selectedWidth = $("#inputWeight").val();

  console.log("Height: " + selectedHeight + " Width: " + selectedWidth);

  makeGrid(selectedHeight,selectedWidth);


});



function makeGrid(selectedHeight,selectedWidth) {

// Your code goes here!


$("tr").remove();


for (var r = 1; r <= selectedHeight; r++) {

    $("#pixelCanvas").append("<tr></tr>");

    for (var c = 0; c <= selectedWidth; c++) {


      $("tr:last-child").append("<td></td>");


    }

}

}






$("#pixelCanvas").on("click","td",function(){

  if($(this).attr("style")){


  $(this).removeAttr("style");

  } else {

    selectedColor = $("#colorPicker").val();


   $(this).css("background", selectedColor);

  }

});
