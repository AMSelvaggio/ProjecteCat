const arrayFrase = ["La historia comença un dia "]


//La funció automàtica no funcióna per x mutiu.
/* 
(function(v){

 const frase= v.join(" ") 
document.getElementById("sentence").innerHTML= arrayFrase.join(" ")

})(arrayFrase)*/
 

function showFrase(){

    const frase= arrayFrase.join(" ")
    document.getElementById("sentence").innerHTML= frase

}
 

function afegirLinea(){

const linea = document.getElementById("afegir").value

arrayFrase.push(linea)

document.getElementById("afegir").value = " "

}