import { useState } from "react"
import { useParams } from "react-router"
export default function MoviePage(){
    const {id} = useParams
    
    const [movieInfo, setMovieInfo] = useState([])
    return(
        <>
        </>
    )
}