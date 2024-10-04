function Nav({searchText, searchTextFilter}) {

    return (
      <div className='flex m-14 py-3 px-6 w-full'>
        <div className='w-1/2'>
          <p className='text-xs text-rose-500 font-black mb-4'>VALORANT</p>
          <h1 className='font-black text-white text-3xl w-1/3'>AGENTS</h1>
        </div>
        <div className='w-1/2 flex justify-end items-start'>
          <div className='w-1/2 h-1/16 flex justify-between'>
  
            <input 
            type="text" 
            placeholder='Search' 
            className='w-4/5 p-1 pl-5 ' 
            value={searchText} 
            onChange={(e)=> searchTextFilter(e.target.value)}/>
  
            <div className="relative inline-block"> 
              {/* Sombra detrás del botón */}
              <div className="absolute  w-full h-full border bg-white translate-x-1 translate-y-1"></div> 
              <button className="relative bg-black border border-red-400 p-2 z-10"><i className="fa-solid fa-magnifying-glass text-red-400 " ></i>
              </button>
            </div>
          </div>   
  
        </div>
      </div>
    )
  }
  export default Nav