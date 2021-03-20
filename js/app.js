const formulario = document.querySelector("form")

formulario.addEventListener("submit", event => {
	event.preventDefault()

	const dados = new FormData( formulario )

	fetch("../php/index.php",
	{
		method: "GET",
		body: dados
	})
	.then( resposta => {
		console.log(resposta)
		resposta.json()
	} )
	.then( mensagem => {
		console.log(mensagem)
	} )
})