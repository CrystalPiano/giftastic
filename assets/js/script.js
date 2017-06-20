// ==============  NOTES  ===================
// Create dynamic topic buttons
// Add user animal addition field
// Add multiple GIF results per search
// ==============  VARIABLES  ===============
//var topics = ['Sheltie','Bulldog','Pomeranian','Bernese Mountain Dog','Golden Retriever'];
var topics = ['Sheltie'];
var APIKey = "dc6zaTOxFJmzC";
var queryURL = "https://api.giphy.com/v1/gifs/search?" +
      "q=" + topics + "&api_key=" + APIKey;
// ==============  EVENTS  ==================



// ==============  FUNCTIONS  ===============
  //AJAX Call and test console log
	$.ajax({
        url: queryURL,
        method: "GET"
      })

	.done(function(response) {

        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);

	//Writing the desired calls to the div
	var imageUrl = response.data["0"].images.original.url;
    var imageUrl1 = response.data["1"].images.original.url;
    var imageUrl2 = response.data["2"].images.original.url;
    var imageUrl3 = response.data["3"].images.original.url;
    var imageUrl4 = response.data["4"].images.original.url;
    var imageUrl5 = response.data["5"].images.original.url;
    var imageUrl6 = response.data["6"].images.original.url;
    var imageUrl7 = response.data["7"].images.original.url;
    var imageUrl8 = response.data["8"].images.original.url;
    var imageUrl9 = response.data["9"].images.original.url;

        // Creating and storing an image tag
        var image = $("<img>");
        var image1 = $("<img>");
        var image2 = $("<img>");
        var image3 = $("<img>");
        var image4 = $("<img>");
        var image5 = $("<img>");
        var image6 = $("<img>");
        var image7 = $("<img>");
        var image8 = $("<img>");
        var image9 = $("<img>");


        // Setting the image src attribute to imageUrl
        image.attr("src", imageUrl);
        image.attr("alt", "sheltie gif");

        image1.attr("src", imageUrl1);
        image1.attr("alt", "sheltie gif");

        image2.attr("src", imageUrl2);
        image2.attr("alt", "sheltie gif");

        image3.attr("src", imageUrl3);
        image3.attr("alt", "sheltie gif");

        image4.attr("src", imageUrl4);
        image4.attr("alt", "sheltie gif");

        image5.attr("src", imageUrl5);
        image5.attr("alt", "sheltie gif");

        image6.attr("src", imageUrl6);
        image6.attr("alt", "sheltie gif");

        image7.attr("src", imageUrl7);
        image7.attr("alt", "sheltie gif");

        image8.attr("src", imageUrl8);
        image8.attr("alt", "sheltie gif");

        image9.attr("src", imageUrl9);
        image9.attr("alt", "sheltie gif");

        // Prepending the image to the images div
        $(".linkTest").prepend(image);


    $(".sheltie-button").on("click", function() {
      $(".gif-box-0").append(image);
      $(".gif-box-1").append(image1);
      $(".gif-box-2").append(image2);
      $(".gif-box-3").append(image3);
      $(".gif-box-4").append(image4);
      $(".gif-box-5").append(image5);
      $(".gif-box-6").append(image6);
      $(".gif-box-7").append(image7);
      $(".gif-box-8").append(image8);
      $(".gif-box-9").append(image9);
    });

});



//Dynamically created topic buttons
//var dogDiv = document.getElementById("testLine");

    //for (var i = 0; i < topics.length; i++) {

      //var newDogDiv = document.createElement("<div>" + topics[i] + "</div>");

        //newDogDiv.innerHTML = topics[i];

      //$('#testLine').append(newDogDiv);
    //};



// Extra code

   //$(".bulldog-button").on("click", function() {
     //$(".gif-box").append(image);
   //});

    //$(".pomeranian-button").on("click", function() {
      //$(".gif-box").append(image);
    //});

    //$(".bernesemountaindog-button").on("click", function() {
      //$(".gif-box").append(image);
    //});

    //$(".goldenretriever-button").on("click", function() {
      //$(".gif-box").append(image);
    //});