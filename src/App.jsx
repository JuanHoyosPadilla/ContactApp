import React, { useState } from "react";
import Navegacion from "./components/Navegacion";
import styled from "styled-components";
import ModalForm from "./components/ModalForm";
import Contactos from "./components/Contactos";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [contactos, setContactos] = useState([]);
  const handelModal = () => setIsModal(!isModal);

  const handelsubmit = (valor) => {
    toast("Contacto Agregado", {
      duration: 2000,
      position: "top-center",
    });
    setContactos([...contactos, valor]);
  };

  const handelEliminar = (id) => {
    const newContactos = contactos.filter((contacto) => contacto.id !== id);
    setContactos(newContactos);
    toast("Contacto Eliminado", {
      duration: 2000,
      position: "top-center",
    });
  };

  console.log(contactos);

  return (
    <ContainerApp>
      <Toaster />
      <Navegacion handelModal={handelModal} />
      {isModal && (
        <ModalForm handelModal={handelModal} handelsubmit={handelsubmit} />
      )}
      <div className="contenedor-contactos">
        <Contactos contactos={contactos} handelEliminar={handelEliminar} />
      </div>
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  .contenedor-contactos {
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
