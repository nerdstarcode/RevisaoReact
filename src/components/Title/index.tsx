import React from "react";
import {clsx} from 'clsx'

import './style.sass'

export interface TitleProps{
    size?: 'lg' | 'md' | 'sm',
    component?: 'h5' | 'h4' | 'h3' | 'h2' | 'h1',
    text: string,
}

export function Title({size = 'lg', component = 'h1', text}: TitleProps) {
    const Comp = component;
    return(
        <Comp 
            className={
                clsx(
                    'titleComponent',
                    {
                        'title-sm' : size == 'sm',
                        'title-md' : size == 'md',
                        'title-lg' : size == 'lg'
                    }
                )
            }
        >
            {text}
        </Comp>
    )
}