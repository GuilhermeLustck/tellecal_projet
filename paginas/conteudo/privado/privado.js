
$(document).ready(() => {
    const darkmode = localStorage.getItem('darkmode') ?? 'light'
    const body = $('body')
    const checkbox = $("#chk")
  
    if (darkmode !== 'light') {
      body.addClass('dark')
      checkbox.attr('checked', true)
    }
    
    checkbox.on('change', () => {
      body.toggleClass('dark')
      
      if (body.hasClass('dark')) localStorage.setItem('darkmode', 'dark')
      else localStorage.setItem('darkmode', 'light')
    })
})
$(document).ready(()=>{
  //document.write("<button class='cargo' >teste</button>");
  $("#enviar").click(()=>{

    var pesquisa = $("#pesq").val();
    var pesquisa2 = $("#selecao").val();

    

    console.log(pesquisa,pesquisa2);

    $.ajax({
      url:'http://localhost/telecallprojet/paginas/conteudo/privado/pri_pross.php',
      method:'GET',
      data:{pesquisaBD: pesquisa , pesquisaBD2: pesquisa2},
      dataType:'json'
      
    }).done(function(result){
      
      lista=result;
      if( result.length == 1 ){

        $("#pesq").val(" ");
        $("#result").html("");
        $("#pesquisa").html(" ");

        for( var i=0; i < result[0].length ; i++ ){
            $("#pesquisa").prepend("<tr> class='tabela' id='sai'><td>"+ result[0] [i].ID +"</td><td>"+ result[0] [i].Nome +"</td><td>"+ result[0] [i].Sobrenome +"</td><td> "+result[0] [i].CPF +"</td><td> "+result[0] [i].Telefone +"</td><td> "+ result[0] [i].Email +"</td><td>"+result[0] [i].Ender +"</td><td> "+result[0] [i].DTnasc +"</td><td> "+result[0] [i].Sexo +"</td> <td> "+result[0] [i].cargo +" </td> </tr></br>");
            //"<button class='cargo' value="+  result [0] [i].ID + " > "+result[0] [i].cargo +"</button>"
          
        
        }

      }else{
        $("#pesquisa").html(" ");
        $("#sai").html(" ");
        console.log("Não Encotrado");
        $("#result").html("<p>Não Encotrado</p>");
      }

    });
  })

});
$(document).ready(()=>{
  $("#enviar_cargo").click(function(){

    let id1=$("#cargo").val();
    let opsao1="cargo";
    
    $.ajax({
      url:'http://localhost/telecallprojet/paginas/conteudo/privado/proce/mud_cargo.php',
      method:'POST',
      data:{ opsao:opsao1 , id:id1 },
      dataType:'json'
    }).done(function(resp){

      console.log(resp);
      if(resp){
        $("#mens").html(resp)
      }







    })

    
  })



})
$(document).ready(function(){
  //listagem

    $.ajax({
      url:'http://localhost/telecallprojet/paginas/conteudo/privado/list.php',
      dataType:'json'
    }).done(function(result){
      for( var i=0; i < result[0].length ; i++ ){
        $("#BD").prepend("<tr> class=tabela id=sai><td>  "+  result [0] [i].ID + "</td><td>"+ result[0] [i].Nome +"  </td><td>"+ result[0] [i].Sobrenome +"</td><td> "+result[0] [i].CPF +"</td><td> "+result[0] [i].Telefone +"</td><td> "+ result[0] [i].Email +"</td><td>"+result[0] [i].Ender +"</td><td> "+result[0] [i].DTnasc +"</td><td> "+result[0] [i].Sexo +"</td><td> "+result[0] [i].cargo +"</td> </tr> </br>");
      }
    })
})
$(document).ready(function(){
  //sessao
  $.ajax({
    url:"http://localhost/Telecallprojet/paginas/conteudo/sessao.php",
    datatype:'json'
  }).done(function(result){

    $("#info").html("ID: "+" "+ result[0] +" "+ result[1] +" "+ result[2] )
    //$("#info").html(result)

    console.log("ID:"," ", result[0] ," ", result[1] ," ", result[2]);





  })



})
$(document).ready(function(){
  $("#sair").click(function(){
    
    console.log('sair');
    window.location.replace("../logout.php");

  })
})


/*$(document).ready(()=>{
  $("#pdf").click(()=>{
    
    window.location.replace('pdf/PDF.php');
  })
})*/
  //$(".table").prepend("<tr class=tabela><td>"+ result[0] [i].ID +"</td><td>"+ result[0] [i].Nome +"</td><td>"+ result [i].Sobrenome +"</td><td> "+result [i].CPF +"</td><td> "+result [i].Telefone +"</td><td> "+ result [i].Email +"</td><td>"+result [i].Ender +"</td><td> "+result [i].DTnasc +"</td><td> "+result [i].Sexo +"</td><td> "+result [i].cargo +"</td> </tr> </br>");
  