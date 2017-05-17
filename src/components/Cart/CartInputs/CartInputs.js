import React from 'react';

const CartInputs = ({ nodeRef, inputRef, formState, onInputChange}) => {
  return (
    <div ref={nodeRef} >
      <div className="form-row">
        <label>
          <input 
            type="text"
            autoComplete="off"
            placeholder='Product name'
            name="name"
            autoFocus
            className="full-width"
            value={formState.name}
            ref={inputRef}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          <input 
            type="number"
            autoComplete="off"
            placeholder='Product price'
            name="price"
            min="0"
            className="full-width"
            value={formState.price}
            onChange={onInputChange}
          />
        </label>
      </div>
    </div>
  )
};

export default CartInputs;