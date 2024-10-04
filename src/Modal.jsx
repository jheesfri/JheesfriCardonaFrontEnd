import CardAgents from "./CardAgents"

function Modal({ isOpenModal, openAndClosedModal, addAgent, equipo,removeAgent }) {

    if (!isOpenModal) return null // no mostrar si no esta abierto  
    console.log(equipo)
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold mb-4">Agentes Seleccionados</h2>
                <div>
                    <CardAgents array={equipo} addAgent={addAgent} isOpenModal={isOpenModal} removeAgent={removeAgent}></CardAgents>
                </div>
                <button onClick={() => openAndClosedModal()} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default Modal
