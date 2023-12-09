<?php
    include 'verif.php';
//muda o documento para json
    header('content-Type: application/json');
    
 //pega os dados do javascript

    $Email=$_POST['nome_login'];
    $Senha=$_POST['senha_login'];
    
 //chama a função para validar a entrada
    validar_entrada($Email,$Senha);
?>