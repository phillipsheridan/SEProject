<?php
// Connects to Our Database
$host='localhost';
$user='root';
$password='12345678';
$database = 'SE';

error_log("in connect.php", 0);

$connection = mysqli_connect($host,$user,$password);

if(!$connection){
  die('Connection Failed');
  error_log("Failed to connect to database!", 0);
}
else{
  $dbconnect = mysqli_select_db($connection,$database);

  if(!$dbconnect){
    error_log("Failed to connect to database!", 0);
    die('Could not connect to Database');
  }
}

?>
