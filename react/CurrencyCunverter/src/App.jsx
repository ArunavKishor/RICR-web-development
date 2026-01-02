import React from "react";
import Header from "./component/Header";
import Currency from "./component/Currency";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Currency />
    </>
  );
};

export default App;