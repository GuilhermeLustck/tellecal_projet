
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



$(document).ready(function(){

  $.ajax({
    url:"http://localhost/Telecallprojet/paginas/conteudo/sessao.php",
    datatype:'json'
  }).done(function(result){

    $("#info").html("ID: "+" "+ result[0] +" "+ result[1] +" "+ result[2] )
    

    console.log("ID:"," ", result[0] ," ", result[1] ," ", result[2]);





  })



})
 



$(document).ready(function(){
  $("#sair").click(function(){
    
    console.log('sair');
    window.location.assign("logout.php");

  })
})



//nav-list

 



