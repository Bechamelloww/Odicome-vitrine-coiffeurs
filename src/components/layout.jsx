// components/LayoutComponent.jsx
import React from 'react';

const LayoutComponent = ({ component: Component }) => {
  return (
    <div className="px-40 w-100">
      <Component />
    </div>
  );
};

export default LayoutComponent;
