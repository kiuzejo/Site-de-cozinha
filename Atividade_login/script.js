let enviar = document.getElementById("enviar")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let validate1 = false
let validate2 = false


email.addEventListener("input", () => {

    let gmail = email.value



    if(gmail.length >= 1) {

        validate1 = true
        console.log("deu certo")

        if(validate1 && validate2){

            enviar.disabled = false
    
        }
    
        else{
    
            enviar.disabled = true
    
        }
    }

    else {

        validate1 = false;

    }

    if(gmail == "samuel@hotmail.com"){

        validate3 = true

    }

    else{

        validate3 = false

    }

}

)

senha.addEventListener("input", () => {

    let password = senha.value
    console.log(password);



    if(password.length >= 1){

        validate2 = true
        console.log("deu certo")

        if(validate1 && validate2){

            enviar.disabled = false
    
        }
    
        else{
    
            enviar.disabled = true
    
        }

    }

    else {

        validate2 = false;

    }

    if(password === "123456"){

        validate4 = true

    }

    else{

        validate4 = false

    }

}

)

enviar.addEventListener("click", () => {

    console.log("teste");

    if(validate3 && validate4){

        window.location = "https://benedictus69.github.io/Site_de_rosquinha/"

    }

    else{


        window.alert("login errado")

    }

}

)