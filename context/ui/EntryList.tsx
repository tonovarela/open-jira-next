import { List, Paper } from "@mui/material"
import { EntryCard } from "."
export const EntryList = () => {
    return ( 
        // TODO: Aqui hacemos drop       
        <div >
            <Paper sx={{height:'calc(100vh - 250px)',overflowY:'scroll',backgroundColor:'transparent',padding:'3px 5px'}}>                
                <List sx={{opacity:1}}>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>

                </List>

            </Paper>
        </div>
    )
}
