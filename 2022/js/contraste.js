document.addEventListener("DOMContentLoaded", function(){

    let url1 = "../css/estilo.css"
    let url2 = "../css/contraste.css"
    let contraste = document.getElementById("contraste")
    let semcontraste = document.getElementById("semcontraste")

    function createTag(url){
        let estilo = document.createElement("link")
        estilo.href = url
        estilo.rel = "stylesheet"
        estilo.type = "text/css"
        estilo.className = "acess"
        
        document.body.appendChild(estilo)
    }

    let tag = document.getElementsByClassName("acess") //<link  href=url rel="stylesheet" type="text/css">

    contraste.onclick = function(){
        tag[0].href = url2
        localStorage.setItem("css", url2)
    }

    semcontraste.onclick = function(){
        tag[0].href = url1
        localStorage.setItem("css", url1)
    }

    let css = localStorage.getItem("css")

    if(!css){
        createTag(url1)
    }else{
        createTag(css)
    }


})