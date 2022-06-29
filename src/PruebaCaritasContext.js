import React, { createContext, useState } from 'react'

const PruebaCaritasContext = createContext();

export function PruebaCaritasProvider({ children }) {
    return (<PruebaCaritasContext.Provider value={{
        sujetoId: '',
        pruebaBase: {
            id: '',
            fecha: '',
            filas: [
                {
                    fila: {
                        numeroDeFila: '',
                        intentos: '',
                        anotaciones: '',
                        errores: '',
                        omisiones: ''
                    }
                }],
            intentosTotales: '',
            anotacionesTotales: '',
            erroresTotales: '',
            omisionesTotales: '',
        }
    }}>{children}</PruebaCaritasContext.Provider>);
}

export default PruebaCaritasContext;