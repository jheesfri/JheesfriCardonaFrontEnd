import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Cama Dona Antiestres",
    price: 60000,
    line: "Mascotas",
    tallas: "XS, S, M, L, XL, XXL",
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio! ",
    image: "https://i.pinimg.com/originals/09/f2/ed/09f2ed94795e34a9c77dc39e37a3ed3a.png",
    images: ["https://i.pinimg.com/originals/09/f2/ed/09f2ed94795e34a9c77dc39e37a3ed3a.png", "https://i.pinimg.com/1200x/10/90/fe/1090fef32bf9e1867561ebec714ae61b.jpg", "https://i.pinimg.com/236x/3b/f9/ef/3bf9ef447aff510e4102087c17e246b2.jpg", "https://i.pinimg.com/236x/aa/9d/34/aa9d34d5affc7bb3ee6bfefe78a553b8.jpg", "https://i.pinimg.com/236x/90/7d/b6/907db66f2c0f386ecaa9e4ac3e6e950d.jpg", "https://i.pinimg.com/236x/bd/24/12/bd241230d2b27d416934557fafa0bdf1.jpg", "https://i.pinimg.com/236x/98/9b/ee/989bee62d3d1c6b044e64ba814b0fe76.jpg"]


  },
  {
    id: 2,
    name: "Cama Para el Sofa",
    price: 30000,
    line: "Mascotas",
    tallas: "XS, S, M, L, XL, XXL",
    description: "¡Distribuidora CG presenta las camas para mascotas perfectas para colocar sobre la cama o el sofá! Estas camas están diseñadas para brindar comodidad y estilo a tus peludos amigos, sean perros o gatos. Confeccionadas con materiales suaves y duraderos, ofrecen un espacio acogedor en cualquier lugar de la casa, desde el salón hasta el dormitorio. Su tamaño y diseño las hacen ideales para adaptarse sobre muebles sin ocupar demasiado espacio, creando un rincón especial donde tu mascota puede relajarse y descansar tranquilamente. ¡Transforma cualquier lugar en el refugio perfecto para tu compañero de cuatro patas!",
    image: "https://i.pinimg.com/564x/e6/88/13/e68813c03d0d15dda1dff2e3a225c982.jpg",
    images: ["https://i.pinimg.com/564x/e6/88/13/e68813c03d0d15dda1dff2e3a225c982.jpg", "https://i.pinimg.com/564x/c1/02/a5/c102a5b2a03d84bec35e2db7b230784f.jpg", "https://i.pinimg.com/564x/7d/83/74/7d83746fb0b8cab201d46af8eda3220b.jpg", "https://i.pinimg.com/564x/b0/44/bc/b044bccfc04adfac98debc27dda2faeb.jpg"]


  },
  {
    id: 3,
    name: "Cama Cuadrada",
    price: 20000,
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio!",
    image: "https://i.pinimg.com/originals/60/bc/54/60bc54e5699d8fb7cbc7ddb0bfccf69c.jpg"


  },
  {
    id: 4,
    name: "Bozales para Perros",
    price: 15000,
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio!",
    image: "https://i.pinimg.com/originals/d3/69/11/d369115c6be6fd9b0d1f0d2e6d735680.jpg"


  },
  {
    id: 5,
    name: "Pecheras Para Gatos",
    price: 25000,
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio!",
    image: "https://i.pinimg.com/originals/73/14/59/731459b9cff7e6c216bf162be9006dca.jpg"


  },
  {
    id: 6,
    name: "Tapetes Corazon",
    price: 25000,
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio!",
    image: "https://i.pinimg.com/originals/a2/da/0b/a2da0bdd79f1ae29b61c82eb6a9ab2e3.jpg"


  },
  {
    id: 7,
    name: "Cojines Peluche",
    price: 15000,
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio!",
    image: "https://i.pinimg.com/736x/13/91/64/139164777c2163169d581f7d8f647706.jpg"


  },
  {
    id: 8,
    name: "Alfombra Grande 2 mt x 1,60 mt",
    price: 129000,
    description: "Distribuidora CG presenta la Cama Tipo Dona Antiestrés para perros y gatos, diseñada para brindarles el máximo confort y seguridad. Esta cama es perfecta para mascotas que buscan un lugar acogedor y cálido donde descansar. Con su forma redonda y bordes elevados, ofrece un apoyo ideal para la cabeza y el cuello, aliviando el estrés y la ansiedad. Fabricada con materiales suaves y de alta calidad, es lavable y duradera, asegurando un lugar higiénico y cómodo para tu peludo amigo. ¡Haz que tu mascota se sienta protegida y cómoda en su nuevo refugio!",
    image: "https://i.pinimg.com/236x/7c/f3/43/7cf3435d4d18966dbb6f7ec842d7b43d.jpg"


  }
]

function App() {

  const [TextoBusqueda, setTextoBusqueda] = useState('')

  function filtroTextoBusqueda(nuevoTexto) {
    setTextoBusqueda(nuevoTexto)

    console.log(nuevoTexto);
    
  }

  return (<>
    <Nav TextoBusqueda={TextoBusqueda} filtroTextoBusqueda={filtroTextoBusqueda}></Nav>
    <ContenedorTarjetas products={products} TextoBusqueda={TextoBusqueda}></ContenedorTarjetas>
  </>
  )
}

export default App

function Nav({TextoBusqueda, filtroTextoBusqueda}) {

  return (
    <div className='flex m-14 p-3'>
      <div className='w-1/2'>
        <p className='text-xs text-rose-500 font-black mb-4'>ARTICULOS PARA EL HORGAR</p>
        <h1 className='font-black text-3xl w-1/3'>DISTRIBUIDORA CG.</h1>
      </div>
      <div className='w-1/2 flex justify-end items-start'>
        <div className='w-1/2 h-1/16 flex justify-between'>

          <input 
          type="text" 
          placeholder='Search' 
          className='w-4/5 p-1 pl-5 border-solid border border-gray-600' 
          value={TextoBusqueda} 
          onChange={(e)=> filtroTextoBusqueda(e.target.value)}/>

          <div className="relative inline-block"> 
            {/* Sombra detrás del botón */}
            <div className="absolute  w-full h-full border bg-black translate-x-1 translate-y-1"></div> 
            <button className="relative bg-white border border-red-400 p-2 z-10"><i className="fa-solid fa-magnifying-glass text-red-400 " ></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
function Tarjeta({ imagen, titulo }) {

  return (
    <div className='relative bg-white w-60 h-100 p-2 rounded-md border border-gray-600'>
      <a href="">
        <div className=''>
          <img src={imagen} alt={titulo} className='rounded-md w-full h-1/2' />
        </div>
        <div className='p-2'>
          <h3>{titulo}</h3>
          <div className='absolute bottom-1 right-1 w-2 h-2 bg-red-500 rounded-full'></div>
        </div>
      </a>
    </div>
  )
}
function ContenedorTarjetas({products,TextoBusqueda}) {

 
 const productosFiltrados = products.filter((product) => product.name.toLowerCase().includes(TextoBusqueda.toLowerCase()))

  return (
    
    <div className='flex flex-wrap gap-6 justify-center'>
      {productosFiltrados.map((product) => (
        <Tarjeta key={product.id} imagen={product.image} titulo={product.name}></Tarjeta>
      ))}
    </div>
  )
}
