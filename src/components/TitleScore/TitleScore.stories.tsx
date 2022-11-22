import { TitleScore, TitleScoreProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
export default{
    title: 'Components/TitleScore',
    component: TitleScore,
    args: {
        TitleChild: 'h2',
        TitleChildsize: 'lg',
        TitleChildtext: 'irineu',
        SubTitleChild: 'h3',
        SubTitleChildsize: 'md',
        SubTitleChildtext: 'você não sabe nem eu'
    },
    argTypes: {
        TitleChild: {
            control:{
                description: 'Tag a ser utilizada no título',
                options: ['h2', 'h3', 'img'],
                type: 'inline-radio'
            }
        },
        TitleChildsize: {
            description: 'Tamanhos da fonte [35.36px, 28px, 24px] ',
            control:{
                options: ['lg', 'md', 'sm'],
                type: 'inline-radio'
            }
        },
        TitleChildtext:{
            description: 'Texto do título',
            control:{
                type: 'text'
            }
        },
        SubTitleChild:{
            description: 'Tag a ser utilizada no sub-título',
            control:{
                options: ['h3', 'h4'],
                type: 'inline-radio'
            }
        },
        SubTitleChildsize: {
            description: 'Tamanhos da fonte [28px, 24px] ',
            control:{
                options: ['md', 'sm'],
                type: 'inline-radio'
            }
        },
        SubTitleChildtext: {
            description: 'Texto do sub-título',
            control:{
                type: 'text'
            }
        },
        src:{
            description: 'Caso a tag para o título seja img, essa é a forma de adicionar',
            control:{
                type: 'text'
            }
        },
        alt:{
            description: 'Texto alt da imagem caso a tag escolhida seja img',
            control:{
                type: 'text'
            },
            type: 'string',
        },
        size:{
            table: {
                disable: true,
            }
        },
        text:{
            table: {
                disable: true,
            }
        },
    },
   
} as Meta<TitleScoreProps>

export const Default: StoryObj<TitleScoreProps> = {
    
}
export const TitleImg: StoryObj<TitleScoreProps> = {
    args: {
        TitleChild: 'img',
        src:'../../../public/vite.svg',
        alt: 'Logo do vite',
        SubTitleChild: 'h3',
        SubTitleChildsize: 'md',
        SubTitleChildtext: 'você não sabe nem eu'
    },
}
export const TitleText: StoryObj<TitleScoreProps> = {
    
}