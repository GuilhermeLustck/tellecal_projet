
var dire=''

$(document).ready(function(){

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

    
    if(dire=='master'){

      window.location.assign('../paginas/conteudo/privado/privado.html')

    }else if(dire=='comum'){
      
      window.location.assign('../paginas/conteudo/cpaas.html')

    }
  })
})


// ../paginas/conteudo/cpaas.html


$(document).ready(function(){

    
    //document.write("foi")
   

    $.ajax({

        url: "http://localhost/Telecallprojet/perfil/perfil.php",
        dataType:'json'

    }).done(function(result){

        if(result){

          console.log(result);
          //document.write(result)






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

$(document).ready(function(){
  $("#Senha_button").click(()=>{
    window.location.assign("m_senha/mudarsenha.html");
  })
})

