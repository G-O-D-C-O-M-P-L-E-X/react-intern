import React from 'react'
import axios from 'axios'

const Post = () => {
    const getPostData= async ()=>{
        try{
            const data =axios.get('https://jsonplaceholder.typicode.com/');
            console.log(data)
        }
        catch(error){
            console.log(error);
            alert("Error getting data")
        }
    }
  return (
    <div className='w-screen h-screen justify-center flex '>
        <button onClick={getPostData}>Get Data</button>

    </div>
  )
}

export default Post