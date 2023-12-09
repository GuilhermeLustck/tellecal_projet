<?php
    include 'verif.php';

//recebe os dados do html e insere na variavel

     $Nome       =  $_POST["firstname"];
     $sobrenome  =  $_POST["sobrenome"];
     $Email      =  $_POST["email"];
     $Celular    =  $_POST["number"];
     $Telefone   =  $_POST["telefone"];
     $Tel_fixo   =  $_POST["telefoneFixo"];
     $Senha      =  $_POST["password"];
     $Nome_materno =$_POST["materno"];
     $Ender      =  $_POST["endereco"];
     $CPF        =  $_POST["CPF"];
     $DTnasc     =  $_POST["nascimento"];

    


//joga as variáveis na função para inserir no banco de dados

    inserir($Nome,$sobrenome,$Email,$Celular,$Telefone,$Tel_fixo,$Senha,$Nome_materno,$Ender,$CPF,$DTnasc);


?>