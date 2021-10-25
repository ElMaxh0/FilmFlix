import React from "react";
import styled from 'styled-components'
const Footer = styled.div `
{
Background:blue;
align-items: center;
justify-content: center;
align-text: center;
color: rgba(0, 196, 255, 0.9);
border-bottom-right-radius: 50px;
border: rebeccapurple;
border-top-left-radius: 50px;
}
&div{
    border-bottom-right-radius: 50px;
    border: rebeccapurple;
    border-top-left-radius: 50px;
}
& p{

    text-align: center;
}
`
export function Copirights(){
    return(
        <Footer>
        <p>Feito com <strong>❤</strong> por AleHot</p>
        <p>Direitos de Imagem Netflix</p>
        <p>API de dados TheMoovieDb </p>
        <p>Inspirado em Netflix </p>
        <p>React App</p>
        </Footer>
    )
}