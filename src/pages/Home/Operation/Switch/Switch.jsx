import React from 'react';

function Switch({operations, current, onChangeOption}) {
    return (
        <div style={{margin: '0 20px'}}>
            <select 
                className="custom-select"
                value={current}
                onChange={(e) => onChangeOption(e.target.value)}
            >
                {operations.map( (operation) => (
                    <option 
                        key={operation} 
                    >
                        {operation}
                    </option>)
                )}
            </select>
        </div>
    );
}

export default Switch;
