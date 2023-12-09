<?php
//arquivo pro_pross.php
    include '../../../poss/verif.php';

    header('content-Type: application/json');

    $pesquisa=$_GET['pesquisaBD'];
    $pesquisa2=$_GET['pesquisaBD2'];

    pesquisa($pesquisa,$pesquisa2);

?>