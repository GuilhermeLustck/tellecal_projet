var id="";

$(document).ready(function(){
    //consulta o servidor
    $.ajax({
      url:"http://localhost/Telecallprojet/paginas/conteudo/sessao.php",
      datatype:'json'
    }).done(function(result){
      
      id=result[0];
        //retorno do servidor e a realocação doa dados para seus lugares
      $("#info").html("ID: "+" "+ result[0] +" "+ result[1] +" "+ result[2] );
      
  
  
    })
  
  
  
})

//mudança de senha
$(document).ready(()=>{
    $("#enviar").click(()=>{
        //pega os valores na senha e no comfirma senha
        let senha=$("#senha").val()
        let comf_senha=$("#comf_senha").val()
        //verifica se ambas são identicas
        if(senha==comf_senha){
            
            let opsao='Senha';
            //manda para o servidor em GET e em formato json os dados necessário
           $.ajax({
                url:'http://localhost/telecallprojet/perfil/m_senha/m_senha.php',
                data:{senha0:senha,opsao0:opsao,ID:id},
                methub:'GET',
                datatype:'json'
           }).done(function(resp){

                //retorno do servido e a volta para apagina de perfil
                $("#erro").html(resp)
                alert(resp);
                window.location.assign('../perfil.html')

           })




        }else{
            $("#erro").html("Senha não coincide")
        }

    })
})

