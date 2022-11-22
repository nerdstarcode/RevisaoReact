import { Title, TitleProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
export default{
    title: 'Components/Controller/Title',
    component: Title,
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
            options: ['h5', 'h4', 'h3', 'h2', 'h1'],
            control: {
                type: 'inline-radio'
            },
        },
    }
} as Meta<TitleProps>

export const Default: StoryObj<TitleProps> = {
    args:{
        size: 'lg',
    },
}
export const mdText: StoryObj<TitleProps> = {
    args:{
        size: 'md',
    },
}
export const smText: StoryObj<TitleProps> = {
    args:{
        size: 'sm',
    },
}