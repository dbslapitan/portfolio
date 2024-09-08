'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const NavContext = createContext<INavContext>({ selected: "home", setSelected: () => {} });

export function Providers({ children }: { children: ReactNode }){

    const [selected, setSelected] = useState("home");

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