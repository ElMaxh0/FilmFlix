import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import  Tmdb  from './Tmdb';
import { ContainerFilmFlix, FilmFlixLists, FilmFlixPage } from './styles';
import MovieRow from './components/MoovieROW/MovieRow.jsx';
import Feature from './components/featuredMoovie/Feature';
import { Copirights } from './pages/copirights/copirights';

export default () =>{
  const [movieList, setMovieList] = useState([])
  useEffect(()=>{
    const loadData= async () =>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list)
    }
    loadData();
  },[])
  return(
    <ContainerFilmFlix >
      <FilmFlixPage>
        <Feature item={movieList}/>
        <FilmFlixLists>
          {
            movieList.map((item, key)=>(
                <MovieRow key={key} title={item.title} items={item.itens}/>
            ))
          }
        </FilmFlixLists>
      </FilmFlixPage>
      <Copirights />
    </ContainerFilmFlix>
  )
}