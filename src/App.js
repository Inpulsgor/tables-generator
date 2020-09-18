import React, { useState } from "react";

import { FirsForm, SecondForm } from "./components";

const App = () => {
const [inputValue, setInputValue] = useState('');

  const handleChange = ({target: {value}}) => setInputValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e);
  }

  return (
    <main className="main">
    <div className="main__container">
      <FirsForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <SecondForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* <ModalForm /> */}
      {/* <Table /> */}
    </div>
    </main>
  );
};

export default App;
