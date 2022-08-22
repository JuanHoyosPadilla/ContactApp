import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function Contacto({contacto,handelEliminar}) {
  return (
    <ContainerCard>
      <div className="header">
        <FaTimes onClick={() => handelEliminar(contacto.id)} className="icon" />
      </div>
      <div className="body">
        <div className="imagen">imagen</div>
        <div className="datos">
          <span>{contacto.nombre}</span>
          <p>{contacto.telefono}</p>
        </div>
      </div>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  background-color: #fcfcfd48;
  padding: 1rem;
  color: white;
  border-radius: 20px;
  .header {
    display: flex;
    justify-content: end;
    padding: 0 0.5rem;
    .icon {
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover {
            color: #ffffff91;
        }
    }
  }
  .body{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    .imagen{
        background-color: black;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .datos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        font-size: 20px;
        font-weight: 800;
    }
  }
`;
