import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";

const listGroupItems = ["New York", "San Francisco", "Tokyo", "London"];
function App() {
  // state hooks
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div>
      <Message message="Where shall we go next?" />
      <ListGroup
        items={listGroupItems}
        heading="Cities"
        onSelectItem={(item) => setSelectedCity(item)}
      />
      {!!selectedCity && (
        <Alert color="success">
          Yay, let's go to <b>{selectedCity}</b>!!
        </Alert>
      )}
    </div>
  );
}

export default App;
