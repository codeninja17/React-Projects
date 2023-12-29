import { useState } from "react";
import Stats from "./Components/Stats";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackagingList from "./Components/PackagingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
  { id: 4, description: "Charger", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleItemAdd(item) {
    setItems(() => [...items, item]);
  }

  function handleDelete(itemId) {
    setItems(() => items.filter((item) => item.id !== itemId));
  }

  function handleToggle(itemId) {
    setItems(() =>
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItemAdd} />
      <PackagingList
        items={items}
        onDeleteItems={handleDelete}
        onToggleItem={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
