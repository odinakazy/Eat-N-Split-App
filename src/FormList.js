import React, { useState } from "react";
import Button from "./Button";
function FormList(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const inputNameHandler = (event) => {
    setName(event.target.value);
  };

  const inputImageHandler = (event) => {
    setImage(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    props.onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form onSubmit={submitHandler} className="form-add-friend">
      <label>👫Friend name</label>
      <input type="text" value={name} onChange={inputNameHandler} />

      <label>🌄 Image URL</label>
      <input type="text" value={image} onChange={inputImageHandler} />

      <Button>Add</Button>
    </form>
  );
}

export default FormList;
