<?php
$servername = "localhost";
$database = "calculator";
$username = "root";
$password = "Tchessivi17My198SQL*";

// Create  connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";

if (is_ajax()) {
if (isset($_POST["action"]) && !empty($_POST["action"])) {
$sql =
"INSERT INTO historical (id, operation, total) VALUES ( DEFAULT,'" . $_POST["operation"] . "','" . $_POST["total"] . "')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$req = "SELECT * FROM historical";

$result = mysqli_query($conn, $req);

$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
printf("%s (%s)\n", $row["operation"], $row["total"]);

mysqli_free_result($result);

// print_r($row);

$infos = json_encode($row);
// print_r($infos);
}
}
mysqli_close($conn);

function is_ajax()
{
      return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
