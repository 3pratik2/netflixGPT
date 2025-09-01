import { Api_options } from '../utils/constants' 
import { useDispatch } from 'react-redux'
import {addTopRated} from '../utils/moviesSlice'
import  { useEffect } from 'react'

const useTopRated = ()=>{
    const dispatch = useDispatch();
    const getTopRated = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=3', Api_options)
        const json = await data.json(); 
        dispatch(addTopRated(json.results));
    }
    useEffect(()=>{
        getTopRated();
    },[]);  
}

export default useTopRated;