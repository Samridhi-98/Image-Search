import React, { useEffect, useState } from 'react';

function ImageCard(props) {
    const { image } = props

    const [spans, setSpans] = useState(0)

    const imageRef = React.createRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', calcSize);
    },[])

    const calcSize = () => {
        const height = imageRef.current.clientHeight;
        setSpans(Math.ceil(height / 10));
    };

    const { description, urls } = image;
    return (
      <div style={{ gridRowEnd: `span ${ spans }` }}>
          <img
            ref={ imageRef }
            alt={ description }
            src={ urls.regular }/>
      </div>
    );

}

export default ImageCard;