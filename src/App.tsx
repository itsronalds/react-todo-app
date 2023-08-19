import { ChangeEvent, useState } from 'react';

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState<string>('');

  const add = () => {
    if (item === '') {
      return alert('Item name is required.');
    }

    setItems((state) => [...state, item]);
    setItem('');
  };

  const remove = (itemName: string) => {
    const newItems = items.filter((item) => item !== itemName);
    setItems(newItems);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setItem(value as string);
  };

  // Render logic
  const listItems =
    items.length === 0 ? (
      <h2>Ups, No items registered</h2>
    ) : (
      items?.map((item, index) => (
        <div key={item} className="item" onClick={() => remove(item)}>
          {index + 1} - {item}
        </div>
      ))
    );

  return (
    <div className="app">
      <div className="list">
        <h1>List of Items</h1>
        <hr />
        <div className="items">{listItems}</div>
        <div>
          <input type="text" placeholder="Enter item name..." value={item} onChange={onChange} />
          <button type="button" onClick={add}>
            Add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
