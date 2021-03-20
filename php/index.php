<?php

require_once 'connection.php';

$mensagem = $_POST['fazer'];

$code = mysqli_fetch_assoc(
			mysqli_query( $connection, "SELECT MAX(codigo) FROM todos" )
		)["MAX(codigo)"];

$newCode = 
	intval(
		$code
	) + 1;


$li = "<li data-js='".$newCode."'><p>".$mensagem."</p> <span>-</span> </li>";

$sql = 'INSERT INTO todos (codigo, mensagem) VALUES ("'. $newCode .'", "'. $li .'")';

if ( mysqli_query( $connection, $sql ) )
{
	echo json_encode(
		array(
			"status" => "sucesso",
			"body" => "anotado"
		)
	);
}
else
{

	echo json_encode(
		array(
				"status" => "falha",
				"body" => "falha ao anotar"
			)
	);
}
