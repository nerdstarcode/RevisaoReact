import { Text, TextProps } from './'
import { Meta, StoryObj } from '@storybook/react'
export default{
    title: 'Components/Controller/Text',
    component: Text,
    args: {
        size: 'lg',
        text: 'hello!',
        component: 'h1',
    },
    argTypes: {
        size:{
            description: 'Tamanhos da fonte [35.36px, 28px, 24px] ',
            options: ['lg', 'md', 'sm'],
            control: {
                type: 'inline-radio'
            },
        },
        text: {
            description: 'Texto que irá aparecer na tag',
            control: {
                type: 'text'
            },
        },
        component:{
            description: 'Tag html a ser usada no componente Text',
            options: ['h1', 'p', 'a', 'strong', 'small'],
            control: {
                type: 'inline-radio'
            },
        },
    }
   
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    args:{
        size: 'lg',
    },
}
export const mdText: StoryObj<TextProps> = {
    args:{
        size: 'md',
    },
}
export const smText: StoryObj<TextProps> = {
    args:{
        size: 'sm',
    },
}