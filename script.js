


$.ajax({url: "https://api.nasa.gov/planetary/apod?api_key=PBQuKxC4InPeHSsb8AG6hryDhfnPz1awfLGflQdh",

success: function(result){
//renderUser(result);
    const title = result.title
    const url = result.hdurl
    const description = result.explanation
    const date = result.date

    const dateText = $("<span></span>").text(date)
    $(dateText).insertAfter("h1");

    const titleText = $("<h2></h2>").text(title)
    $(titleText).insertAfter("span");

    if(result.media_type == "image"){
        const imgHtml = "<img src='" + url +"' alt=''>"
        $(imgHtml).insertAfter("h2");

        const descriptionText = $("<p></p>").text(description)
        $(descriptionText).insertAfter("img");
    }

    if(result.media_type == "video"){
        const videoHtml = "<video src='"+url+"' autoplay></video>"
        $(videoHtml).insertAfter("h2");

        const descriptionText = $("<p></p>").text(description)
        $(descriptionText).insertAfter("video");
    }

}});

