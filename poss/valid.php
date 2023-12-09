<?php
    include 'verif.php';
    header('content-Type: application/json');
    
    
    $Email=$_POST['nome_login'];
    $Senha=$_POST['senha_login'];
    
    
    validar_entrada($Email,$Senha);
?>