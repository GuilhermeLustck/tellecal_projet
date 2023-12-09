      <?PHP

        
  //função que lista o Banco de dados
        function lista_BD(){
            
            include 'conectPDO.php';

            header('content-Type: application/json');

            $SQLI=$CONECT->prepare("SELECT * FROM principal");
            $SQLI->execute();
            $result=$SQLI->fetchALL(PDO::FETCH_ASSOC);
            echo json_encode([$result]); 

        }

        function PDF(){
            
            include 'conectPDO.php';
    


            $HTML="<thead>
            <tr>
                <th>id</th>
                <th>Nome </th>
                <th>sobrenome </th>
                <th>Email </th>
                <th>Celualar </th>
                <th>Telefone </th>
                <th>Tel_fixo </th>
                <th>Nome Materno </th>
                <th>Endereço </th>
                <th>CPF</th>
                <th>Data de Nascimento </th>
                <th>Sexo </th>
                <th>cargo </th>
            </tr>
            
            </thead>
            <tbody>";

            $HTML.="";

            $SQLI=$CONECT->prepare("SELECT * FROM principal");
            $SQLI->execute();
            $result=$SQLI->fetchALL(PDO::FETCH_ASSOC);

            for( $i=0 ; count($result) > $i ; $i++ ){


                echo("<tr>");

                $HTML.=("<th>".$result[$i]["ID"]."</th>");
                $HTML.=("<th>".$result[$i]['Nome']." </th>");
                $HTML.=("<th>".$result[$i]['Sobrenome']." </th>");
                $HTML.=("<th>".$result[$i]['Email']." </th>");
                $HTML.=("<th>".$result[$i]['Celular']." </th>");
                $HTML.=("<th>".$result[$i]['Telefone']." </th>");
                $HTML.=("<th>".$result[$i]['Tel_fixo']." </th>");
                $HTML.=("<th>".$result[$i]['Nome_materno']." </th>");
                $HTML.=("<th>".$result[$i]['Ender']." </th>");
                $HTML.=("<th>".$result[$i]['CPF']." </th>");
                $HTML.=("<th>".$result[$i]['DTnasc']." </th>");
                $HTML.=("<th>".$result[$i]['Sexo']." </th>");
                $HTML.=("<th>".$result[$i]['cargo']." </th>");

                $HTML.=("</tr>");

                $HTML.=("</br> </br> ");
                $html .= '</tbody></table></body></html>';
                require_once '../../../../vendor/autoload.php';

                
                
                //$dompdf = new Dompdf();

                $html = file_get_contents('PDF.php');

                $dompdf->loadHtml($html);

                $dompdf->setPaper('A4', 'landscape',false);

                $dompdf->render();

                header('content-Type:application/pdf');

                echo $dompdf->output();

            }

                
    
        }
        function validar_entrada02($ID){
            include 'conectPDO.php';
            //array_rand();
            //header('content-Type: application/json');
            //session_start();

            $SQLI = $CONECT-> prepare("SELECT * FROM principal where ID=:id;");
            $SQLI-> bindValue(":id",$ID ,PDO::PARAM_INT);
            $SQLI->execute();

            $result=$SQLI->fetch(PDO::FETCH_ASSOC);
            $val_cargo=$result;

            if($val_cargo ['cargo'] == 'master'){

                $_SESSION['indet']= 
                array( 
                    $val_cargo ['ID'] , $val_cargo ['Nome'] ,$val_cargo ['Sobrenome'],$val_cargo ['cargo']
                );
                echo json_encode("Master");
                //header("location: ../paginas/conteudo/privado/privado.html");
                //die();
            }elseif($val_cargo ['cargo'] == 'comum'){
                $_SESSION['indet']= 
                array( 
                    $val_cargo ['ID'] , $val_cargo ['Nome'] ,$val_cargo ['Sobrenome'],$val_cargo ['cargo']
                );
                echo json_encode("comum");
                //header("location: ../paginas/conteudo/cpaas.html");
                //die();
            }




            
        }
        function validar_entrada($Email,$Senha){
            include 'conectPDO.php';
            //array_rand();

            session_start();
            

            $SQLI = $CONECT-> prepare("SELECT * FROM principal where Email=:email and Senha=:senha;");
            $SQLI-> bindValue(":email",$Email,PDO::PARAM_STR);
            $SQLI-> bindValue(":senha",$Senha,PDO::PARAM_STR);
            $SQLI-> execute();

            $result=$SQLI->fetch(PDO::FETCH_ASSOC);
            
            
            if($result){
                $_SESSION['validade']=array( "ON", $result['ID'] );
                echo json_encode("on");
                
            }else{


                $_SESSION['validade']= "off";
                echo json_encode("off");
                
                
            }
            
        }
        function indet(){
            header('content-Type: application/json');
            session_start();

            if($info = $_SESSION['indet']){

                echo json_encode($info);

            }else{

                header("location: ../index.html");
            }
            
            


        }
        
        function pesquisa($pesquisa,$pesquisa2){
            include 'conectPDO.php';

            header('content-Type: application/json');
            $query=" ";
            switch($pesquisa2){
                case "Nome":
                    $query="SELECT * FROM principal WHERE Nome = :pesquisa";
                    break;
                case "ID":
                    $query="SELECT * FROM principal WHERE ID = :pesquisa";
                    break;
                case "cargo":
                    $query="SELECT * FROM principal WHERE cargo = :pesquisa";
                    break;
                case "Ender":
                    $query="SELECT * FROM principal WHERE Ender = :pesquisa";
                    break;

            }
            if(!empty($query)){
                $SQLI=$CONECT->prepare($query);
                $SQLI->bindvalue(':pesquisa', $pesquisa , PDO::PARAM_STR);
                $SQLI->execute(); 

                $result=$SQLI->fetchALL(PDO::FETCH_ASSOC);

                if($result){
                    echo json_encode([$result]);    
                }elseif(!$result){
                    echo json_encode(["message" => "Não encontrado"]);
                
                }

            }else{
                echo(json_encode( ["mensagem" => "consulta invalida"] ));
            }

        }
        function inserir($Nome,$sobrenome,$Email,$Celular,$Telefone,$Tel_fixo,$Senha,$Nome_materno,$Ender,$CPF,$DTnasc){
            include 'conectPDO.php';
            
            $SQL=$CONECT->prepare("SELECT * from principal WHERE Email = :Email and CPF = :CPF");
            $SQL->bindvalue(':Email',$Email,PDO::PARAM_STR);
            $SQL->bindvalue(':CPF',$CPF,PDO::PARAM_STR);
            $SQL->execute();
            
            $result=$SQL->fetchALL(PDO::FETCH_ASSOC);
            
            


            if(!$result){

                $SQLI=$CONECT->prepare("INSERT into principal(Nome,Sobrenome,Email,Celular,Telefone,Tel_fixo,Senha,Nome_materno,Ender,CPF,DTnasc,Sexo)
                VALUES(:Nome,:Sobrenome,:Email,:Celular,:Telefone,:Tel_fixo,:Senha,:Nome_materno,:Ender,:CPF,:DTnasc,:Sexo)");
                $SQLI->bindvalue(':Nome' , $Nome , PDO::PARAM_STR);
                $SQLI->bindvalue(':Sobrenome' , $sobrenome , PDO::PARAM_STR);
                $SQLI->bindvalue(':Email' , $Email , PDO::PARAM_STR);
                $SQLI->bindvalue(':Celular' , $Celular , PDO::PARAM_STR);
                $SQLI->bindvalue(':Telefone' , $Telefone , PDO::PARAM_STR);
                $SQLI->bindvalue(':Tel_fixo' , $Tel_fixo , PDO::PARAM_STR);
                $SQLI->bindvalue(':Senha' , $Senha , PDO::PARAM_STR);
                $SQLI->bindvalue(':Nome_materno' , $Nome_materno , PDO::PARAM_STR);
                $SQLI->bindvalue(':Ender' , $Ender , PDO::PARAM_STR);
                $SQLI->bindvalue(':CPF' , $CPF , PDO::PARAM_STR);
                $SQLI->bindvalue(':DTnasc' , $DTnasc , PDO::PARAM_STR);
                //$SQLI->bindvalue(':Sexo' , $Sexo , PDO::PARAM_STR);
                $result=$SQLI->execute();

                if($result){
                    echo("<h1>foi</h1>");
                    return 'on';
                }else{
                    echo("<h1>não foi</h1>");
                    return 'off';
                }

                

            }else{
                echo("<h1>duplicado</h1>");
                return 'off';
            }



        }

        function perfil($id){

            include 'conectPDO.php';
            header('content-Type: application/json');

            $SQLI=$CONECT->prepare( " SELECT * FROM principal WHERE ID = :ident" );
            $SQLI->bindvalue( ":ident" , $id , PDO::PARAM_INT);
            $SQLI->execute();

            $result=$SQLI->fetch(PDO::FETCH_ASSOC);
            


            if($result){
                
                echo json_encode($result);

            }

        }

        function delite($id){
            include 'conectPDO.php';
            $SQLI=$CONECT->prepare("DELETE FROM principal WHERE ID=:id");
            $SQLI->bindvalue(":id",$id,PDO::PARAM_INT);
            $SQLI->execute();

            if(!$SQLI){
                echo json_encode("fala ao deletar");
            }else{
                echo json_encode("deletado");
            }

        }
        function sair(){
            
            session_start();


            $_SESSION['validade']=null;

            $_SESSION['indet']=null;



            session_destroy();
            

            



        }
        function update($opsao,$valor,$id){

            include 'conectPDO.php';

            $query="";

            switch($opsao){
                case "cargo": 
                    $query="UPDATE  principal SET cargo = :valor WHERE ID=:id";
                break;
                case "Senha":
                    $query="UPDATE principal SET Senha = :valor WHERE ID=:id";
                break;
                case "Email":
                    $query="UPDATE principal SET Email = :valor WHERE ID=:id";
                break;
                case "Celular":
                    $query="UPDATE principal SET Celular = :valor WHERE ID=:id";
                break;
            }

            if(!empty($query)){
                $SQLI=$CONECT->prepare($query);
                $SQLI->bindvalue( ":valor" , $valor , PDO::PARAM_STR );
                $SQLI->bindvalue( ":id" , $id , PDO::PARAM_INT );

                $SQLI->execute();
                

                if(!$SQLI){

                    echo json_encode("Não Foi Alterado o ".$opsao);

                }else{

                    echo json_encode("foi Alterado");

                }
            

            }else{

                echo("Não Encontrado");

            }
           
        }

        

        
?>