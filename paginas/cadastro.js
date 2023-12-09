$(document).ready(function () {
  // Evento de envio do formulário
  $("#sair").click(function(){
  window.location.href = "../index.html";
})
  $("#form").submit(function () {
    

    let name =         $("#firstname").val();
    let email =        $("#email").val();
    let senha =        $("#password").val();
    let nameMaterno =  $("#materno").val();
    let endereco =     $("#endereco").val();
    let nascimento =   $("#nascimento").val();
    let sobrenome =    $("#sobrenome").val();
    let celular =      $("#number").val();
    let telefone =     $("#telefone").val();
    let telefoneFixo = $("#telefoneFixo").val();
    let comfirmarSenha=$("#passwordConfirmar").val();
    let CPF =          $("#CPF").val();
    
    
    if (name.length < 5) {
      console.log("O nome precisa ter no mínimo 5 caracteres");
      $("#msg_erro").html("O nome precisa ter no mínimo 5 caracteres")
      return false;
    }
    if (nameMaterno.length < 5) {
      console.log("O nome materno precisa ter no mínimo 5 caracteres");
      $("#msg_erro").html("O nome materno precisa ter no mínimo 5 caracteres")
      
      return false;
    }
    if (senha.length < 6) {
      console.log("A senha precisa ter no mínimo 6 caracteres");
      $("#msg_erro").html("A senha precisa ter no mínimo 6 caracteres")
      return false;
    }
    if (senha !== comfirmarSenha) {
      console.log("A senha e a confirmação de senha não correspondem");
      $("#msg_erro").html("A senha e a confirmação de senha não correspondem")
      return false;
    }

    // Validação do CPF
    if (!validarCPF(CPF)) {
      console.log("CPF inválido");
      $("#msg_erro").html("CPF inválido")
      return false;
    }

    else{
      $("#msg_erro").html("")
      
    }


  });
});

function validarCPF(CPF) {
  CPF = CPF.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

  if (CPF.length !== 11 || /^(.)\1+$/.test(CPF)) {
    return false;
  }

  let sum = 0;
  let rest;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(CPF.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(CPF.substring(9, 10))) {
    return false;
  }

  sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum += parseInt(CPF.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) {
    rest = 0;
  }

  if (rest !== parseInt(CPF.substring(10, 11))) {
    return false;
  }
  
  return true;
  
}

