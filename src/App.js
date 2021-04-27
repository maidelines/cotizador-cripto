
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import imagen from './cripto.png';
import Form from './components/Form';
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner';


const Container = styled.div`
max-width:900px;
margin:0 auto;
@media(min-width:992px){
  display:grid;
  grid-template-columns:repeat(2,1fr);
  column-gap:2rem
};
`;

const Imagen = styled.img`
max-width:100%;
margin-top:5rem;
`;

const Header = styled.h1`
font-family:'Bebas Neue', cursive;
color:#572364;
text-align:left;
font-weight:700;
font-size:50px;
margin-bottom:50px;
margin-top:80px;
&::after{
  content:'';
  width:100px;
  height:6px;  
  display:block;
}
`;

function App() {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [cotizacion, setCotizacion] = useState({});
  const [spinner, setSpinner] = useState(false);
  useEffect(()=>{
    const cotizarCripto = async ()=>{
      if(moneda==='')
      return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      setSpinner(true);       
      setTimeout(()=>{
      setSpinner(false);
      setCotizacion(resultado.data.DISPLAY[criptomoneda][moneda]);   
      },3000)
    }
    cotizarCripto();
  },[moneda,criptomoneda])

  const components = (spinner) ? <Spinner/> : <Cotizacion  cotizacion= {cotizacion}/>
  return (
    <Container >
      <div> 
      <Imagen
      src={imagen}
      alt = 'imagen cripto'
      />
        </div>
        <div>
        <Header>Cotiza criptomoneda al instante</Header>
        <Form
        setMoneda = {setMoneda}
        setCriptomoneda= {setCriptomoneda}
        />
      {components}
        </div>
    </Container>
  );
}

export default App;
