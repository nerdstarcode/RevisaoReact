import React from "react";
import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';

import './style.sass'

export interface TextProps{
    size?: 'lg' | 'md' | 'sm',
    component?: 'h1' | 'p' | 'a' | 'strong' | 'small',
    text: string
}

export function Text({size = 'lg', component = 'h1', text}: TextProps) {
    const Comp = component;
    return(
        <Comp 
            className={
                clsx(
                    'textComponent',
                    {
                        'text-sm' : size == 'sm',
                        'text-md' : size == 'md',
                        'text-lg' : size == 'lg'
                    }
                )
            }
        >
            {text}
        </Comp>
    )
}