'use client';

import { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from "react";

export const NavContext = createContext<INavContext>({ selected: "home", setSelected: () => {}, aboutTop: 0, projectsTop: 0 });

export function Providers({ children }: { children: ReactNode }){

    const [selected, setSelected] = useState("");
    const aboutTop = useRef(0);
    const projectsTop = useRef(0);

    return (
        <NavContext.Provider value={{selected, setSelected, aboutTop, projectsTop}}>
            {children}
        </NavContext.Provider>
    );
}

interface INavContext{
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>,
    aboutTop: MutableRefObject<number> | 0,
    projectsTop: MutableRefObject<number> | 0
}