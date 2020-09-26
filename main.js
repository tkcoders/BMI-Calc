
$(window).on( "load" , function () {
  setTimeout ( function () {
      $(".loader-section").fadeOut("slow");
  } , 3000)
  
});

$(".btn").click(function () {
  var height = $(".height-number").val();
  var weight = $(".weight-number").val();
  

  if (height.trim() === "" || weight.trim() === "") {
      $(".result").text("Fill all the values ... ");
      setTimeout ( function () {
          $(".result").text("");
      } , 5000);
  } else if ( height.trim() === "0"|| weight.trim() === "0" ) {
      $(".result").text("0 is  ot a valid Value " );
      setTimeout ( function () {
          $(".result").text("");
          $(".height-number").val(``);
          $(".weight-number").val(``);
      } , 5000);
  } else {

      var bmi = weight/(height*height);

      $(".result").text("Your BMI is " + bmi );

      setTimeout ( function () {
          $(".result").text("");
          $(".height-number").val(``);
          $(".weight-number").val(``);
      } , 5000);
  }

  if (bmi < 18.5 ) {
      $("img").attr("src" , "Images/Capture1.PNG");
  } else if ( bmi >= 18.5 && bmi <= 24.9) {
      $("img").attr("src" , "Images/Capture2.PNG");
  } else if ( bmi >= 25 && bmi <= 29.9) {
      $("img").attr("src" , "Images/Capture3.PNG");
  } else if ( bmi >= 30 && bmi <= 34.9) {
      $("img").attr("src" , "Images/Capture4.PNG");
  } else if ( bmi >= 35 ) {
      $("img").attr("src" , "Images/Capture5.PNG");
  }

  setTimeout ( function () {
      $("img").attr("src" , "");
  } , 5000);


});

