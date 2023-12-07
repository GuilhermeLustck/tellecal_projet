$(document).ready(function(){
  
  $("#enter").click(function(){
    

    

      let senha = $("#senha").val();
      let email = $("#login").val();
      
      $.ajax({
        url:'http://localhost/Telecallprojet/poss/valid.php',
        data:{ nome_login:email , senha_login:senha },
        method:'POST',
        dataType:'json'

      }).done(function(res){
        
        if(res=="on"){
          
          document.write("<h1>foi</h1>")
          
          window.location.assign("validacao.html")

        }else if(res=="off"){
          
          document.write("<h1>acesso negado</h1>")
          window.location.assign("index.html")
          
        }
      })
    })
})  



$(document).ready(function(){
  $.ajax({
    url:'paginas/conteudo/sessao.php',
    datatype:'json'
  })
})



//window.location.assign("paginas/cpaas.html");
//netlify