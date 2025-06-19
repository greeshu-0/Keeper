import React from "react";
function Note({ items, onDelete }) {
  return (
    <div>
      {items.map((item, index) => (
        <div className="note" key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <button onClick={()=>onDelete(index)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}
export default Note;
