<?php
include 'connect.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$userName = $request->userName;
$password = $request->password;



$res = $connection->query("INSERT INTO User (username, password) VALUES ('$userName', '$password')");



mysqli_close($connection);

?>
