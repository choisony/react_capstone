import React from 'react'
import {useEffect, useState} from 'react'
import {IMAGE_BASE_URL} from '../../Config';
import MainImage from '../LandingPage/Section/MainImage';
import MovieInfo from './Sections/MovieInfo';
import axios from 'axios'
import Comment from './Sections/Comment'

function MovieDetail(props) {
    let movieId = props.match.params.movieId;
    const [Movie, setMovie] = useState(null)
    const [SeatToggle,  setSeatToggle] = useState(false)
    const [Comments, setComments]  = useState([])
    const movieVariable = {
        postId: movieId
    }
    const callApi = async ()=>{
        axios
            .get("http://localhost:4000/api")
            .then((res) => {
                console.log(res.data)
                setMovie(res.data)
        })

    }

    const toggleSeatView =() =>{
        setSeatToggle(!SeatToggle)
    }

    const callData = async() => {
        axios.post('/api/comment/getComments',movieVariable)
        .then(response=> {
            if(response.data.success){
                console.log(response)
                console.log('response.data.comments', response.data.comments)
                setComments(response.data.comments)
            }else{
                alert('실패')
            }
        })
    }
    


    useEffect(()=> {
        callApi();
        callData();
        
    },[])

    const updateComment =  (newComment)  =>{
        setComments(Comments.concat(newComment))
    }

    return (
        <div>
        {/* Header */}
            {Movie &&
            <MainImage 
                image = {`${IMAGE_BASE_URL}${Movie.elements[0].elements[movieId-1].elements[8].elements[0].text}`}
                title={Movie.elements[0].elements[movieId-1].elements[5].elements[0].text} 
                text = {Movie.elements[0].elements[movieId-1].elements[2].elements[0].text}
            />
            }

            {/* Body */}
            <div style = {{width: '85%', margin: 'auto'}}>

                {/* Movie Info */}
                {Movie &&
                <MovieInfo
                    movie= {Movie}
                    movieId = {movieId}
                />
                }
                <br />

                {/* Review image */}

                
                <div style =  {{display : 'flex', justifyContent:'center', margin: '2rem'}}>
                    <button onClick={toggleSeatView}> 좌석 후기 보러가기</button>
                </div>

                <div style= {{display : 'flex', justifyContent:'center', margin: 'auto'}}>
                    {SeatToggle &&
                    <img src = {`/assets/${movieId}.png` } alt= "profile"></img>
                    }
                </div>

                {SeatToggle &&
                <Comment Comments={Comments} postId={movieId} refreshFunction= {updateComment}/>                
                }
              

                
            </div>

        </div>
    )
}

export default MovieDetail
