import { SaveOutlined, AddCircleOutlined } from "@mui/icons-material"
import { useState, ChangeEvent } from 'react';

import { Button, Box, TextField } from "@mui/material"
export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onSave = ()=>{
    if (inputValue.length==0) return;
    console.log({inputValue});

  }
  
  const onTextFillChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(true);
    setInputValue(event.target.value);
  }


  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>

      {
        isAdding ? (
          <>
            <TextField
             autoFocus
             multiline 
             label="Nueva entrada"
              helperText={inputValue.length==0 && touched && 'Ingrese un valor' }
              value={ inputValue }   
              error={ inputValue.length==0 && touched }              
              onBlur={ ()=>setTouched(true) }
              onChange={ onTextFillChanged }

              placeholder="Nueva entrada" fullWidth sx={{ marginTop: 2, marginBottom: 1 }} />
            <Box  display='flex' justifyContent="space-between">
              <Button variant="text"
                onClick={() => { setIsAdding(false) }}
                color="secondary"
              >
                Cancelar
              </Button>
              <Button variant="outlined"
                color="secondary"
                onClick={ ()=> onSave()}
            
                endIcon={<SaveOutlined />}>
                Guardar
              </Button>
            </Box>

          </>
        ) :
          (
            <Button 
            startIcon={<AddCircleOutlined />} 
            onClick={()=>{setIsAdding(true)}}
            fullWidth variant="outlined">
              Agregar tarea</Button>
          )
      }
    </Box>
  )
}
