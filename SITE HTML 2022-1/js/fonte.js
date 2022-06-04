$(document).ready(function(){
    let fonte = 14
    $('#aumentar').click(function(){
        if(fonte<26){
            fonte++
            $('body').css({'font-size': fonte+'px'})
        }
    })
    $('#diminuir').click(function(){
        if(fonte>14){
            fonte--
            $('body').css({'font-size': fonte+'px'})
        }
    })
})