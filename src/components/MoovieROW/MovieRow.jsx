import React from "react";
import { useState } from "react";
import './styles.css'
import { FilmFlixListsTitle, FilmFlixRoeListItens, FilmFlixMovieRowListArea, FilmFlixMovieRowListContent, FilmFlixRoeListItensImagens, Buttons } from "./styles";


export default ({title, items}) => {
    const [scrollX , setScrollX ] = useState(0);
    function Scroling (direction){
        var divWidth=(items.results.length)*31
        var datapx= divWidth * (100 / document.documentElement.clientWidth);
        var datahpx= scrollX * (100 / document.documentElement.clientWidth);
        var widthDiv= ((Number(document.getElementById("scrollList").offsetWidth)/document.documentElement.clientWidth)*100)+12
        if(direction == 1){
            if(datahpx <= (-datapx-10)){
                var dataScroll= 0
             }
            else {
                var dataScroll = ((Number(scrollX)-100));
            }
        }

        else if(direction == 2){
             if(scrollX >= (-0)){
                //var dataScroll= (-((items.results.length) * 31)) 
                var dataScroll= (-(widthDiv));
             }
             else{
                var dataScroll = ((Number(scrollX)+100));
             }
        }

        setScrollX(dataScroll);
        console.log(datahpx+"/"+datapx)
        console.log(widthDiv)
        console.log(items.results.length)
        console.log(dataScroll);
        return dataScroll
    }
    
    
    return(
        <div>
            <FilmFlixListsTitle>{title}</FilmFlixListsTitle>
            <FilmFlixMovieRowListArea>
                <FilmFlixMovieRowListContent style={{
                    marginLeft: scrollX + "vh",
                    width:(((items.results.length+1) * 32)+"vw")
                }} id={"scrollList"} >
                    <div>
                    <Buttons className={"prev"} onClick={() => Scroling(1)} />
                    <Buttons className={"next"} onClick={() => Scroling(2)} />
                    </div>
                {items.results.length > 0 && items.results.map((item, key )=>(
                    <FilmFlixRoeListItens >
                        <FilmFlixRoeListItensImagens src ={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
                    </FilmFlixRoeListItens>
                ))}
                </FilmFlixMovieRowListContent>
            </FilmFlixMovieRowListArea>
        </div>
    )
}
