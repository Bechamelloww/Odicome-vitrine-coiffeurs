import React from 'react';

const BentoContentComponent = ({ title, image, description, className }) => {
  return (
    <div className={`rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800 ${className}`} role="article" aria-labelledby={`${title.replace(/\s+/g, '-').toLowerCase()}-title`}>
      <div className='flex items-center justify-center w-full mb-5'>
        <img src={image} alt={title} className='h-40' />
      </div>
      <h5 id={`${title.replace(/\s+/g, '-').toLowerCase()}-title`} className='font-bold text-lg text-gray-900 dark:text-gray-100'>
        {title}
      </h5>
      <p className='font-light text-gray-700 dark:text-gray-300'>
        {description}
      </p>
    </div>
  );
};

export default BentoContentComponent;
