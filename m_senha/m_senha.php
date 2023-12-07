<?php
header('content-Type: application/json');
include '../../poss/verif.php';
$opsao=$_GET['opsao0'];





if($opsao=="Senha"){

    $valor=$_GET['senha0'];
    $id=$_GET['ID'];

    if($opsao=="Senha"){

        update($opsao,$valor,$id);
    }
}











?>