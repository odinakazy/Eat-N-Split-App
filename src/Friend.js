import React from "react";
import Button from "./Button";
function Friend(props) {
  const isSelected = props.onFriendDetail?.id === props.list.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={props.list.image} alt="profile" />
      <h3>{props.list.name}</h3>
      {props.list.balance < 0 && (
        <p className="red">
          You owe {props.list.name} {Math.abs(props.list.balance)}$
        </p>
      )}
      {props.list.balance > 0 && (
        <p className="green">
          {props.list.name} owe you {props.list.balance}$
        </p>
      )}
      {props.list.balance === 0 && <p>You and {props.list.name} are even</p>}
      <Button onClick={() => props.onClick(props.list)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
