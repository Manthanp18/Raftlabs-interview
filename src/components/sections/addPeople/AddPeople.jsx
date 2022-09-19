import React, { useContext, useRef } from "react";
import User from "../../../models/User";
import AppContext from "../../../store/appContext";
import Form1 from "../../ui/Form1";

const AddPeople = () => {
  const appCtx = useContext(AppContext);
  const userNameRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userNameRef.current) return;
    appCtx.onNewUserEntry(new User(userNameRef.current.value));
    userNameRef.current.value = "";
    userNameRef.current.blur();
  };

  return (
    <Form1
      id="people"
      title="Add People"
      onSubmitHandler={submitHandler}
      userRef={userNameRef}
      placeholder="Enter Name Here"
      btnText="Add"
    />
  );
};

export default AddPeople;
