import React from "react";

import { FirsForm, SecondForm } from "./components";

const App = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <FirsForm handleChange={handleChange} />
      <SecondForm handleChange={handleChange} />
      {/* <ModalForm /> */}
      {/* <Table /> */}
    </div>
  );
};

export default App;
