<?php
//arquivo responsavel pela pesquisa de usuarios
    include '../../../poss/verif.php';
    //muda o tipo de arquivo para json
    header('content-Type: application/json');

    $pesquisa=$_GET['pesquisaBD'];
    $pesquisa2=$_GET['pesquisaBD2'];

    pesquisa($pesquisa,$pesquisa2);

?>
