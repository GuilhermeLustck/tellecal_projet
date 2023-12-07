<?php

$dsn = "mysql:host=localhost;dbname=projet_telecall;charset=utf8";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password);
    // Other PDO configurations if needed
} catch (PDOException $e) {
    // Handle connection errors
    echo "Connection failed: " . $e->getMessage();
}

if ($_SERVER["REQUEST_METHOD"]==="POST"){



$pass = $_POST["pass"];
$confpass = $_POST["confpass"];

echo $pass, $confpass;

};



?>