import React, { useState } from 'react';
import ButtonAscension from '../buttonAscension';

const Comments = ({comments=[]}) => {
    
    const [currentComment, setCurrentComment ] = useState('')

    console.log(comments);

    return (
        <div>
            <div>
                {
                comments.map(item=>{
                    return <ButtonAscension function={() => setCurrentComment(item.comment)} numero={item.id} name={'Comment'} />
                })}
            </div>
            <div>
                {currentComment}
            </div>
        </div>
    );
};

export default Comments;