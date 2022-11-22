import React from "react";
import {clsx} from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import './style.sass'

export interface TitleScoreProps{
    TitleChild: 'h2'| 'h3' | 'img',
    TitleChildsize?: 'lg' | 'md' | 'sm',
    TitleChildtext?: string,

    SubTitleChild: 'h3'| 'h4',
    SubTitleChildsize?: 'md' | 'sm',
    SubTitleChildtext?: string,
    src?: string,
    alt?: string,
}

export function TitleScore(Props: TitleScoreProps) {

    return(
        <div 
            className="TitleScoreComponent"
        >
            {
                Props.TitleChild !== 'img' ?  (
                    <Props.TitleChild
                        className={
                            clsx(
                                {
                                    'title-sm' : Props.TitleChildsize == 'sm',
                                    'title-md' : Props.TitleChildsize == 'md',
                                    'title-lg' : Props.TitleChildsize == 'lg',
                                },
                            )
                        }
                    >
                        {Props.TitleChildtext}
                    </Props.TitleChild>
                ) : (
                    <img 
                        src={Props.src} 
                        alt={Props.alt}
                    />
                )
            }
            <hr/>
            <Props.SubTitleChild
                className={
                    clsx(
                        'subtitleComponent',
                        {
                            'subtitle-sm' : Props.TitleChildsize == 'sm',
                            'subtitle-md' : Props.TitleChildsize == 'md',
                        },
                    )
                }
            >
                {Props.SubTitleChildtext}
            </Props.SubTitleChild>

        </div>
    )
}