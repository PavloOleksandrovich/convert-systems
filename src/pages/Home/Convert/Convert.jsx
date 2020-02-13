import React, { useState } from 'react';

import { fromDecimal, toDecimal } from '../../../utils';
import Controller from '../Controller/Controller';
import Separator from './Separator/Separator';

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
      <Controller 
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

      <Controller 
        badge={toSystem} 
        value={to} 
        onChangeValue={() => {}} 
      />
    </main>
  );
}

export default Convert;
