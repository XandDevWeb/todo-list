<?php

require_once 'connection.php';

$sql = "SELECT mensagem FROM todos ORDER BY codigo DESC";

$result = mysqli_query( $connection, $sql );

$registers = [];

while ( $register = mysqli_fetch_assoc( $result ) )
{
	$registers[] = $register;
}

echo json_encode( $registers );
