// $("#size").change(function(){
//     let size = $("#size").val()
//     $(".box").empty()
//     for(let i = 0; i < (size * size); i++){
//         $(".box").append("<div class='pixel'></div>")
//     }
//     $(".pixel").css({
//         "width" : 600 / size ,
//         "height" : 600 / size , 
//         "border" : "1px solid black"
//     })

// })

// $(".box").click(function(event){
//     let col = $(".color").val()
//     $(event.target).css("background", col)
// })


// $("#size").change(function(){
//     let size = $("#size").val()
//     $(".box").empty()
//     for(let i = 0; i < (size * size); i++){
//         $(".box").append("<div class='pixel'></div>")
//     }
//     $(".pixel").css({
//         "width" : 600 / size ,
//         "height" : 600 / size , 
//         "border" : "1px solid black"
//     })

// })

// $(".box").click(function(event){
//     let col = $(".color").val()
//     let ch =document.getElementById('eraser')
//     if(ch.checked) {  
//         col='white'
//     }
//     else{
//         col=$('.color').val()
//     }
//     $(event.target).css("background", col)


// })



$('#size').change(function(){
    let size = ($('#size').val())

    $('.box').empty()

    for(let i=0; i<(size*size); i++){
        $('.box').append(
            "<div class='pixel'></div>"
        )
    }
    $('.pixel').css({
        "width" : 600/size,
        "height" : 600/size,
        "border" : "1px solid black"
    })
})

//Ластик
$('.box').click(function(event){
    let color = $('.color').val()
    let ch=document.getElementById('erase')
     if(ch.checked) {  
      color='white'
      audioClean()
     }
     else{
      color=$('.color').val()
      audioColor()
     }

    $(event.target).css('background' , color)
})



// $(window).load(function(){
//    	 for(let i=0; i<100;i++){
//    		 $('.box').append("<div class='pixel'></div>")
//    	 }
//    	 $('.pixel').css({'width': '50px', 'height': '50px', 'background':'white', 'border':'1px solid black'})
//     })




function audioColor(){
    let myAudio = new Audio
    myAudio.src = "music/click.mp3"
    myAudio.play()
    }
function audioClean(){
    let myAudio = new Audio;
    myAudio.src = "music/clean.mp3"
    myAudio.play()
    }
    