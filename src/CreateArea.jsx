import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });
  let [list, addToList] = useState([]);
  function handleAddNote(event) {
    let { name, value } = event.target;
    setNote((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  }
  function handleAddNoteToList() {
    addToList((prevList) => [...prevList, note]);
    setNote({ title: "", content: "" });
  }
  function handleDeleteNote(id){
    addToList((prevList)=>prevList.filter((_,index)=>index!==id));
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleAddNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleAddNote}
        />
        <button type="button" onClick={handleAddNoteToList}>Add</button>
      </form>
      <Note items={list} onDelete={handleDeleteNote}/>
    </div>
  );
}

export default CreateArea;
