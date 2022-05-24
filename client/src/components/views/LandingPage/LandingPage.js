import React, {useEffect, useState} from 'react'
import { IMAGE_BASE_URL } from '../../Config';
import MainImage from './Section/MainImage';
import GridCards from '../commons/GridCards';
import {Row}  from 'antd'
// import MovieDetail from '../MovieDetail/MovieDetail';
// import MovieInfo from '../MovieDetail/Sections/MovieInfo';

function LandingPage() {
    const [Movies, setMovies] = useState([])
    const [mainMovieImage, setMainMovieImage] = useState(null)

    useEffect(()=> {
        const endpoint = `http://localhost:4000/api`;
        fetchMovies(endpoint)

    },[])

    const fetchMovies = (endpoint ) => {
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setMovies([...Movies, ...response.elements[0].elements])
            setMainMovieImage(response.elements[0].elements[0])
        })
    }


    return (
        <div style = {{width:'100%', margin: '0'}}>
            {/* main image*/}
            {mainMovieImage &&
            <MainImage 
                image = {`${IMAGE_BASE_URL}${mainMovieImage.elements[8].elements[0].text}`}
                title={mainMovieImage.elements[5].elements[0].text} 
                text = {mainMovieImage.elements[2].elements[0].text}
            />
            }


            <div style= {{width: '85%',margin : '1rem auto'}}>

                <h2>현재 상영작</h2>
                <hr/>

                <Row gutter ={[32,32]}>
                    {Movies &&Movies.map((movie,index)=> (
                        <React.Fragment key = {index}>
                            <GridCards 
                                landingPage
                                image= {movie.elements[7].elements[0].text ?
                                    `${IMAGE_BASE_URL}${movie.elements[8].elements[0].text}` : null}
                                movieId = {movie.elements[6].elements[0].text}
                                moviename = {movie.elements[5].elements[0].text}        
                            />
                        </React.Fragment>
                    ))}
                </Row>

            </div>

        </div>
        
    )
}

export default LandingPage
