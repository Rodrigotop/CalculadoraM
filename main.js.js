function agrvai(){
    var Resultado1 = document.getElementById("nota1").value;
    var resultado2 = document.getElementById("nota2").value;
    var resultado3 = document.getElementById("nota3").value;
    var resultado4 = document.getElementById("nota4").value;

    var media = (Number(Resultado1) + Number(resultado2) + Number(resultado3) + Number(resultado4)) / 4 
    var script = " "
    if  (media >="7") {
    script = ("aprovado, Parabéns");
    }
    
    else script = ("reprovado, que pena. Estude mais");
    
    document.getElementById("Resu_media").innerHTML = "Resultado:" + (` Sua Média é ${media} e você está ${script}`)
    
    document.getElementById("Media1" ).innerHTML = Resultado1
    document.getElementById("Media2" ).innerHTML = resultado2
    document.getElementById("Media3" ).innerHTML = resultado3
    document.getElementById("Media4" ).innerHTML = resultado4

}



