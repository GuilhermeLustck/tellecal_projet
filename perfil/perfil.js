//variavel responsavel de armazenar o cargo do usuario
var dire=''

$(document).ready(function(){
  //consulta ao servidor onde o retorno deve ser em formato json
  $.ajax({
    url:"http://localhost/Telecallprojet/paginas/conteudo/sessao.php",
    datatype:'json'
  }).done(function(result){
    
    id=result[0];
    $("#info").html("ID: "+" "+ result[0] +" "+ result[1] +" "+ result[2] )
    //console.log("ID:"," ", result[0] ," ", result[1] ," ", result[2]);
    dire=result[3];

  })



})



$(document).ready(()=>{
  $("#voltar").click(()=>{

    //verifica aonde o usuario ira retornar dependendo do cargo do mesmo
    if(dire=='master'){

      window.location.assign('../paginas/conteudo/privado/privado.html')

    }else if(dire=='comum'){
      
      window.location.assign('../paginas/conteudo/cpaas.html')

    }
  })
})


// ../paginas/conteudo/cpaas.html


$(document).ready(function(){
    //consulta o servidor pelo perfil do usuario
    $.ajax({

        url: "http://localhost/Telecallprojet/perfil/perfil.php",
        dataType:'json'

    }).done(function(result){
        //verificando se a retorno do servidor
        if(result){
        
          console.log(result);
          





          //realocação dos dados do usuario
          $("#Nome").html(result.Nome);
          $("#sobrenome").html(result.Sobrenome);
          $("#Email").html(result.Email);
          $("#Senha").html(result.Senha);
          $("#Nome_materno").html(result);
          $("#celular").html(result.Celular);
          $("#telefone").html(result.Telefone);
          $("#fixo").html(result.Tel_fixo);
          $("#Ender").html(result.Ender);
          $("#CPF").html(result.CPF);
          $("#DTnaic").html(result.DTnasc);
          $("#Sexo").html(result.Sexo);






        }
    })

})
//redirecionamento para troca de senha
$(document).ready(function(){
  $("#Senha_button").click(()=>{
    window.location.assign("m_senha/mudarsenha.html");
  })
})

