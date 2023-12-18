<?php
    $servername = "localhost:3307";
    $username = "root";
    $password = "";
    $dbname = "assignment";
    $conn = new mysqli($servername,$username,$password,$dbname);
    $Email = $_POST['InputEmail'];
    $Mobileno = $_POST['mobileno'];
    $Age = $_POST['age'];
    $Slot = $_POST['slot'];
    if($conn->connect_error) {
        die("Connection failed: ".$conn->connect_error);
    }
    $qry = "INSERT INTO `user_details`(`Email`, `Mobileno`, `Age`, `Slot`) VALUES ('$Email','$Mobileno','$Age','$Slot')";
    if($conn->query($qry) === TRUE) {
        echo "New record inserted successfully!";
    }
    else{
        echo "Error: ". $qry . "<br>" . $conn->error;
    }
?>