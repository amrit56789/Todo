import { useState } from "react";
const Todo = () => {
  const [input, setInputData] = useState({
    item: "",
    description: "",
    authorName: "",
    startDate: "",
    endDate: ""
  });
  const [item, setItem] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submit = () => {
    setItem([...item, input]);
  };

  const deleteItem = (index) => {
    const updateItem = item.filter((element, ind) => {
      return index !== ind;
    });
    setItem(updateItem);
  };

  return (
    <>
      <form>
        <div className="container">
          <input
            type="text"
            placeholder="Enter a items "
            id="item"
            name="item"
            value={input.item}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Enter a description "
            id="description"
            name="description"
            value={input.description}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Enter a AuthorName "
            id="authorName"
            name="authorName"
            value={input.authorName}
            onChange={handleChange}
          />
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={input.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={input.endDate}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={submit}>Add</button>

      <div className="showItem">
        {item.map((element, index) => {
          return (
            <div key={index}>
              <p>{element.item}</p>
              <p>{element.description}</p>
              <p>{element.authorName}</p>
              <p>{element.startDate}</p>
              <p>{element.endDate}</p>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Todo;
