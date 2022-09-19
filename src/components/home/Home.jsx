import { useState } from "react";
// import AppContext from '../../store/appContext';
import Navbar from "../navbar/Navbar";
import AddPeople from "../sections/addPeople/AddPeople";
import AddRelationship from "../sections/addRelationship/AddRelationship";

import Separation from "../sections/separation/Separation";
// import Alerts from '../ui/Alert';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // const appCtx = useContext(AppContext);
  return (
    <>
      <Navbar toggle={toggle} />
      <AddPeople />
      <AddRelationship />
      <Separation />
    </>
  );
};

export default Home;
