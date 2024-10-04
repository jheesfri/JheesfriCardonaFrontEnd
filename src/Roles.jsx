function Roles({ array, handleRoleChange }) {

    return (
        <div className="bg-stone-500 flex p-2 rounded">
            {array.map(role =>
                <div className="mx-2 bg-black rounded"key={role}>
                    <label 
                     className="text-rose-500 p-1">
                        <input
                            value={role}
                            onChange={() => handleRoleChange(role)}
                            type="checkbox" />{role}
                    </label>
                </div>


            )}
        </div>
    )

}

export default Roles