import React, { createContext, FC } from "react";

export type SizeType = 'large' | 'small' | 'mini' | undefined
export const SizeContext = createContext<SizeType>(undefined)

export interface SizeContextProps {
    size?: SizeType;
}

const SizeContextProvider: FC<SizeContextProps> = ({ children, size }) => {
    return (
        <SizeContext.Consumer>
            {() => (
                <SizeContext.Provider value={size}>
                    {children}
                </SizeContext.Provider>
            )}
        </SizeContext.Consumer>
    )
}

export default SizeContextProvider
