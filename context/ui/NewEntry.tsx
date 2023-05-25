import  {SaveOutlined,AddCircleOutlined}  from "@mui/icons-material"
import { Button ,Box,TextField} from "@mui/material"

export const NewEntry = () => {
  return (    
    <Box sx={{marginBottom:2,paddingX:2}}>
    
    <Button startIcon={<AddCircleOutlined/>}
    fullWidth
    variant="outlined"    
    >
        Agregar tarea
        </Button>
    <TextField autoFocus multiline label="Nueva entrada"
    helperText="Ingrese un valor"
     placeholder="Nueva entrada" fullWidth sx={{marginTop:2, marginBottom:1}}  />
    <Box display='flex' justifyContent="space-between">
    <Button variant="outlined"
    color="secondary"
    endIcon={<SaveOutlined />}>
        Guardar
    </Button>
    <Button variant="text"
    color="secondary"    
    >
        Cancelar
    </Button>
        </Box>
    
    </Box>
  )
}
