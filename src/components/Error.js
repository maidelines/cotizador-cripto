import React from 'react';
import styled from '@emotion/styled';


const MesaggeError = styled.p`
background-color:#4B0082;
padding:1rem;
color:#FFF;
font-size:30px;
text-transform:uppercase;
font-weight:bold;
text-align:center;
font-family:'Bebas Neue',cursive;
`;
const Error = ({mensaje}) => {
    return (  
        <MesaggeError>{mensaje}</MesaggeError>
    );
}
 
export default Error;