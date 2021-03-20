<?php

require_once 'connection.php';

$mensagem = $_GET['mensagem'];

$sql = "INSERT INTO todos (mensagem) VALUES ('". $mensagem ."');";

if ( mysqli_query( $connection, $sql ) )
{
	echo json_encode( array("status" => "sucesso") );
}
else
{
	echo json_encode( "falha" );
}
