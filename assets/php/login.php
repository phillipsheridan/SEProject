<?php
include 'connect.php';

// $postdata = file_get_contents("php://input");
// $request = json_decode($postdata);
// $userName = $request->userName;
// $password = $request->password;



$res = $connection->query("SELECT * FROM User");



if ($res->num_rows > 0) {
    // output data of each row
    while($row = $res->fetch_assoc()) {
        echo "userName: " . $row["username"].  " ";
    }
} else {
    echo "0 results";
}



mysqli_close($connection);

?>
