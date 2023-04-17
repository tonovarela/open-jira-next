import { FC, useReducer } from 'react'
import { UIContext,uiReducer } from './'


export interface UIState {
    sideMenuOpen: boolean
}
export const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false
}

interface PropsUIProvider {
    children: React.ReactNode
}

  export const UIProvider: FC<PropsUIProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }
    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' })
    }

   return (
        <UIContext.Provider value={{ 
            openSideMenu,
            closeSideMenu,
            ...state
            }}>
        {children}
        </UIContext.Provider>
)
}