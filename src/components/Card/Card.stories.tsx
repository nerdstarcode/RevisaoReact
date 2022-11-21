import { Card, CardProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
export default{
    title: 'Components/Card',
    component: Card,
    args: {
        name: 'Bill',
        time: new Date().toLocaleTimeString("pt-br", {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }),
    },
    parameters: {
        actions: {
          handles: ['mouseover time', 'click span', 'mouseover p'],
        },
    },
   
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {
    argTypes: {
        time: {
            table: {
                disable: true,
            }
        },
    },
}