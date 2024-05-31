// components/BentoContentComponent.jsx
import React from 'react';

const BentoContentComponent = ({ title, image, description, className }) => {
  return (
    <div className={`${className}`}>
      <div className= 'flex items-center justify-center w-full mb-5'>
        <img src={image} alt={title} className='h-40' />
      </div>
      <h5 className='font-bold'>{title}</h5>
      <p className='font-light'>{description}</p>
    </div>
  );
};

export default BentoContentComponent;
