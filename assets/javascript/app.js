var topics = ["My Hero Academia", "Dragon Ball", "One Punch Man"]

//This function will initialize buttons once the document readys
function buttonReady(arr) {
    for (i = 0; i < arr.length; i++) {
        button = $("<button>");
        button.attr("data-anime", arr[i])
        console.log(button)
        button.text(arr[i])
        $("#buttons").append(button)
    }

}




//On click, pulls data-anime to add to the queryURL
$("button").on("click", function () {
    //"This" will pull the buttons data that is clicked.
    var anime = $(this).attr("data-anime");
    var apiKey = "&api_key=KFEVEi0ML7VBhu75LJ67c8sj0fHZPiee";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + anime + apiKey;
    // This will ask GIPHY for it's data to related search query
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(results[0])
        //For every result, this will append a div and p tag for every gif called
        for (var i = 0; i < results.length; i++) {
            var animeDiv = $("<div>")
            var p = $("<p>")
            p.append(results[i].rating)
            var animeImage = $("<img>")
            animeImage.attr("src", results[i].images.fixed_height.url)
            animeDiv.append(p)
            animeDiv.append(animeImage);
            $("#gifs").prepend(animeDiv)
        }


    })
})
buttonReady(topics)