<?php

require_once 'connection.php';

$codigo = $_GET["codigo"];

$sql = "DELETE FROM todos WHERE codigo = '".$codigo."'";

if ( mysqli_query( $connection, $sql ) )
{
	echo json_encode(
		array(
			"status" => "sucesso",
			"body" => "apagado"
		)
	);
}
else
{

	echo json_encode(
		array(
				"status" => "falha",
				"body" => "falha ao apagar"
			)
	);
}