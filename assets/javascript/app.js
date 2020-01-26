//On click, pulls data-villager to add to the queryURL
$("button").on("click", function(){
    //"This" will pull the buttons data that is clicked.
    var villager = $(this).attr("data-villager");
    var apiKey = "&api_key=KFEVEi0ML7VBhu75LJ67c8sj0fHZPiee";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=animal+crossing+" + villager + apiKey;
    // This will ask GIPHY for it's data to related search query
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       var results = response.data;
       console.log(results[0])
       //For every result, this will append a div and p tag for every gif called
       for(var i = 0; i < results.length; i++){
        var villagerDiv = $("<div>")
        var p = $("<p>")
        p.append(results[i].rating)
        var villagerImage = $("<img>")
        villagerImage.attr("src",results[i].images.fixed_height.url)
        villagerDiv.append(p)
        villagerDiv.append(villagerImage);
        $("#gifs").prepend(villagerDiv)

       }
        
        
    })
})