import React from 'react'
import {Descriptions, Badge} from 'antd';

function MovieInfo(props) {

    let {movie} = props;
    let movieId = props.movieId;

    return (
        
        <Descriptions title = "뮤지컬 정보" bordered>
            console.log(movie);
            <Descriptions.Item label = "제목"> {movie.elements[0].elements[movieId-1].elements[5].elements[0].text}</Descriptions.Item>
            <Descriptions.Item label = "장소"> {movie.elements[0].elements[movieId-1].elements[0].elements[0].text} </Descriptions.Item>
            <Descriptions.Item label = "상영 횟수"> {movie.elements[0].elements[movieId-1].elements[1].elements[0].text} </Descriptions.Item>
            <Descriptions.Item label = "공연기간"> {movie.elements[0].elements[movieId-1].elements[2].elements[0].text} </Descriptions.Item>
            <Descriptions.Item label = "장르" > {movie.elements[0].elements[movieId-1].elements[3].elements[0].text} </Descriptions.Item>
            <Descriptions.Item label = "공연장"> {movie.elements[0].elements[movieId-1].elements[4].elements[0].text} </Descriptions.Item>
            <Descriptions.Item label = "순위"> {movie.elements[0].elements[movieId-1].elements[6].elements[0].text} </Descriptions.Item>
            <Descriptions.Item label = "좌석수"> {movie.elements[0].elements[movieId-1].elements[7].elements[0].text} </Descriptions.Item>
        </Descriptions>
    ) 
}

export default MovieInfo
