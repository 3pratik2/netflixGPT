import { Api_options } from '../utils/constants' 
import { useDispatch } from 'react-redux'
import {addUpcoming} from '../utils/moviesSlice'
import  { useEffect } from 'react'

const useUpcoming = ()=>{
    const dispatch = useDispatch();
    const getUpcoming = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', Api_options)
        const json = await data.json(); 
        dispatch(addUpcoming(json.results));
    }
    useEffect(()=>{
        getUpcoming();
    },[]);  
}

export default useUpcoming;