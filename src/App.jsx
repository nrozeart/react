import { Form } from './components/Form';
import { Form as FormClass } from './class-components/Form';
import { Count as CountClass } from './class-components/Count';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

export const App = () => {
  const [name, setName] = useState('geek')

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }
  return (
    <div className="App">
      {/* <CountClass count={10} />
      <hr />
      <FormClass /> */}
      <Count />
      <hr />
      <h3>Parent component</h3>
      <input onChange={handleChangeName} />
      <h3>Child component</h3>
      <Child name={name} />
    </div>
  );
}

