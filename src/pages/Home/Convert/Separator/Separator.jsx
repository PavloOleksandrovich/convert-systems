import React from 'react';

function Separator({onSwapClick, onEqualClick}) {
  return (
    <div style={{margin: '0 20px'}}>
        <i 
            className="material-icons" 
            onClick={() => onSwapClick()}
        >
            sync_alt
        </i>

        <i 
            className="material-icons" 
            onClick={() => onEqualClick()}
        >
            keyboard_tab
        </i>
    </div>
  );
}

export default Separator;
