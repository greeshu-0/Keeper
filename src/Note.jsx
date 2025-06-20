import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note({ items, onDelete }) {
  return (
    <div>
      {items.map((item, index) => (
        <div className="note" key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <button onClick={()=>onDelete(index)}><DeleteIcon /></button>
        </div>
      ))}
    </div>
  );
}
export default Note;
