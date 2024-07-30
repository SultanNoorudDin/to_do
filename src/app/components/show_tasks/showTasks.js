"use client";
import React, { useState,useEffect } from "react";

const ShowTasks = ({ list }) => {
  const [list1,setList1] = useState(list);
  console.log(list1," list initialized")

  useEffect(() => {
    if(list.length>0)
    {
      setList1([...list1,list?.[list.length-1]])
      console.log(list1, "list after render");
    }
  }, [list]);

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
  // console.log(list," list")

  return (
      <>
        <div>
          {list1.length > 0 ? (
            list1.map((item, index) => (
              <div key={index} className="flex gap-24">
                <span>{item.text}</span>
                {/* ... rest of the code */}
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
