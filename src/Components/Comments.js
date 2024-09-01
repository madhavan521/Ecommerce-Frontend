import React, { useState } from 'react';

const Comments = () => {
   const[comment,setComment]= useState([])
   const [data,setData]=useState([])
   const handleComment=()=>{
    setData(prevalue=>[...prevalue ,comment])
    setComment('')
   }

  return (

    <div>

    <div>
        {
            data && data.map( (item,index)=>
            <div key={index}>
                <p>{item}</p>
            </div>

              )
        }
    </div>
<textarea className='form-control' placeholder='Enter the Comment' 
 value={comment} name='commentname' onChange={(e)=>setComment(e.target.value)}  />
 <button className='btn btn-success w-15 mt-1'  onClick={handleComment}>Post</button>
    </div>
  );
}

export default Comments;
