import { Api_options } from '../utils/constants' 
import { useDispatch } from 'react-redux'
import {addTrending} from '../utils/moviesSlice'
import  { useEffect } from 'react'

const useTrendingMovies = ()=>{
    const dispatch = useDispatch();
    const getTrending = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/week', Api_options)
        const json = await data.json(); 
        dispatch(addTrending(json.results));
    }
    useEffect(()=>{
        getTrending();
    },[]);  
}

export default useTrendingMovies;