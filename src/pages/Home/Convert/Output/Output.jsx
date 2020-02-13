import React from 'react';

function Output({badge, value}) {
    return (
        <div>
            <h5 className="display-6"
                dangerouslySetInnerHTML={{__html: value 
                    ? value 
                    : 'wait for input'
                }}
            ></h5>

            <span className="badge badge-secondary">{badge}</span>
        </div>
    );
}

export default Output;
