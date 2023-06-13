import React from "react";
import Friend from "./Friend";

function FriendList(props) {
  return (
    <div className="sidebar">
      <ul>
        {props.friend.map((fri) => (
          <Friend
            list={fri}
            key={fri.id}
            onClick={props.onClick}
            onFriendDetail={props.onFriendDetail}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
