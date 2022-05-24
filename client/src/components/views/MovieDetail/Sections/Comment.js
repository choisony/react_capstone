import axios from 'axios'
import React, {useState} from 'react'
import {useSelector } from 'react-redux';
import { Input } from 'antd';
import SingleComment from './SingleComment';
const { TextArea } = Input;

function Comment(props) {

    const user = useSelector(state => state.user);
    const [Comment, setComment] =useState("")

    const handleClick = (event) => {
        setComment(event.currentTarget.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const variables = {
            writer: user.userData._id,
            postId : props.postId,
            content: Comment
        }
        axios.post('/api/comment/saveComment',variables)
        .then(response => {
            console.log(response)
            if (response.data.success ){
                console.log(response.config.data)
                setComment("")
                props.refreshFunction(response.config.data)

            }else{
                alert ('커멘트를 저장하지  못했습니다.')
            }
        })
    }

  return (
    <div>
        <br/>
        <p> 좌석 후기</p>
        <hr/>
        {props.Comments && props.Comments.map((comment,index) =>(
        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction}/>
        ))}

        { /* Root Comment Lists */}

        <form style ={{display:'flex'}} onSubmit= {onSubmit}>
            <TextArea
                style = {{ width : '100%', borderRadius : '5px'}}
                onChange = {handleClick}
                value = {Comment}
                placeholder ="좌석에 대한 후기를 작성해주세요"
            />
            <br/>
            <button style ={{width: '20%', height: '52px'}} onClick= {onSubmit}> 등록하기 </button>

        </form>
    </div>
  )
}

export default Comment