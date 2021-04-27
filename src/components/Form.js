import React, {useEffect,useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
margin-top:40px;
font-weight:bold;
font-size:20px;
padding:10px;
background-color:#66a2fe;
border:none;
width:100%;
border-radius:10px;
color:#FFF;
transition: background-color .3s ease;

&:hover{
    background-color:#326AC0;
    cursor: pointer;
}
`;

const MONEDAS = [
    {codigo:'USD', nombre:'Dolar de Estados Unidos'},
    {codigo:'MXN', nombre:'Peso Mexicano'},
    {codigo:'ARS', nombre:'Peso Argentino'},
    {codigo:'EUR', nombre:'Euro'}
]


const Form = ({setCriptomoneda,setMoneda}) => {
    const [listacripto, setListacripto] = useState([]);
    const [moneda,SelectMonedas,actualizarState ]= useMoneda('Eligí tu moneda', '',MONEDAS);
    const [cripto,SelectCripto]=useCripto('Eligí tú criptomoneda', '',listacripto );
    const [error, setError] = useState(false);
    useEffect(() => {
        const consultarApi = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url);
            setListacripto(resultado.data.Data);
            
        }
        consultarApi();
    }, [])
const cotizarMoneda=(e)=>{
    e.preventDefault();
    if(moneda === '' || cripto===''){
        setError(true);
        return;
    }
    setError(false);
    setMoneda(moneda);
    setCriptomoneda(cripto);
}
    return ( 
    <form
    onSubmit={cotizarMoneda}
    >
        {error ? <Error mensaje= 'Todos los campos son obligatorios'/>: null}
    <SelectMonedas/>
    <SelectCripto/>
     <Boton type= "submit" value="Calcular"/>
    </form> );
}
 
export default Form;