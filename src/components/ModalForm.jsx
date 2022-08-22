import React, { useState } from "react";
import styled from "styled-components";
import { FaWindowClose, FaRegUser, FaPhoneAlt, FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function ModalForm({ handelModal, handelsubmit }) {
  const [inputsValue, setInputsValue] = useState({
    id: Math.random(1),
    nombre: "",
    telefono: 0,
  });

  const handelChange = (e) => {
    setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
  };

  const guardarDatos = (e) => {
    e.preventDefault();
    if (inputsValue.nombre === "")
      return toast("Por favor ingrese el nombre...", {
        duration: 2000,
        position: "top-center",
        icon: <FaTimes />,
        className: "toast",
      });
    if (inputsValue.telefono === 0)
      return toast("Por favor ingresar numero de telefono", {
        duration: 2000,
        position: "top-center",
        icon: <FaTimes />,
        className: "toast",
      });
    if (inputsValue.telefono.length !== 10)
      return toast("El numero de telefono debe tener 10 digitos", {
        duration: 2000,
        position: "top-center",
        icon: <FaTimes />,
        className: "toast",
      });

    
    handelsubmit(inputsValue);
    handelModal(false);
    e.target.reset();
  };

  return (
    <ContainerModal>
      <Toaster />
      <div className="modal">
        <div className="cabecera">
          <FaWindowClose onClick={handelModal} className="icon" />
        </div>
        <div className="body">
          <h2>Registra tu contacto</h2>
          <form onSubmit={guardarDatos}>
            <label>
              <FaRegUser />
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese el nombre"
                onChange={(e) => handelChange(e)}
              />
            </label>
            <label>
              <FaPhoneAlt />
              <input
                type="number"
                name="telefono"
                placeholder="Ingrese el felefono"
                onChange={(e) => handelChange(e)}
                maxlength="10"
              />
            </label>
            <div className="footer">
              <button>Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  position: fixed;
  background-color: #00000052;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .toast {
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: absolute;
    background-color: #fcfcfdcb;
    width: 50vw;
    height: 50vh;
    border-radius: 20px;

    .cabecera {
      position: relative;
      width: 100%;
      padding: 10px;
      .icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 20px;
        color: #0b0b0b;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
          color: #0f0e0e77;
        }
      }
    }

    .body {
      display: flex;
      flex-direction: column;

      gap: 1rem;
      width: 100%;
      height: 70%;
      margin-top: 1.5rem;

      h2 {
        font-size: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        font-weight: 400;
      }
      form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          background-color: #ffffffcd;
          height: 2rem;
          width: 90%;
          padding: 0px 5px;

          border-radius: 10px;
          input {
            border: none;
            height: 100%;
            width: 100%;
            outline: none;
            background-color: transparent;
          }
        }
      }
    }

    .footer {
      display: flex;
      justify-content: end;
      padding-right: 1rem;
      button {
        padding: 0.2rem 1rem;
        border: none;
        background-color: #6c7af3;
        color: #ffffff;
        font-weight: 400;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
          background-color: #6c79f3ba;
        }
      }
    }
  }
`;
