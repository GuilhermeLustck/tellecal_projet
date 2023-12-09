

<?php
    
    require_once '../../../../vendor/autoload.php';

    use Dompdf\Dompdf;
    
    $dompdf = new Dompdf();

    $html = file_get_contents('PDF.php');

    $dompdf->loadHtml($html);

    $dompdf->setPaper('A4', 'landscape',false);

    $dompdf->render();

    header('content-Type:application/pdf');

    echo $dompdf->output();

    //$dompdf->stream("Banco_de_Dados.pdf");


?>