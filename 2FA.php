<?php

include "../poss/conectPDO.php";

include "../poss/verif.php";

session_start();
$inf=$_SESSION['validade'];
$ID=$inf[1];


//echo json_encode($inf,$ID);





if($inf[0]=="ON"){
    
        //pegar os valores para a verificação
    $sql=$CONECT->prepare("SELECT Nome_materno,DTnasc,CPF FROM principal WHERE ID = :id");
    $sql->bindvalue(":id",$inf[1],PDO::PARAM_INT);
    $sql->execute();
    $result=$sql->fetch(PDO::FETCH_ASSOC);
        //passa para um array 
    $result1=[
        "Nome materno"=>$result['Nome_materno'],
        "Data de naiscimento"=>$result['DTnasc'],
        "CPF"=>$result['CPF']
    ];
    
    $sort=array_rand($result1);

    echo json_encode($sort);

    $resp=$result1[$sort];

    
    
    

}else{
    header("location: ../index.html");
    die();
}



















?>