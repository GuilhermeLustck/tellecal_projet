<?php

    include_once ('../../../../poss/conectPDO.php');
    include '../../../../poss/verif.php';
    

    $id=$_POST["id"];
    $opsao=$_POST["opsao"];

    $SQL=$CONECT->prepare("SELECT cargo FROM principal WHERE ID=:id");
    $SQL->bindvalue(":id",$id,PDO::PARAM_INT);
    $SQL->execute();
    $res=$SQL->fetch(PDO::FETCH_ASSOC);

    
    
    
    if($res["cargo"]=="comum"){

        $valor="master";
        update($opsao,$valor,$id);


    }elseif($res["cargo"]=="master"){

        $valor="comum";
        update($opsao,$valor,$id);

    }elseif($res["cargo"]==null){

        $valor="comum";
        update($opsao,$valor,$id);

    }
    //update($opsao,$valor,$id);

?>