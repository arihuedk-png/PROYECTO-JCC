function validar () {
    var usuario=document.getElementById("usuario").value;
    var clave=document.getElementById("clave").value;

    if (usuario=="ari" && clave=="1234") {
        window.location.href="index2.html";
    }else{
        alert("USUARIO INVALIDO")
    }
}

function limpiar(){
    document.getElementById("usuario").value="";
    document.getElementById("clave").value="";
}

function afiliar (){
    var ema=document.getElementById("email").value;

    document.getElementById("nombre").value="";
    document.getElementById("DNI").value="";
    document.getElementById("edad").value="";
    document.getElementById("email").value="";
    document.getElementById("resultado3").textContent="usuario afiliado";

    if(ema=="arihuedk@gmail.com") {
        document.getElementById("resultado3").textContent="usuario existente";
    }else{
        document.getElementById("resultado3").textContent="usuario no afiliado";
    }
}

function buscar () {
    var mar=document.getElementById("marca").value;
    var ti=document.getElementById("tipo").value;
        if (mar=="2" && ti=="1") {
        document.getElementById("resultado4").textContent="8k ars";        }
    if (mar=="2" && ti=="2") {
        document.getElementById("resultado4").textContent="10k ars";   }
    if (mar=="2" && ti=="3") {
        document.getElementById("resultado4").textContent="12k ars";  }
    if (mar=="2" && ti=="4") {
        document.getElementById("resultado4").textContent="15k ars";   }

    if (mar=="1" && ti=="1") {
        document.getElementById("resultado4").textContent="20k ars";        }
    if (mar=="1" && ti=="2") {
        document.getElementById("resultado4").textContent="22k ars";   }
    if (mar=="1" && ti=="3") {
        document.getElementById("resultado4").textContent="25k ars";  }
    if (mar=="1" && ti=="4") {
        document.getElementById("resultado4").textContent="28k ars";   }
}