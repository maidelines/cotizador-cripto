import React, { Fragment, useState } from "react";
import styled from '@emotion/styled';
const Label = styled.label`
font-family:'Bebas Neue',cursive;
text-transform:uppercase;
font-weight:bold;
font-size:2rem;
margin-top:2rem;
display:block;
`;
const Select = styled.select`
width:100%;
display:block;
padding:1rem;
-webkit-appearance:auto;
border-radius:15px;
border:1px;
font-size:1rem;
`;
const useMoneda = (moneda, stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);
  const Seleccionar = () => (
    <Fragment>
       < Label>{moneda}</Label>
      
    <Select
    onChange={e=>setState(e.target.value)}
      value = {state}>   
      <option> --Seleccione--</option>
        {opciones.map(opcion => (
          <option key = {opcion.codigo }value={opcion.codigo}>{opcion.nombre}</option>
        ))}        
    </Select>  
    </Fragment>
  );

  return [state, Seleccionar, setState];
};

export default useMoneda;
