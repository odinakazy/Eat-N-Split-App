import FriendList from "./FriendList";
import FormList from "./FormList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [friendDetail, setFriendDetail] = useState(null);
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);
  const openHandler = () => {
    setShowForm(true);
  };
  const closeHandler = () => {
    setShowForm(false);
  };
  const addFriendHandler = (newFriend) => {
    setFriends((prevState) => [...prevState, newFriend]);
    setShowForm(false);
  };
  const showSlplit = (friend) => {
    setFriendDetail((cur) => (cur?.id === friend.id ? null : friend));
  };
  const splitBill = (value) => {
    setFriends((friend) =>
      friend.map((fri) =>
        fri.id === friendDetail.id
          ? { ...fri, balance: fri.balance + value }
          : fri
      )
    );
    setFriendDetail(null);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friend={friends}
          onClick={showSlplit}
          onFriendDetail={friendDetail}
        />
        {showForm && <FormList onAddFriend={addFriendHandler} />}
        {!showForm && <Button onClick={openHandler}>Add friend </Button>}
        {showForm && <Button onClick={closeHandler}>close </Button>}
      </div>
      {friendDetail && (
        <FormSplitBill onFriendDetail={friendDetail} onsplitBill={splitBill} />
      )}
    </div>
  );
}

export default App;
