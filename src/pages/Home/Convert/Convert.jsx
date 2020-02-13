import React, { useState } from 'react';

import { fromDecimal, toDecimal, useTable } from '../../../utils';
import Input from './Input/Input';
import Separator from './Separator/Separator';
import Output from './Output/Output';

function Convert({system, table}) {
    const [fromSystem, setFromSystem] = useState(10);
    const [toSystem, setToSystem] = useState(system);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSwap = () => {
        let temp = fromSystem;

        setFromSystem(toSystem);
        setToSystem(temp);
    };

    return (
      <main className="content">
        <Input 
          badge={fromSystem} 
          value={from} 
          onChangeValue={(value) => setFrom(value)} 
        />

        <Separator 
          onSwapClick={handleSwap} 
          onEqualClick={() => setTo(toSystem === system 
            ? fromDecimal(from, system, table)
            : toDecimal(from, system, table)
          )}
        />


        <Output
          badge={toSystem} 
          value={to} 
        />
      </main>
    );
}

export default Convert;
