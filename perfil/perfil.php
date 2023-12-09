<?php
    header('content-Type: application/json');

    include '../poss/verif.php';
    
    session_start();

    
    $id=$_SESSION['indet'][0];

    if($id){

        perfil($id);

    }
    

    

        
        
    

    



?>