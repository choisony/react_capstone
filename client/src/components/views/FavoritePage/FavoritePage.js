import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import './favorite.css';

function FavoritePage() {

  const [Favorites, setFavorites] = useState([])

  // useEffect(()=> {
  //   Axios.post('/api/favorite/getFavoritedMovie', {userFrom: localStorage.getItem('userId')})
  //   .then(response => {
  //     if (response.data.success) {
  //       console.log(response.data)
  //       setFavorites(response.data)
  //     } else {
  //       alert('영화 정보를 가져오는데 실패했습니다.')
  //     }
  //   })
  // }, [])

  return (
    <div style= {{width: '85%', margin: '3rem auto'}}>
      <h2> Favorite Musicals </h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Musical Title</th>
            <th>Musical theater</th>
            <td>Remove from favorites</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>데스노트</td>
            <td>충무아트센터 대공연장</td>
            <td><button>Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FavoritePage