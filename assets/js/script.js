// ==============  NOTES  ===================
// 
// 
// 
// ==============  VARIABLES  ===============
var APIKey = "dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?" +
      "q=coffee&api_key=" + APIKey;


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
	var imageUrl = response.data["3"].images.original.url;

        // Creating and storing an image tag
        var image = $("<img>");

        // Setting the catImage src attribute to imageUrl
        image.attr("src", imageUrl);
        image.attr("alt", "image");

        // Prepending the catImage to the images div
        $(".linkTest").prepend(image);

});