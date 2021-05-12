import React, { Component, createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(null);

export const DataLayer = ({ initialState, reducer, children }) => {
    return (
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
