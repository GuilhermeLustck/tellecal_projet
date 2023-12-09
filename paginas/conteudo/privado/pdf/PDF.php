<?php
use Dompdf\Dompdf;

    
    include '../../../../poss/conectPDO.php';



    $HTML="<html>
    <head>
        <style>
            /* Estilos CSS para o PDF podem ser adicionados aqui */
        </style>
    </head>
    <body>
        <table border='1'> 
        <thead>
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

    

    $SQLI=$CONECT->prepare("SELECT * FROM principal");
    $SQLI->execute();
    $result=$SQLI->fetchALL(PDO::FETCH_ASSOC);

    foreach ($result as $row){


        $HTML.=("<tr>");

        $HTML.="<td>".$row["ID"]."</td>";
        $HTML.="<td>".$row['Nome']." </td>";
        $HTML.="<td>".$row['Sobrenome']." </td>";
        $HTML.="<td>".$row['Email']." </td>";
        $HTML.="<td>".$row['Celular']." </td>";
        $HTML.="<td>".$row['Telefone']." </td>";
        $HTML.="<td>".$row['Tel_fixo']." </td>";
        $HTML.="<td>".$row['Nome_materno']." </td>";
        $HTML.="<td>".$row['Ender']." </td>";
        $HTML.="<td>".$row['CPF']." </td>";
        $HTML.="<td>".$row['DTnasc']." </td>";
        $HTML.="<td>".$row['Sexo']." </td>";
        $HTML.="<td>".$row['cargo']." </td>";

        $HTML.=("</tr>");

        
    }
        $html .= '</tbody></table></body></html>';
        require_once '../../../../vendor/autoload.php';

        
        
        $dompdf = new Dompdf();

        $dompdf->loadHtml($HTML);

        $dompdf->setPaper('A4', 'landscape');

        $dompdf->render();

        header('content-Type:application/pdf');

        echo $dompdf->output();
 



?>
