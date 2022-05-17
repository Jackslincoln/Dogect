import React from 'react'
import {Button, Emoji, Title, Content} from './styles';

export const Category = ({

    path = 'http:www.google.com',
    emoji = '👍',
    bgColor = '#45468b',
    bgColor2 = '#4EC5F1',
    text = 'Frutas y Verduras'

}) => (

    <div>
        <Button
            href={path} bgColor={bgColor}
        >
        <Content>
            <Title>{text}</Title>
            <Emoji bgColor={bgColor2}>{emoji}</Emoji>
        </Content>    
        </Button>
    </div>
);