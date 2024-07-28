"use client";
import React, { useState } from "react";
import ShowTasks from "../show_tasks/showTasks"; // Assuming ShowTasks handles tasks

const Textbox = () => {
  const [userInput, setUserInput] = useState("");
  const [taskList, setTaskList] = useState([]); // Use a descriptive name

  const generateUniqueId = () => Math.floor(Math.random() * 1000000); // Generate random ID

  const addTask = () => {
    if (userInput.trim() !== "") {
      const newTask = {
        id: generateUniqueId(),
        text: userInput,
      };
      setTaskList([...taskList, newTask]); // Create a new array with the updated content
      setUserInput("");
    }
  };

  const updateInput = (value) => {
    setUserInput(value);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="enter a task"
          value={userInput}
          onChange={(event) => updateInput(event.target.value)}
          required
        />
        <button type="submit" onClick={addTask}>
          Submit
        </button>
      </form>

      <ShowTasks list={taskList} /> {/* Pass the task list with IDs */}
    </>
  );
};

export default Textbox;
