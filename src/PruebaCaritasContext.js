import React, { createContext, useState } from 'react'

const PruebaCaritasContext = createContext();

export function PruebaCaritasProvider({ children }) {
    const[tiempoDePrueba,setTiempoDePrueba] = useState(180);

    
    return (<PruebaCaritasContext.Provider value={{

    }}>
        {children}
    </PruebaCaritasContext.Provider>);
}

export default PruebaCaritasContext;