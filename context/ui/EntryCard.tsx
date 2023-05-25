import { Card, CardActionArea, CardContent, Typography,CardActions } from "@mui/material"
import { Entry } from '../../interface';
import { FC } from "react";


interface Props {
    entry:Entry;
}

export const EntryCard:FC<Props> = ({entry}) => {
    return (
        <Card sx={{ marginBottom: 2 }}
        //Eventos de drag
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
                </CardContent>
                <CardActions sx={{display:'flex',justifyContent:'end',paddingRight:2}}>
                    <Typography variant="body2">Hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
