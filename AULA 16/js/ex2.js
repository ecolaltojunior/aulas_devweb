function validar(){
    var nome = cadastro.nome.value;
    var cpf = cadastro.cpf.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var confirma = cadastro.confirma.value;

    if(nome==""){
        alert("Nome é campo de preenchimento obrigatório!");
        cadastro.nome.focus();
        return false;
    }
    if(cpf==""){
        alert("CPF é campo de preenchimento obrigatório!");
        cadastro.cpf.focus();
        return false;
    }
    if(cpf.length != 14){
        alert("CPF inválido!");
        cadastro.cpf.focus();
        return false;
    }
    if(email==""){
        alert("Campo E-Mail é de de preenchimento obrigatório!");
        cadastro.email.focus();
        return false;
    }
    if(senha==""){
        alert("Campo Senha é de de preenchimento obrigatório!");
        cadastro.senha.focus();
        return false;
    }
    /*if(senha.length < 6 || senha.length > 10){
        alert("A senha deve ter no mínimo 6 e no máximo 10 números!");
        cadastro.senha.focus();
        return false;
    }*/
   /* if(isNaN(senha)){
        alert("A senha deve conter apenas números!");
        cadastro.senha.focus();
        return false;
    }*/
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/;
    //(?=.*?[A-Z]) - mínimo uma letra maiúscula
    //(?=.*?[a-z]) - mínimo uma letra minúscula
    //(?=.*?[0-9]) - mínimo um número
    //(?=.*?[^\w\s]) - mínimo um caractere especial
    //.{6,10} - mínimo 6, máximo 10 caracteres
    if(!regex.exec(senha)){
        alert("A senha deve conter ao menos uma letra maiúscula, uma letra minúscula, um número, um caractere especial, mínimo 6 e máximo 10 caracteres!");
        cadastro.senha.focus();
        return false;
    }
    if(confirma==""){
        alert("É obrigatório confirmar a senha");
        cadastro.confirma.focus();
        return false;
    }
    if(confirma != senha){
        alert("Senhas não conferem!");
        cadastro.confirma.focus();
        return false;
    }
}