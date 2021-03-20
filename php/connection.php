<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "todo-list";

$connection = mysqli_connect( $host, $user, $pass, $db );

if ( $connection->error )
{
	echo die( "Falha".$connection->error() );
}