import { FC, useReducer } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './UIReducer'

export interface UIState {
    sideMenuOpen: boolean
}
export const UI_initialState: UIState = {
    sideMenuOpen: false
}

interface PropsUIProvider {
    children: React.ReactNode
}

  export const UIProvider: FC<PropsUIProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_initialState)

   return (
        <UIContext.Provider value={{ sideMenuOpen: false }}>
        {children}
        </UIContext.Provider>
)
}