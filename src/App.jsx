import { useState, useEffect } from "react"
import ContainerCardsAgents from "./ContainerCardsAgents"
import Nav from "./Nav"

function App() {

  // ESTADOS

  const [agents, setAgents] = useState([]) // estado de agentes
  const [error, setError] = useState(false) // estado de error
  const [loading, setLoading] = useState(true) // estado cargando
  const [searchText, setSearchText] = useState('') // estado de barra de busqueda
  

  //FUNCIONES

  function handleSearchText(newText) { // cambiar estado barra de busqueda
    setSearchText(newText)
    console.log(newText);

  }

  // USEEFFECT

  useEffect(() => { // useEffect para el fetch


    fetch('https://valorant-api.com/v1/agents?isPlarayable=true') // hago la peticion a la API
      .then(Response => {
        if (!Response.ok) {
          throw new error('Error en la peticion') // se genera un error en casa que la API no responda de manera exitosa
        }
        return Response.json() // convierto la respuesta a formato json()
      })
      .then(data => {
        setAgents(data.data) // obtengo la data y la guardo en el estado

        setLoading(false) // desactivo el estado cargando
      })
      .catch(error => {
        setError(error) // guardo calquier error que pase
        setLoading(false) // desactivo igual el estado cargando
      })

      

  }, []) // sin dependencias

  // CONDICIONES

  if (loading) { // condicion para mostrar mensaje cargando
    return <p>Cargando agentes de valorant</p>
  }
  if (error) { // condicion para mostrar error
    return <p>Ocurrrio un error: {error.message}</p>
  }

  // RETORNO DEL COMPONENETE APP

  return ( // si todo sale bien esto se ejecuta
    <>
    <div className="flex flex-col justify-center items-center bg-black">
    <Nav searchText={searchText} searchTextFilter={handleSearchText}></Nav>
    <ContainerCardsAgents array={agents} searchText={searchText}></ContainerCardsAgents>
    </div>
      
    </>
  )
}

export default App



