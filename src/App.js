import './App.css';
import FormSignUp from './Components/FormSignup';
import { Fragment } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const manejoDeEnvio = (valores)=> {
  console.log(valores);
}


function App() {
  return (
    <Container component="section" maxWidth="sm">

    <Typography variant="h3" align='center'>Formulario de registro</Typography>
     <FormSignUp manejoDeEnvio={manejoDeEnvio}/>

     </Container>
  );
}

export default App;
