<?php
    include 'verif.php';

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

    



    inserir($Nome,$sobrenome,$Email,$Celular,$Telefone,$Tel_fixo,$Senha,$Nome_materno,$Ender,$CPF,$DTnasc);


?>