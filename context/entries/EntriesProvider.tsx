import { FC, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interface'

export interface EntriesState {
    entries: Entry[]
}
export const Entries_initialState: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pendiente varela1",
            status: "pending",
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: "In progress Varela2",
            status: "in-progress",
            createdAt: Date.now()-100000
        },
        {
            _id: uuidv4(),
            description: "Terminado varela3",
            status: "finished",
            createdAt: Date.now()-500000
        }
    ]
}

interface PropsEntriesProvider {
    children: React.ReactNode
}

export const EntriesProvider: FC<PropsEntriesProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_initialState)

    return (
        <EntriesContext.Provider value={{ ...state }}>
            {children}
        </EntriesContext.Provider>
    )
}