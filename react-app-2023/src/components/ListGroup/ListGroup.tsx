import { useState } from "react";

interface Props {
  items?: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}

function ListGroup({
  items = [],
  heading = "List Group",
  onSelectItem = (item) => console.log(item),
}: Props) {
  // state hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;