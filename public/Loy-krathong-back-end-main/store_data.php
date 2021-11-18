<?php
    include "dbConn.php";

    $name = $_POST["name"];
    $wish = $_POST["wish"];
    
    $qry = "INSERT INTO `user`(`name`, `wish`) VALUES ('$name','$wish')";
    $insert = mysqli_query($con,$qry);
    
//    header('location: main.php');
?>