import React from 'react';
import data from './state/data.json'
import {Input} from "./common/components/Input/Input";

export const App = () => {
  return (
    <div>
        {data.data.map(i => <div>{i.question}</div>)}
      <Input/>
    </div>
  )
};

