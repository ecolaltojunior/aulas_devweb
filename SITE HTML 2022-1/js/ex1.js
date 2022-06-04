function primeiraFuncao(){
    alert("Primeira atividade de JavaScript")
}

function validar(){
    //declaração de variável
    let nome = cadastro.nome.value
    let cpf = cadastro.cpf.value
    let email = cadastro.email.value
    let senha = cadastro.senha.value
    let confirma = cadastro.confirma.value

    if(nome==""){
        alert("Campo nome é obrigatório")
        cadastro.nome.focus()
        return false
    }
    if(cpf==""){
        alert("Campo cpf é obrigatório")
        cadastro.cpf.focus()
        return false
    }
    if(email==""){
        alert("Campo email é obrigatório")
        cadastro.email.focus()
        return false
    }
    if(senha==""){
        alert("Campo senha é obrigatório")
        cadastro.senha.focus()
        return false
    }
    if(confirma==""){
        alert("É obrigatório digitar novamente a senha")
        cadastro.confirma.focus()
        return false
    }
    if(isNaN(cpf)){
        alert("Digite somente números para o campo CPF")
        cadastro.cpf.focus()
        return false
    }
    if(senha != confirma){
        alert("Senhas não conferem")
        cadastro.confirma.focus()
        return false
    }
    if(cpf.length != 11){
        alert("CPF inválido!")
        cadastro.cpf.focus()
        return false
    }

    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/
    //(?=.*?[A-Z]) - mínimo uma letra maiúscula
    //(?=.*?[a-z]) - mínimo uma letra minúscula
    //(?=.*?[0-9]) - mínimo um número
    //(?=.*?[^\w\s]) - mínimo um caractere especial
    //.{6,10} - mínimo 6, máximo 10 caracteres

    if(!regex.exec(senha)){
        alert("A senha deve conter ao menos uma letra maiúscula, uma letra minúscula, números e caracteres especiais, mínimo 6 e máximo de 10 caracteres")
        cadastro.senha.focus()
        return false
    }
}