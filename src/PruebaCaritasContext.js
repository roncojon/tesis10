import React, { createContext, useState } from 'react'

const PruebaCaritasContext = createContext();

export function PruebaCaritasProvider({ children }) {
    return (<PruebaCaritasContext.Provider value={{
        sujetoId: '',
        pruebaBase: {
            id: '',
            fecha: '',
            filas: '',
            intentos:'',
            anotaciones:'',
            errores:'',
            omisiones:''        }
    }}>{children}</PruebaCaritasContext.Provider>);
}

export default PruebaCaritasContext;