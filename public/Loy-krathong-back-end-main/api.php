<?php
include "dbConn.php";
$respond = array();
if($con)
    {
    $sql = "SELECT * from user";
    $result = mysqli_query($con,$sql);
    if($result)
        {
        header("Content-Type: JSON");
        $x = 0;
        while($row = mysqli_fetch_assoc($result))
            {
            $respond[$x]['name'] = $row['name'];
            $respond[$x]['wish'] = $row['wish'];
            $respond[$x]['time'] = $row['time'];
            $x++;
            }
        echo json_encode($respond, JSON_PRETTY_PRINT);
        }
    }

?>