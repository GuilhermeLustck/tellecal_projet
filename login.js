$(document).ready(function(){
  
  $("#enter").click(function(){
    

    

      let senha = $("#senha").val();
      let email = $("#login").val();
      //leva os dados para o servidor para averificação de login
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
          
          alert("<h1>acesso negado</h1>")
          window.location.assign("index.html")
          
        }
      })
    })
})  






//window.location.assign("paginas/cpaas.html");
//netlify
