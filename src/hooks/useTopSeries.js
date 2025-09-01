import { Api_options } from '../utils/constants' 
import { useDispatch } from 'react-redux'
import {addTopSeries} from '../utils/moviesSlice'
import  { useEffect } from 'react'

const useTopSeries = ()=>{
    const dispatch = useDispatch();
    const getTopSeries = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated', Api_options)
        const json = await data.json(); 
        dispatch(addTopSeries(json.results));
    }
    useEffect(()=>{
        getTopSeries();
    },[]);  
}

export default useTopSeries;