var lam=""
$(document).ready(function(){

    $.ajax({
        url:'http://localhost/Telecallprojet/2FA/2FA.php',
        dataType:'json'
    }).done(function(result){
        lam=result
        $("#sort").html(result);
        

    })
})



$(document).ready(function(){
    
    $("#enviar").click(function(){
       
        

        var sort=$("#resposta").val();
        //document.write("<h1>"+sort+"</h1>");

        

        $.ajax({
            url:'http://localhost/Telecallprojet/2FA/2FASecond.php',
            data:{ sort:sort,resp:lam },
            method:'POST',
            dataType:'json'
            
    
    
    
        }).done(function(result){
            
            
            console.log(result);
            document.write(result);
            if(result=="off"){

                document.write("off");
                window.location.assign("index.html");

            }else if(result=="comum"){

                document.write("comum");
                window.location.replace("paginas/conteudo/cpaas.html");

            }else if(result=="Master"){

                document.write("Master");
                window.location.replace("paginas/conteudo/privado/privado.html");

            }

        })






    })

})






