import { List, Paper } from "@mui/material"
import { EntryCard } from "."
import { EntryStatus } from "../../interface";
import { FC, useContext, useMemo } from "react";
import { EntriesContext } from "../entries";


interface Props {
    status:EntryStatus;
}

export const EntryList:FC<Props>  =( {status}) => {
    const { entries} = useContext(EntriesContext);
    const entriesByStatus =  useMemo(()=>{
        return entries.filter(entry => entry.status === status);
    },[entries]);  


    
    return ( 
        // TODO: Aqui hacemos drop       
        <div >
            <Paper sx={{height:'calc(100vh - 250px)',overflowY:'scroll',backgroundColor:'transparent',padding:'3px 5px'}}>                
                <List sx={{opacity:1}}>
                    {
                        entriesByStatus.map(entry => (
                                                    <EntryCard key={entry._id}  entry={entry} />
                                                ))
                    }

                </List>
            </Paper>
        </div>
    )
}
