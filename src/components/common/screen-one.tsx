import React from 'react';

const styles = {
  ImageContainer: {
    top: '0px',
    left: '0px',
    width: '360px',
    height: '668px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/27cf8e99-b300-484a-b3bb-581e4cf898e0.png',
}

type PropsType ={
  image:string
}
const Image = (props:PropsType) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;