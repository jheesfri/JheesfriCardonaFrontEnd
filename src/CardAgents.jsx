
function CardAgents({ array, addAgent, removeAgent, isOpenModal }) {

    return (
        <div className="w-full flex justify-between flex-wrap bg-black my-3">
            {array.map(agent => (

                <div
                    className="w-52 h-70 p-2 bg-white m-1.5 rounded"
                    key={agent.uuid}>
                    <div>
                        <img
                            src={agent.displayIcon}
                            alt={agent.displayName} />
                    </div>
                    <div>
                        <h3>{agent.displayName}</h3>
                        <p>{agent.description}</p>
                    </div>
                    {isOpenModal ? 
                        <button className="rounded-3xl bg-red-700 w-20"
                            onClick={() => removeAgent(agent.uuid)}>  ELIMINAR </button> : 
                        <button
                            className="rounded-3xl bg-green-700 w-20"
                            onClick={() => addAgent(agent)}>  AGREGAR </button>
                    }
                </div>


            ))}

        </div>
    );
}

export default CardAgents