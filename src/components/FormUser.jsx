import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({postUsers,setFormModal,actualizar,updateUsers,setActualizar,setModal,setMensaje,setTitle}) => {
 const{register,handleSubmit,reset}=useForm()
 useEffect(() => {
   reset(actualizar)
 }, [actualizar])
 
 const submit=(data)=>{
    if(actualizar){
        updateUsers('/users/',actualizar.id,data)
        setTimeout(()=>{
            setFormModal(false)
        },500)
        setActualizar()
        setModal(true)
        setTitle('Editar')
        setMensaje(`se actualizaron los datos del usuario ${actualizar.first_name} ${actualizar.last_name} correctamente`)
    }else{
        postUsers('/users/',data)
        setTimeout(()=>{
            setFormModal(false)
        },500)
    }
    reset({
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        birthday:''
    })
 }
 const handleCLoseFormModal=()=>{
    setFormModal(false)  
   
 }
  return (
    <div className="modal-form">
    <form className="formulario" onSubmit={handleSubmit(submit)}>
        <legend>{actualizar?'Editar Usuario':'Nuevo Usuario'}</legend>
        <div className="close-modal" onClick={handleCLoseFormModal}>🗙</div>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input 
            {...register('first_name')}
            type="text"
            id="nombre"
            placeholder="Nombre"
            />
        </div>
        <div>
            <label htmlFor="apellido">Apellidos</label>
            <input 
            {...register('last_name')}
            type="text"
            id="apellido"
            placeholder="Apellido"
            />
        </div>
        <div>
            <label htmlFor="correo">Correo</label>
            <input
             {...register('email')}
            type="email"
            id="correo"
            placeholder="correo" />
        </div>
        <div>
            <label htmlFor="contraseña">Contraseña</label>
            <input 
            {...register('password')}
            type="password"
            id="contraseña"
            placeholder="Password"
            />
        </div>
        <div>
            <label htmlFor="cumpleaños">Cúmpleaños</label>
            <input 
            {...register('birthday')}
            type="date"
            id="cumpleaños" />
        </div>
        <button className="btn-form">{actualizar?'Editar Usuario':'Agregar nuévo usuario'}</button>
    </form>
    </div>
  )
}

export default FormUser