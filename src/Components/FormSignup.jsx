import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormSignUp ({manejoDeEnvio}){

const [name, setName] = useState ("")
const [lastName, setLastName] = useState ("")
const [email,setEmail]= useState ("")
const[ promo, setPromo]= useState(true)
const [novedades, setNovedades]= useState (false)



//este useState hace que el input se ponga rojo y muestre una advertencia
//luego se emplea en el TextField como error y helperText... recordar que error y helperText son componentes
// de los materiales de React (ver paginas)
const [errors, setErrors] = useState ({
   name: {
    error: false,
    message: "deben ser al menos 5 caracteres"  ,  
},

})
    
const [errores, setErrores] = useState ({
 apelidooo: {
     errorA: false,
     message: "deben ser al menos 55 caracteres"  ,  
 },
 })
     

// funcion que validad que el minimo sean tres letras
function validarNombre (nombre){
 
    if (nombre.length >= 5 ){
            return {
                name: { error: false, 
                        message: "",   
            }
            }
        } else {
            return {
                 name: {
                    error: true, 
                    message :"deben ser al menos 5 caracteres, no seas ehh",
                },
            }
        }
    }
            
    function validarApellido ( apellido){
 
        if (apellido.length >= 5 ){
                return {
                    apelidooo: { 
                        error: false, 
                            message: "",   
                }
                }
            } else {
                return {
                    apelidooo: {
                        error: true, 
                        message :"deben ser al menos 5 caracteres, no seas ehh",
                    },
                }
            }
        }
                



return (
    <form
        onSubmit={(e)=> {
                e.preventDefault()
                manejoDeEnvio({name, lastName,email, promo,novedades})
    }   }
            >
                    <TextField 
                         id="name" 
                        label="Nombre"
                        variant="outlined"  
                        fullWidth 
                        margin="normal" 
                        onChange={(e)=>{ 
                        console.log(e.target.value) 
                        setName (e.target.value)  }} 
                         value={name}

                         //comentarios desde errors / setErrors
                         error={errors.name.error }
                         helperText={errors.name.error ? errors.name.message : ""}
                         //llamo a setErrors para que mande el msj
                        onBlur={(e) =>{ setErrors(validarNombre(e.target.value))}}
                         />

                    <TextField 
                        id="Lastname"
                        label="Apellido" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        
                        //comentarios desde errors / setErrors
                        error={errores.apelidooo.error }
                        helperText={errores.apelidooo.error ? errores.apelidooo.message : ""}
                        //llamo a setErrors para que mande el msj
                       onBlur={(e) =>{ setErrores(validarApellido(e.target.value))}}
                        />

                    <TextField 
                        id="email" 
                        label="Correo electronico" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value) }/>
       
       
       <FormGroup>
              
               <FormControlLabel 
                    control={
                        <Switch 
                        checked={promo}
                        onChange={(e)=>
                        setPromo(e.target.checked)
                       }/>} 
                        label="Recibir Promociones" /> 

               <FormControlLabel 
                        control={
                        <Switch 
                        checked={novedades}
                        onChange={(e)=> setNovedades(e.target.checked)
                        }/>} label="Recibir Novedades" /> 
  
        </FormGroup>

        <Button variant="contained" type="submit">Registrarse</Button>
    </form>
)
                    }              

export default FormSignUp