<?php
    $host = "localhost";
    $user = "dbcon";
    $pass = "P@ssw0rd";
    $db = "user";

    $con = new mysqli($host,$user,$pass,$db);
    if(!$con)
    {
        die("Connection failed: " . mysqli_connect_error());
    }

?>