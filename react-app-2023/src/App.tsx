import { FaBeer } from "react-icons/fa";
import { BiBeer } from "react-icons/bi";
import { useState } from "react";
import Alert from "./components/Alert";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";

const listGroupItems = ["New York", "San Francisco", "Tokyo", "London"];
function App() {
  // state hooks
  const [selectedCity, setSelectedCity] = useState("");
  const [isAlertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <div>
        <BiBeer />
        <FaBeer />
      </div>
      <Message message="Where shall we go next?" />
      <ListGroup
        items={listGroupItems}
        heading="Cities"
        onSelectItem={(item) => {
          setSelectedCity(item);
          setAlertVisibility(true);
        }}
      />
      <Alert isVisible={isAlertVisible} color="success">
        <span>
          Yay, let's go to <b>{selectedCity}</b>!!
        </span>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setAlertVisibility(false)}
        ></button>
      </Alert>
    </div>
  );
}

export default App;
