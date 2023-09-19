import Editar from '../assets/editar-texto.png'
import Eliminar from '../assets/eliminar.png'
const CardUser = ({ el,deleteUsers,setActualizar,setFormModal,setModal,setMensaje,setTitle}) => {
    const handleDelete=()=>{
        deleteUsers('/users/',el.id)
        setModal(true)
        setTitle('Eliminar')
        setMensaje(`se elimino el Usuario ${el.first_name} ${el.last_name} correctamente`)
    }
    const handleUpdate=()=>{
        setActualizar(el)
        setFormModal(true)
    }
  return (
    <article className="article">
      <h2 className="nombres">{el.first_name} {el.last_name}</h2>
      <div>
        <label>Correo</label>
        <h2 className="correo">{el.email}</h2>
      </div>
      <div>
        <label><span>🎁</span>Cumpleaños</label>
        <h2 className="cumpleaños">{el.birthday}</h2>
      </div>
      <div className='btns'>
      <button><img src={Eliminar}onClick={handleDelete}/></button>
      <button className='editar'><img src={Editar}onClick={handleUpdate}/></button>
      </div>
    </article>
  );
};

export default CardUser;
