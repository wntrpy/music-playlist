<?php
header('Content-Type: application/json');
include('connection.php');

$sql = "SELECT musicId, title, artist FROM music";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>
