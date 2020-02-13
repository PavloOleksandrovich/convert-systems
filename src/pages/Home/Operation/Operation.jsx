import React, { useState } from 'react';

import Controller from '../Controller/Controller';
import Switch from './Switch/Switch';
import { 
    addition, 
    subtraction, 
    multiplication, 
    division
} from '../../../utils/system';

const operations = {
    '+': addition,
    '-': subtraction,
    '*': multiplication,
    '/': division
};

function Operation({system, table}) {
    const [operation, setOperation] = useState('+');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [result, setResult] = useState('');

    return (
        <main className="content">
            <Controller 
                value={from} 
                onChangeValue={(value) => setFrom(value)} 
            />

            <Switch 
                operations={Object.keys(operations)}
                current={operation} 
                onChangeOption={(value) => setOperation(value)}
            />

            <Controller 
                value={to} 
                onChangeValue={(value) => setTo(value)} 
            />

            <div style={{margin: '0 10px'}}>
                <i 
                    style={{marginTop: '7px'}}
                    className="material-icons" 
                    onClick={() => setResult(operations[operation]
                        (from, to, system, table))}
                >
                    keyboard_tab
                </i>
            </div>

            <Controller 
                value={result} 
                onChangeValue={() => {}} 
            />
        </main>
    );
}

export default Operation;
