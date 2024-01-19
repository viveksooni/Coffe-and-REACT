import { useState } from "react";
import Heading from "./components/Heading";
import FriendsName from "./components/FriendsName";
import Container from "./components/Container";
import ErrorMsg from "./components/ErrorMsg";
import InputBar from "./components/InputBar";

function App() {
  const [friendsList, setFriendList] = useState([]);
  const [mark, setMarked] = useState([]);

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFriendList = [...friendsList, event.target.value];
      setFriendList(newFriendList);
      event.target.value = "";
    }
  };

  const onClick = (name) => {
    console.log(name.target.value);
    let newFriendList = [...friendsList, name.target.value];
    name.target.value = "";
    setFriendList(newFriendList);
  };

  const unfriend = (name) => {
    friendsList.splice(friendsList.indexOf(name), 1);
    let newList = [...friendsList];
    console.log(newList);
    setFriendList(newList);
    console.log(`unfriended ${name}`);
  };

  const addMarked = (name) => {
    if (mark.includes(name)) {
      mark.splice(mark.indexOf(name), 1);
      console.log(mark);
      setMarked([...mark]);
    } else setMarked([...mark, name]);
  };
  return (
    <Container>
      <Heading></Heading>
      <InputBar
        handleOnKeyDown={handleOnKeyDown}
        handleOnclick={onClick}
      ></InputBar>
      <ErrorMsg friends={friendsList}></ErrorMsg>
      <FriendsName
        friends={friendsList}
        unfriend={unfriend}
        marked={mark}
        mark={addMarked}
      ></FriendsName>
    </Container>
  );
}

export default App;
