import React from 'react';

function Separator({onSwapClick, onEqualClick}) {
  return (
    <div>
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
