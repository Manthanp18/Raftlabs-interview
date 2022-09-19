class AppModule {
  users;
  graph;
  hasOutput;
  output;
  alert;
  searchedUsers;
  onNewUserEntry;
  onNewRelationshipEntry;
  onSearch;

  constructor(
    users,
    graph,
    hasOutput,
    output,
    alert,
    searchedUsers,
    onNewUserEntry,
    onNewRelationshipEntry,
    onSearch
  ) {
    this.users = users;
    this.graph = graph;
    this.hasOutput = hasOutput;
    this.output = output;
    this.alert = alert;
    this.searchedUsers = searchedUsers;
    this.onNewUserEntry = onNewUserEntry;
    this.onNewRelationshipEntry = onNewRelationshipEntry;
    this.onSearch = onSearch;
  }
}
export default AppModule;
