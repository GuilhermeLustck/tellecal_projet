<?php
    //arquivo responsavel pela saida do usuario master
    header('content-Type: application/json');
    include '../../../../poss/verif.php';
    
    $res=$_POST["proce"];

    if($res=="sair"){
        sair();
        echo json_encode("off");
    }




?>
