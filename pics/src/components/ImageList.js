import './ImageList.css';
import React from 'react';
import Imagecard from './ImageCard';


const Imagelist = props => {

  const images =  props.images.map((image) => {
        return <Imagecard key={image.id} image={image}/>
    });


    return <div className='image-list'>{images}</div>
};

export default Imagelist;