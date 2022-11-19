$(document).ready(function(){
    let fonte = 14
    $('#aumenta').click(function(){
        if(fonte<25){
            $('body').css({'font-size': ++fonte +'px'})
        }
    })
    $('#diminui').click(function(){
        if(fonte>14){
            $('body').css({'font-size': --fonte +'px'})
        }
    })
})