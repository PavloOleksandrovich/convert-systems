import React from 'react';

function Controller({badge, value, onChangeValue}) {
  return (
    <div>
        <input 
            type="text" 
            className="form-control" 
            value={value}
            onChange={(e) => onChangeValue(e.target.value)}
        />

        <span className="badge badge-secondary">{badge}</span>
    </div>
  );
}

export default Controller;
