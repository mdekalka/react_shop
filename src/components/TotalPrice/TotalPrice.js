import React from 'react';

const TotalPrice = ({ nodeRef, total }) => {
  return <div className="total-price" ref={nodeRef}>Total: {total} $</div>
};

export default TotalPrice;
