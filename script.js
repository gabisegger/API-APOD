$.ajax({url: "https://api.nasa.gov/planetary/apod?api_key=PBQuKxC4InPeHSsb8AG6hryDhfnPz1awfLGflQdh",

success: function(result){
//renderUser(result);
    const title = result.title
    const url = result.hdurl
    const description = result.explanation
    const date = result.date

}});

