function mudar(){
    let novo = document.getElementById("idNome")

    //chamar pelo ID
    document.getElementById("titulo").required=true;
    document.getElementById("titulo").innerHTML=novo.value;
}