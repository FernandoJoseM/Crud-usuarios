
const Header = ({setFormModal}) => {
    const handleFormModal=()=>{
        setFormModal(true)
    }
  return (
    <header>
        <h1>Usuarios</h1>
        <button onClick={handleFormModal}>+ Crear un nuévo usuario</button>
    </header>
  )
}

export default Header