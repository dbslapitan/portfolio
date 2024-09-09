'use client';

import { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from "react";

export const NavContext = createContext<INavContext>({ selected: "home", setSelected: () => {} });

export function Providers({ children }: { children: ReactNode }){

    const [selected, setSelected] = useState("home");
    const aboutTop = useRef(0);

    return (
        <NavContext.Provider value={{selected, setSelected}}>
            {children}
        </NavContext.Provider>
    );
}

interface INavContext{
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>,
}