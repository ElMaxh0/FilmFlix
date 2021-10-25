import { ListItem } from "@material-ui/core";
import React from "react";
import { FeatureMovie } from "./styles";
export default ({item}) =>{
    return(
        <FeatureMovie style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path});`
        }}>
            <div>{item.original_name}</div>
        </FeatureMovie>
    )
}