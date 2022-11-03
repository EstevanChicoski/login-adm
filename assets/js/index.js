
function calculate(){

    var name = " ";
    var senha = " ";

    name = document.getElementById("user").value
    senha = document.getElementById("senha").value

    /*s9ieh08erhter0hyt9uerhy9erhy9erhyhery9ehre9rh*/

    if(name == "admin" && senha == "admin$$@@##%%"){
        window.location.replace("admin.html");
    } 
    else if(name == "estevan" && senha == "123456"){
        window.location.replace("page.html");
    } else{
        alert("Senha ou usuário incorreto")
    }

}