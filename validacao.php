<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Telecall</title>
            <link rel="stylesheet" href="vali.css" type="text/css">
            <?php

                include "poss/conectPDO.php";

                include "poss/verif.php";

                session_start();
                $inf=$_SESSION['validade'];
                $ID=$inf[1];
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
                        //echo("</br>".$sort);
                        //print_r( $result1 );
                    $resp=$result1[$sort];

                    $res=$_GET['entrada'];
                    
                        //verificaçao de resposta 
                    if($resp==$res and $res != null){

                        validar_entrada02($ID);

                    }else{
                        $_SESSION['validade']="off";

                        //header("location: index.html");
                        //die();
                    }


                }else{
                    //header("location: index.html");
                    //die();
                }



            ?>
            
           
        </head>


        <body>

            
            <img class="image_log" src="fotos/outros/logo-hdr.png" alt="logo">

            <main class="sel_vali">
                <h3>Validar entrada</h3>
                <p class="erro" id="msg_erro"></p>

                <section class="div_input">

                    <form class="login" action="validacao.php" method="get">
                        <label for="entrada">escreva o seu <?php echo($sort); ?> </label>

                        <input type="text" class="entra" name="entrada"></br></br>

                        <section class="button">
                            <input type="submit" value="enviar" id="enviar" class="cass">
                            <input type="reset" value="canselar" class="cass">
                        </section>
                    </form>
                </section>




            </main>
        </body>
    </html>