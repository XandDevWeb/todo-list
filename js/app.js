const formulario = document.querySelector("form")
const ul = document.querySelector("ul")

const createAlertDiv = response => {
	const div = document.createElement( "div" )

	div.classList.add( "alert" )
	div.classList.add( response.status )
	div.textContent = response.body

	setTimeout( div.remove(), 1500 )

	document.body.appendChild( div )
}

const getDados = form => {
	const dados = new FormData( form )
		
	const fazer = dados
		.get( 'fazer' )
		.trim()

	const fazerEvazio = fazer === ""

	return fazerEvazio
		? null
		: dados
}

const getLista = async () => {
	const resposta = await fetch( "../php/pesquisa.php" )
		.then( resposta => resposta.json() )

	return resposta
}

const atualizaLista = async () => {
	const resposta = await getLista()

	const novaUlContent = resposta
		.reduce( (acc, {mensagem}) => acc + mensagem, "" )

	ul.innerHTML = novaUlContent
}

const postDados = async dados => {

	const resposta = await fetch
		(
			"../php/index.php",
			{
				method: "POST",
				body: dados
			}
		)
		.then( resposta => {
			return resposta.json()
		})

	return resposta
}

const deleteFazer = async event => {
	const clicouNoSpan = event.target.nodeName === "SPAN"

	if ( clicouNoSpan )
	{
		const codigo = event.target.parentElement.dataset.js

		const resposta = await fetch( `../php/delete.php?codigo=${codigo}` )
			.then( resposta => resposta.json() )

		console.log( resposta.body )

		atualizaLista()
	}
}

const quandoEnviar = async event => {
	event.preventDefault()

	const dados = getDados( event.target )

	const resposta = dados
		? await postDados( dados ).then( resp => resp )
		: false

	console.log( resposta )

	atualizaLista()
	formulario.reset()
}

formulario.addEventListener( "submit", quandoEnviar )
ul.addEventListener( "click", deleteFazer  )
window.addEventListener( "load", atualizaLista )
