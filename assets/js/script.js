// ==============  NOTES  ===================
// 
// 
// 
// ==============  VARIABLES  ===============
var topics = ['Sheltie','Bulldog','Pomeranian', 'Bernese Mountain Dog', 'Golden Retriever'];
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

        // Creating and storing an image tag
        var image = $("<img>");

        // Setting the catImage src attribute to imageUrl
        image.attr("src", imageUrl);
        image.attr("alt", "image");

        // Prepending the catImage to the images div
        $(".linkTest").prepend(image);

});


$(".test-1").on("click", function() {
  $("#testLine").append(imageUrl);
});


//var dogDiv = document.getElementById("testLine");

    //for (var i = 0; i < topics.length; i++) {

      //var newDogDiv = document.createElement("<div>" + topics[i] + "</div>");

        //newDogDiv.innerHTML = topics[i];

      //$('#testLine').append(newDogDiv);
    //};