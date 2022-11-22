import React from "react";
import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import './style.sass'

export interface TitleProps{
    size?: 'lg' | 'md' | 'sm',
    TitleChild: 'h2'| 'h3' | 'h4' | 'img',
    text?: string,
    src?: string,
}

export function TitleScore(Props: TitleProps) {

    return(
        <div 
            className="TitleScore"
        >
            {
                Props.TitleChild !== 'img' ?  (
                    <Props.TitleChild
                        className="
                            
                        "
                    >
                        {Props.text}
                    </Props.TitleChild>
                ) : (
                    <img 
                        src="" 
                        alt="" 
                    />
                )

            }
            
        </div>
    )
}