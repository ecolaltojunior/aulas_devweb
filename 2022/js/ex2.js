function validar(){
    let cpf = cadastro.cpf.value 
    let senha = cadastro.senha.value
    let confirm = cadastro.confirm.value

    if(cpf.length != 11){
        alert("CPF inválido")
        cadastro.cpf.focus()
        return false
    }
    if(isNaN(cpf)){
        alert("Informe apenas números para o campo CPF")
        cadastro.cpf.focus()
        return false
    }

    if(senha != confirm){
        alert("Senhas não conferem")
        cadastro.confirm.focus()
        return false
    }

    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/

    //(?=.*[A-Z]) - mínimo uma letra maiúscula
    //(?=.*?[a-z]) - mínimo uma letra minúscula
    //(?=.*?[0-9]) - mínimo um número
    //(?=.*?[^\w\s]) - mínimo um caractere especial
    //.{6,10} - mínimo 6 e máximo 10 caracteres

    if(!regex.exec(senha)){
        alert("A senha deve conter no mínimo uma letra maiúscula, uma letra minúscula, um número, um caractere especial, mínimo 6 e máximo 10 caracteres")
        cadastro.senha.focus()
        return false
    }
}