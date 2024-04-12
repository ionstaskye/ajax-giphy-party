console.log("Let's get this party started!");
const $gifLand = $("#gifLand")
const $searchInput = $("#gif")
function addGif(res){
    let $newGif= $("<img>", {src: res[0].images.original.url})
    $gifLand.append($newGif)
}

$("#gif-Form").on("submit", async function(evt){   
    evt.preventDefault()
    let gifValue = $searchInput.val()
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {a: gifValue, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
   console.log(response)
    addGif(response.data)
})
$("#remove").on("click", function() {
    $gifLand.empty()
})
