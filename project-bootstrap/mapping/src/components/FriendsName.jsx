import React from "react";
import List from "./List";

function FriendsName({ friends, unfriend, mark, marked }) {

  return (
    <>
      <ul className="list-group">
        {friends.map((friend) => (
          <List
            name={friend}
            key={friend}
            brought={marked.includes(friend)}
            unfriend={unfriend}
            addMarked={mark}
          ></List>
        ))}
      </ul>
    </>
  );
}

export default FriendsName;
