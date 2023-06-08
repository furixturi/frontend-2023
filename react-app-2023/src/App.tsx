import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

const listGroupItems = ["New York", "San Francisco", "Tokyo", "London"];
function App() {
  return (
    <div>
      <Message message="Where shall we go next?" />
      <ListGroup
        items={listGroupItems}
        heading="Cities"
        onSelectItem={(item) => alert("Let's go to " + item + "!")}
      />
      <Alert>
        <span>Alert!!</span>
      </Alert>
    </div>
  );
}

export default App;
