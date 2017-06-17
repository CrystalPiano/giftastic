// ==============  NOTES  ===================
// 
// 
// 
// ==============  VARIABLES  ===============
var APIKey = "dc6zaTOxFJmzC";
var queryURL = "https://api.giphy.com/v1/gifs/search?" +
      "q=" + topics + "&api_key=" + APIKey;

var topics = "dog";
//var topics = ['gulfstream', 'boeing', 'airbus', 'cessna', 'learjet', 'aerion'];
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


$("#test").on("click", function() {
  $("#testLine").append(imageUrl);
});


// Creating buttons dynamically from my array of topics
//for(var i = 0; i < topics.length; i++)
//{
    //document.createElement("<div>");
    //for(var j = 0; j < topics[i].length; j++)
    //{
       //document.createElement("<input type='button' value='" + topics[i][j] + "'/>");
    //}
    //document.createElement("</div>");
//}