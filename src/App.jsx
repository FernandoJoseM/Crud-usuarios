import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import FormUser from "./components/FormUser";
import CardUser from "./components/CardUser";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [title, setTitle] = useState('hi')
  const [mensaje, setMensaje] = useState('')
  const [actualizar, setActualizar] = useState()
  const [formModal, setFormModal] = useState(false)
  const [modal, setModal] = useState(false)
  const url = "https://users-crud.academlo.tech";
  const [users, getUsers, postUsers, deleteUsers, updateUsers] = useFetch(url);
  useEffect(() => {
    getUsers("/users/");
  }, []);
  console.log(users);
  return (
    <>
      <Header setFormModal={setFormModal} />
      {
        formModal && <FormUser postUsers={postUsers}setFormModal={setFormModal} actualizar={actualizar}updateUsers={updateUsers}setActualizar={setActualizar}setModal={setModal}setMensaje={setMensaje}setTitle={setTitle}/>
      }
      {
        modal && <Modal setModal={setModal}title={title}>{mensaje}</Modal>
      }
      <div className="content-users">
      {users?.map((el) => (
        <CardUser key={el.id} el={el}deleteUsers={deleteUsers}setActualizar={setActualizar} setFormModal={setFormModal}setModal={setModal}setMensaje={setMensaje}setTitle={setTitle}/>
      ))}
      </div>
    </>
  );
}

export default App;
