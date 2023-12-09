<?php

//header('content-Type: application/json');

//include '2FA.php';
include '../poss/verif.php';
include "../poss/conectPDO.php";


session_start();
$inf=$_SESSION['validade'];
$ID=$inf[1];
$res=$_POST["sort"];
$resp=$_POST["resp"];

    //pegar os valores para a verificação
    $sql=$CONECT->prepare("SELECT Nome_materno,DTnasc,CPF FROM principal WHERE ID = :id");
    $sql->bindvalue(":id",$inf[1],PDO::PARAM_INT);
    $sql->execute();
    $result=$sql->fetch(PDO::FETCH_ASSOC);

    $result1=[
        "Nome materno"=>$result['Nome_materno'],
        "Data de naiscimento"=>$result['DTnasc'],
        "CPF"=>$result['CPF']
    ];

    //echo json_encode($result1);

if($result1[$resp]==$res){

    //echo json_encode("FOI");

    validar_entrada02($ID);

}else{

    //echo json_encode($res);

    $inf=$_SESSION['validade']="off";
    echo json_encode($inf);
    
    
}






?>