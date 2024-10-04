import { useEffect, useState } from "react"
import CardAgents from "./CardAgents"
import Roles from "./Roles"
import Modal from "./Modal"

function ContainerCardsAgents({ array, searchText }) {

  //                  ESTADOS

  const [filteredAgents, setFilteredAgents] = useState([]) // agentes filtrados
  const [roles, setRoles] = useState([]) // roles     
  const [selectRoles, setSelectRoles] = useState([]) // roles seleccionados
  const [equipo, setEquipo] = useState([]) // equipo de max 5 modal
  const [isOpenModal, setIsOpenModal] = useState(false) // abrir o cerrar mdoal

  //                  USEEFFECT

  useEffect(() => {
    localStorage.setItem('equipo', JSON.stringify(equipo))
    console.log(equipo);

  }, [equipo])

  useEffect(() => { // useEffect para obtener todos los roles y los agentes del localStore

    const setRols = [... new Set(array.map((agent) => agent.role?.displayName).filter(Boolean))]

    setRoles(setRols)
     
    const agentsFavorites = JSON.parse(localStorage.getItem('equipo')) || []
    setEquipo(agentsFavorites)
    console.log(agentsFavorites);
    

  }, [])

  useEffect(() => { // useEffect para filtrado de agentes
    const filtered = array.filter(agent => {

      // Filtra por texto
      const matchesSearch = agent.displayName.toLowerCase().includes(searchText.toLowerCase());

      // Filtra por roles (si hay roles seleccionados)
      const matchesRoles = selectRoles.length === 0 || selectRoles.includes(agent.role?.displayName);

      return matchesSearch && matchesRoles;
    });


    setFilteredAgents(filtered);

  }, [searchText, selectRoles]); // Dependencias


  //                    FUNCIONES


  function handleRoleChange(role) {// Función para manejar el cambio en los checkboxes


    setSelectRoles((prevSelectRoles) => {
      if (prevSelectRoles.includes(role)) {
        // Si el rol ya está seleccionado, lo quitamos
        return prevSelectRoles.filter((r) => r !== role);
      } else {
        // Si no está seleccionado, lo agregamos
        return [...prevSelectRoles, role];
      }
    })

  }
  const addAgent = (agent) => { //funcion par agregar agentes al equipo de 5 max
    const existsInEquipo = equipo.some(a => a.uuid === agent.uuid)
    if (existsInEquipo) {
      alert(agent.displayName + "ya esta en el equipo")
      setEquipo(equipo)
    } else if (equipo.length >= 5) {
      alert('haz alcanzado el limite de 5 por equipo')
      setEquipo(equipo)
    }
    else {
      setEquipo([...equipo, agent])
    }

  }
  const openAndClosedModal = () => { // ABRIR Y CERRAR EL MODAL
    if (equipo.length > 0) {
      setIsOpenModal(!isOpenModal)
    } else {
      if (isOpenModal) {
        setIsOpenModal(!isOpenModal)
      } else {
        alert('No hay agentes para Mostrar')
      }

    }

  }
  const removeAgent = (uuid) => {
    setEquipo((prevEquipo) => prevEquipo.filter(agent => agent.uuid !== uuid));
  };



  //                RETORNO 
  return (
    <div className="w-11/12 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <Roles array={roles} handleRoleChange={handleRoleChange}></Roles>
      </div>
      <div className="w-full flex justify-end">
        <button onClick={() => openAndClosedModal()} className="mt-4 bg-red-500 text-white py-2 px-4 rounded my-1">
          Ver Agentes Seleccionados
        </button>
      </div>
      <div className="flex">
        <CardAgents array={filteredAgents} addAgent={addAgent} removeAgent={removeAgent} isOpenModal={isOpenModal}></CardAgents>
      </div>
      <Modal isOpenModal={isOpenModal} openAndClosedModal={openAndClosedModal} equipo={equipo} addAgent={addAgent} removeAgent={removeAgent}>

      </Modal>


    </div>



  )
}

export default ContainerCardsAgents