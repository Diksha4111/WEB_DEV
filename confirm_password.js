function verifyPswd(){
    let pswd = document.getElementById("pswd").value;
    let confpswd = document.getElementById("confirm_pswd").value;
    let message = document.getElementById("msg");
    console.log(pswd,confpswd);

    if(pswd.length != 0){
        if(pswd==confpswd){
            message.textContent = "Password Matched";
            message.style.color = "#3ae374";
        }
        else{
            message.textContent = "Password Doesn't Matched";
            message.style.color = "#ff4d4d";
        }
    }
}
btn.addEventListener("click",verifyPswd);