import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
color:#7D3C98;
font-family:Arial, Helvetica, sans-serif;
`;
const Info = styled.p`
font-size:18px;
span{
    font-weight:bold;
}
`;
const Precio = styled.p`
font-size:20px;
span{
    font-weight:bold;
}
`;
const Cotizacion = ({cotizacion}) => {
    if(Object.keys(cotizacion).length===0) return null;
    console.log(cotizacion)
    return (  
        <Container>
            <Precio>El precio es: <span>{cotizacion.PRICE}</span></Precio>
            <Info>El precio más alto del día: <span>{cotizacion.HIGHDAY}</span></Info>
            <Info>Ultimas 24 horas <span>{cotizacion.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{cotizacion.LASTUPDATE}</span></Info>
        </Container>
    );
}
 
export default Cotizacion;