<?php
//muda do tipo de documento para json
header('content-Type: application/json');
include '../../poss/verif.php';

$opsao=$_GET['opsao0'];




//verifica o que vai ser mudado
if($opsao=="Senha"){

    $valor=$_GET['senha0'];
    $id=$_GET['ID'];

    

    update($opsao,$valor,$id);
    
}











?>
