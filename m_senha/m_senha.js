var id="";
$(document).ready(function(){

    $.ajax({
      url:"http://localhost/Telecallprojet/paginas/conteudo/sessao.php",
      datatype:'json'
    }).done(function(result){
      
      id=result[0];
      $("#info").html("ID: "+" "+ result[0] +" "+ result[1] +" "+ result[2] );
      
  
  
    })
  
  
  
})


$(document).ready(()=>{
    $("#enviar").click(()=>{
        let senha=$("#senha").val()
        let comf_senha=$("#comf_senha").val()
        if(senha==comf_senha){
            let opsao='Senha';
           $.ajax({
                url:'http://localhost/telecallprojet/perfil/m_senha/m_senha.php',
                data:{senha0:senha,opsao0:opsao,ID:id},
                methub:'GET',
                datatype:'json'
           }).done(function(resp){

                
                $("#erro").html(resp)
                alert(resp);
                window.location.assign('../perfil.html')

           })




        }else{
            $("#erro").html("senha não coincide")
        }

    })
})

