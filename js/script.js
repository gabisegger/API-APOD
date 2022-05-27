const btn = $('#btn')
const formDate = $('#form')
const divContainer = $('.container')

function clickNewBtn(){
    $('.newBtn').on('click', () => {
        $(divContainer).css('display', 'none');
        $(formDate).css('display', 'grid');
        $('.picture').remove();
        $('.text').html('');
    })
}

clickNewBtn();

function requestUser(date) {

    $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=PBQuKxC4InPeHSsb8AG6hryDhfnPz1awfLGflQdh&date=${date}`,

    success: function(result){
        const title = result.title;
        const url = result.hdurl;
        const description = result.explanation;
        const date = new Date(result.date);
        const formattedDate = new Intl.DateTimeFormat('pt-BR').format(date);

        $(divContainer).css('display', 'flex');

        const dateText = $("<span class='date'></span>").text(formattedDate)
        $(".text").prepend(dateText);      

        const titleText = $("<h2 class='title-picture'></h2>").text(title)
        $(".text").append(titleText);
       
        const imgHtml = "<img class='picture' src='" + url +"' alt=''>"
        $(".container").prepend(imgHtml);

        const descriptionText = $("<p class='description'></p>").text(description)
        $(".text").append(descriptionText);

    }});
}

$('#form').submit((event)=>{
    event.preventDefault()
    $(formDate).hide();
    date = $('#date').val()
    requestUser(date);
    
})