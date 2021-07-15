import React, { createContext, useContext, useReducer } from "react";
// Prepare Data Layer
export const StateContext = createContext();
// Wrap our App and provide the data layer through out app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// Pull information from the data layer
export const useStateValue = () => useContext
(StateContext)