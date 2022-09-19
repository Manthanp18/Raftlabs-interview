import React, { useState } from "react";

import findDegree from "../util/searchDFS";

const AppContext = React.createContext({
  users: [],
  graph: [],
  output: [],
  alert: {
    hasAlert: false,
    variant: "",
    description: "",
  },
  hasOutput: false,
  searchedUsers: [],
  onNewUserEntry: (user) => {},
  onNewRelationshipEntry: (user1, user2) => {},
  onSearch: (user1, user2) => {},
});

export const AppContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [graph, setGraph] = useState([]);
  const [output, setOutput] = useState([]);
  const [hasOutput, setHasOutput] = useState(false);
  const [alert, setAlert] = useState({
    hasAlert: false,
    variant: "",
    description: "",
  });
  const [searchedUsers, setSearchedUsers] = useState([]);
  // console.log(output, graph);
  const newUserEntryHandler = (user) => {
    const findUser = users.find((u) => u.name === user.name);
    if (findUser) {
      setAlert({
        hasAlert: true,
        variant: "danger",
        description: `'${user.name}' is already added! `,
      });
      return;
    }
    setUsers((prev) => [...prev, user]);
    setGraph((prev) => [...prev, []]);
    setAlert({
      hasAlert: true,
      variant: "success",
      description: `New User - '${user.name}' is addedd successfully!`,
    });
  };

  const newRelationshipEntryHandler = (user1, user2) => {
    const user1Index = users.findIndex((user) => user.name === user1);
    const user2Index = users.findIndex((user) => user.name === user2);
    //  check if relationship is already set
    const findRelation = graph[user1Index].find(
      (uindex) => uindex === user2Index
    );

    if (findRelation) {
      setAlert({
        hasAlert: true,
        variant: "danger",
        description: `'${user1}' is already a Friend of '${user2}'!`,
      });
      return;
    }
    //   relationship to the graph
    setGraph((prev) => {
      const prevGraph = [...prev];
      prevGraph[user1Index].push(user2Index);
      return prevGraph;
    });
    setAlert({
      hasAlert: true,
      variant: "success",
      description: `'${user1}' is now a Friend of '${user2}'!`,
    });
  };

  const onSearchHandler = (user1, user2) => {
    setAlert({
      hasAlert: false,
      variant: "",
      description: "",
    });
    const user1Index = users.findIndex((user) => user.name === user1);
    const user2Index = users.findIndex((user) => user.name === user2);
    const res = findDegree(user1Index, user2Index, graph);
    setHasOutput(true);
    setOutput(res);
    setSearchedUsers([user1, user2]);
  };

  return (
    <AppContext.Provider
      value={{
        users: users,
        graph: graph,
        hasOutput: hasOutput,
        output: output,
        alert: alert,
        searchedUsers: searchedUsers,
        onNewUserEntry: newUserEntryHandler,
        onNewRelationshipEntry: newRelationshipEntryHandler,
        onSearch: onSearchHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
