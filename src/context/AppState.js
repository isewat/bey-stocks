import { createContext, useReducer } from "react";

export const AppStateContext = createContext();

const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return {
        ...state,
        pageTitle: action.payload
      }
    default: return state
  }
}

export const AppStateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, {
    pageTitle: ''
  });
  const { pageTitle } = state;

  const setPageTitle = (title) => {
    dispatch({ type: 'SET_PAGE_TITLE', payload: title });
  }

  return (
    <AppStateContext.Provider value={{
      pageTitle,
      setPageTitle
    }}>
      {children}
    </AppStateContext.Provider>
  )
}
