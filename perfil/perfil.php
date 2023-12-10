<?php
    //muda o o tipo do documento para json
    header('content-Type: application/json');
    //inclue o arquivo da função no documento
    include '../poss/verif.php';
    
    session_start();

    //pega o id do usuario logado na sessão 
    $id=$_SESSION['indet'][0];

    if($id){
        //busca o usuario no bando de dados
        perfil($id);

    }
    

    

        
        
    

    



?>
