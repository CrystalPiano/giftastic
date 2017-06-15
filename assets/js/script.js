// ==============  NOTES  ===================
// 
// 
// 
// ==============  VARIABLES  ===============
var APIKey = "dc6zaTOxFJmzC";
var queryURL = "http://api.giphy.com/v1/gifs/search?" +
      "q=funny+cat&api_key=" + APIKey;



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
	var imageUrl = response.data.images.original_url;

        // Creating and storing an image tag
        var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $(".linkTest").prepend(catImage);

});