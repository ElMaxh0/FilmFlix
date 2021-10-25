import styled from "styled-components"
const FilmFlixListsTitle = styled.h2 `
margin:0px 0px 0px 1%;
font-size: 180%;
font-family: 'Festive', cursive;
z-index:+20;
`
const FilmFlixMovieRowListArea = styled.div `
display:block;
margin-bottom: 30px;
overflow-x:hidden;
overflow:hidden;

`
const FilmFlixMovieRowListContent= styled.div `

transition:all ease 1.0s;
`
const FilmFlixRoeListItens = styled.div`
display:inline-block;
width:22vw;

`
const FilmFlixRoeListItensImagens = styled.img`
width:100%;
transform:scale(0.9);
transition:all ease 0.5s;
&:hover{
    transform:scale(1.2);
}

`
const Buttons =styled.div `
width: 40px;
height: 100%;
background: rgba(0, 0, 0, 0.3);
position: absolute;
z-index: 10;
`
export{
    FilmFlixMovieRowListArea,
    FilmFlixListsTitle,
    FilmFlixRoeListItens,
    FilmFlixMovieRowListContent,
    FilmFlixRoeListItensImagens,
    Buttons
}