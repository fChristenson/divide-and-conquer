import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { FooDialog } from "./FooDialog";
import { BarDialog } from "./BarDialog";
import { showDialog } from "./showDialog";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const showFooDialog = true && open;
  const showBarDialog = true && open;
  const showBazDialog = false && open;

  return (
    <>
      <button style={{ padding: "16px" }} onClick={() => setOpen(true)}>
        Open
      </button>
      {showDialog(showFooDialog, showBarDialog, showBazDialog)}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
