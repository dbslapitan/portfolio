'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export const NavContext = createContext<INavContext>({ selected: "home", setSelected: () => {} });

export function Providers({ children }: { children: ReactNode }){

    const [selected, setSelected] = useState("home");

    useEffect(() => {
        console.log(window.innerHeight);
        document.addEventListener('scroll', (event) => {
            
        });
    });

    return (
        <NavContext.Provider value={{selected, setSelected}}>
            {children}
        </NavContext.Provider>
    );
}

interface INavContext{
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>
}