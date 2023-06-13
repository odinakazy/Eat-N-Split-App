import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill(props) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendBill = bill ? bill - expense : "";
  const submitHandler = (event) => {
    event.preventDefault();
    if (!bill || !expense) return;
    props.onsplitBill(whoIsPaying === "user" ? friendBill : -expense);
  };
  return (
    <form className="form-split-bill" onSubmit={submitHandler}>
      <h2>Split a bill with {props.onFriendDetail.name}</h2>
      <label> 💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(+event.target.value)}
      />
      <label> 🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(event) =>
          setExpense(+event.target.value > bill ? expense : +event.target.value)
        }
      />

      <label> 👫 {props.onFriendDetail.name}'s expense</label>
      <input type="text" disabled value={friendBill} />

      <label> 🤑 who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoIsPaying(event.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{props.onFriendDetail.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
