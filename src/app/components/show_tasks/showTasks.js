"use client";
import React, { useState,useEffect } from "react";

const ShowTasks = ({ list }) => {
  console.log(list," list")
  const [list1, setList1] = useState(list);
  console.log(list," list1")

  useEffect(() => {
    console.log(list1, "list1 after render");
  }, [list1]);

  const deleteItem = (id) => {
    const updatedList = list1.filter((item) => item.id !== id);
    setList1([...updatedList]); 
  };

  const editItem = (item) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = list1.map((listItem) =>
        listItem.id === item.id ? { ...listItem, text: editedTodo } : listItem
      );
      setList1([...updatedList]); 
    }
  };
  // console.log(list," list1")

  return (
    
      <>
      <div>
    {list1.length > 0 ? (
      list1.map((item, index) => (
        <div key={index}>
          <span>{item.text}</span>
          {/* ... rest of the code */}
          <span>{item.text}</span>
          <button onClick={() => deleteItem(item.id)}>delete</button>
          <button onClick={() => editItem(item)}>Edit</button>
        </div>
      ))
    ) : (
      <p>No tasks yet.</p>
    )}
  </div>
      </>
  );
};
export default ShowTasks;
