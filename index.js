let eu  = {
    nome : "Lucas",
    idade : 24,
    genero : "masculino",
    habilidades : ["HTML","CSS","JavaScript","C"]
}

function mudarcor(cor){
    
    document.body.style.backgroundColor = cor;
}
function mudarcor(){
    document.body.style.backgroundColor = document.getElementById('sel').value;
}