import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';

const ImageAscension = (props) => {

    const [isImage, setIsImage] = useState(1)
    //console.log(Object?.values(props?.data));
    const [dataImage, setDataImage] = useState(props.data? Object.values(props.data) : [])

    useEffect(() => {
        setDataImage(props.data? Object.values(props.data) : [])
    }, [])

    console.log(dataImage);

    return (
        <div>
            <div>
                {dataImage.map(item=>{
                    console.log(item)
                    return <ButtonAscension function={()=>setIsImage()} numero={1}></ButtonAscension>
                })}
            </div>
            <div>
                <img src={props?.data ? props?.data[isImage] : ''}></img>
            </div>
        </div>
    );
};

export default ImageAscension;

const styledDiv = styled.div`

`;