const Modal = ({children,setModal,title}) => {

    const handleCerrar=()=>{
        setModal(false)
    }
  return (
    <div className="content-modal">
        <div className="modal">
            <h2>{title}</h2>
            <p>{children}</p>
            <button onClick={handleCerrar}>Aceptar</button>
        </div>
    </div>
  )
}

export default Modal