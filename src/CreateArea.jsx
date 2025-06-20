import React, { useState } from "react";
import Note from "./Note";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea() {
  let [note, setNote] = useState({
    title: "",
    content: "",
  });
  let [list, addToList] = useState([]);
  let [isClicked, setClick] = useState(false);
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
    setClick(false);
  }
  function handleClick() {
    setClick(true);
  }
  function handleDeleteNote(id) {
    addToList((prevList) => prevList.filter((_, index) => index !== id));
  }
  return (
    <div>
      <form className="create-note">
        <div style={{ display: isClicked ? "block" : "none" }}>
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleAddNote}
          />
        </div>
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked? 3 : 1}
          value={note.content}
          onChange={handleAddNote}
          onClick={handleClick}
        />
        <Zoom in={true}>
          <Fab type="button" onClick={handleAddNoteToList}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
      <Note items={list} onDelete={handleDeleteNote} />
    </div>
  );
}

export default CreateArea;
